'use strict';

const path = require('path');
const { Sequelize } = require('sequelize');
const dbConfigs = require('./config');

const env = process.env.NODE_ENV || 'development';
const dbConfig = dbConfigs[env] || dbConfigs.development;

let sequelize;

if (process.env.DATABASE_URL) {
  // Render PostgreSQL hoặc Cloud Database URL
  console.log('🔌 Đang kết nối Database qua DATABASE_URL (Cloud PostgreSQL)...');
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // Cho phép chứng chỉ tự ký của Render
      }
    },
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
} else if (dbConfig.dialect === 'sqlite') {
  const sqlitePath = path.resolve(__dirname, '../../database.sqlite');
  sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: sqlitePath,
    logging: dbConfig.logging
  });
} else {
  sequelize = new Sequelize(
    dbConfig.database || process.env.DB_NAME,
    dbConfig.username || process.env.DB_USER,
    dbConfig.password || process.env.DB_PASSWORD,
    {
      host: dbConfig.host || process.env.DB_HOST,
      port: dbConfig.port || process.env.DB_PORT,
      dialect: dbConfig.dialect || 'mysql',
      logging: dbConfig.logging,
      pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  );
}

// Kiểm tra kết nối và tự động fallback nếu cần
(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Đã kết nối cơ sở dữ liệu thành công.');
  } catch (err) {
    console.error('⚠️ Không thể kết nối cơ sở dữ liệu chính:', err.message);
    // Nếu kết nối Cloud PostgreSQL thất bại, chuyển tạm sang SQLite để server không bị crash
    if (process.env.DATABASE_URL) {
      console.log('🔄 Đang kích hoạt Fallback SQLite nội bộ để duy trì hệ thống...');
      try {
        const fallbackSequelize = new Sequelize({
          dialect: 'sqlite',
          storage: path.resolve(__dirname, '../../database.sqlite'),
          logging: false
        });
        await fallbackSequelize.authenticate();
        console.log('✅ Fallback SQLite sẵn sàng hoạt động.');
      } catch (fbErr) {
        console.error('⚠️ Lỗi khởi tạo Fallback SQLite:', fbErr.message);
      }
    }
  }
})();

module.exports = sequelize;
