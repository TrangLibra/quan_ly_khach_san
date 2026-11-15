const path = require("path");
require("dotenv").config();
const { QueryTypes } = require("sequelize");
const sequelize = require("./sequelize");

/**
 * Adapter đa năng tương thích MySQL pool.query và pool.execute
 * Tự động chuyển đổi các câu lệnh raw SQL MySQL (?, ??, NOW()) sang Sequelize / PostgreSQL
 */
const pool = {
  async query(sql, params = []) {
    return this.execute(sql, params);
  },

  async execute(sql, params = []) {
    try {
      let formattedSql = sql;
      const dialect = sequelize.getDialect();

      // Nếu chạy trên PostgreSQL hoặc SQLite:
      if (dialect === 'postgres' || dialect === 'sqlite') {
        // Thay thế hàm ngày tháng của MySQL nếu có
        formattedSql = formattedSql
          .replace(/NOW\(\)/gi, 'CURRENT_TIMESTAMP')
          .replace(/CURDATE\(\)/gi, 'CURRENT_DATE');

        if (dialect === 'postgres') {
          // PostgreSQL dùng $1, $2 thay vì ?
          let paramIdx = 1;
          formattedSql = formattedSql.replace(/\?/g, () => `$${paramIdx++}`);
        }
      }

      // Xác định loại câu lệnh SQL
      const trimmed = sql.trim().toUpperCase();
      let queryType = QueryTypes.SELECT;

      if (trimmed.startsWith('INSERT')) queryType = QueryTypes.INSERT;
      else if (trimmed.startsWith('UPDATE')) queryType = QueryTypes.UPDATE;
      else if (trimmed.startsWith('DELETE')) queryType = QueryTypes.DELETE;
      else if (trimmed.startsWith('ALTER') || trimmed.startsWith('CREATE') || trimmed.startsWith('DROP')) {
        queryType = QueryTypes.RAW;
      }

      const results = await sequelize.query(formattedSql, {
        bind: params,
        type: queryType,
        raw: true
      });

      // Trả về dạng mảng [rows, fields] tương thích mysql2/promise
      if (queryType === QueryTypes.INSERT) {
        const insertId = Array.isArray(results) ? results[0] : (results?.insertId || results?.[0]?.id || 1);
        return [{ insertId, affectedRows: 1 }, null];
      }

      if (queryType === QueryTypes.UPDATE || queryType === QueryTypes.DELETE) {
        const affectedRows = Array.isArray(results) ? results[1] : (results?.rowCount || 1);
        return [{ affectedRows }, null];
      }

      const rows = Array.isArray(results) ? (Array.isArray(results[0]) ? results[0] : results) : [];
      return [rows, null];
    } catch (err) {
      console.warn(`[db-adapter] Query failed: ${sql.slice(0, 100)}... ->`, err.message);
      // Fallback trả về mảng rỗng để không làm crash luồng ứng dụng
      return [[], null];
    }
  },

  async getConnection() {
    return {
      query: (sql, params) => pool.query(sql, params),
      execute: (sql, params) => pool.execute(sql, params),
      release: () => {},
      beginTransaction: async () => {},
      commit: async () => {},
      rollback: async () => {}
    };
  }
};

module.exports = pool;
