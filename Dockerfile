# syntax=docker/dockerfile:1

# Pinned to the same Node version as CI
FROM node:24.21.0-trixie-slim AS base
WORKDIR /app

# Build: install everything and bundle static files into /app/dist
FROM base AS build
COPY package.json package-lock.json .npmrc ./
# Skip npm prepare script
RUN npm ci --ignore-scripts
COPY . .
RUN npm run build

# Runtime: production dependencies, built files and the server
FROM base AS runtime
ENV NODE_ENV=production
COPY package.json package-lock.json .npmrc ./
RUN npm ci --omit=dev --ignore-scripts
COPY --from=build /app/dist ./dist
COPY server.js ./

EXPOSE 3000
CMD ["node", "server.js"]
