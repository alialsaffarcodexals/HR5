FROM node:20-alpine AS build
WORKDIR /app
COPY . .
RUN corepack enable
RUN pnpm install --frozen-lockfile
RUN pnpm build

FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app .
EXPOSE 3000
CMD ["pnpm","start"]
