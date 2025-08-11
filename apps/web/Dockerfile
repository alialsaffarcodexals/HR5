FROM node:20-bookworm-slim AS build
WORKDIR /app
ARG API_BASE_URL=http://api:4000
ENV NEXT_PUBLIC_API_BASE_URL=$API_BASE_URL
ENV API_BASE_URL=$API_BASE_URL
COPY . .
RUN corepack enable && corepack prepare pnpm@9.0.0 --activate
RUN pnpm install --no-frozen-lockfile
RUN pnpm build

FROM node:20-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_PUBLIC_API_BASE_URL=$API_BASE_URL
ENV API_BASE_URL=$API_BASE_URL
COPY --from=build /app ./
EXPOSE 3000
CMD ["pnpm","start"]
