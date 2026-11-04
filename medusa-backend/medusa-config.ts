import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS || "http://localhost:5173",
      adminCors: process.env.ADMIN_CORS || "http://localhost:5173,http://localhost:9000",
      authCors: process.env.AUTH_CORS || "http://localhost:5173,http://localhost:9000",
      jwtSecret: process.env.JWT_SECRET || "grand_horizon_secret_key_2026_luxury_hotel",
      cookieSecret: process.env.COOKIE_SECRET || "grand_horizon_cookie_secret_2026",
    }
  },
  modules: [
    {
      resolve: "./src/modules/hotel",
    },
    {
      resolve: "./src/modules/booking",
    },
    {
      resolve: "./src/modules/housekeeping",
    },
    {
      resolve: "./src/modules/restaurant",
    },
    {
      resolve: "./src/modules/finance",
    }
  ]
})
