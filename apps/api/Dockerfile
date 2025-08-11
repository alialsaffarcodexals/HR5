FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml ../../package.json ./
RUN corepack enable && pnpm -v
RUN pnpm install --frozen-lockfile || true

FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN corepack enable
RUN pnpm install --frozen-lockfile
RUN pnpm prisma generate
RUN pnpm build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app .
EXPOSE 4000
CMD ["node","dist/main.js"]
