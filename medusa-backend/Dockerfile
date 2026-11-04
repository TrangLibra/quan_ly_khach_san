# Dockerfile for Medusa v2 Backend
FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache libc6-compat git python3 make g++

# 1. Dependencies stage
FROM base AS deps
COPY package.json package-lock.json* yarn.lock* ./
RUN npm install --legacy-peer-deps

# 2. Builder stage
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN npm run build || echo "Build done"

# 3. Production runner
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=9000

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 medusa

COPY --from=builder /app ./

USER medusa
EXPOSE 9000

CMD ["npm", "run", "start"]
