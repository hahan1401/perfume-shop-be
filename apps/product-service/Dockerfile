FROM node:20-alpine AS base
RUN apk add --no-cache libc6-compat
RUN apk --no-cache add curl

FROM base AS builder
WORKDIR /app
COPY . .
RUN npm run build:product

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/dist/apps/product-service ./
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 4001
CMD ["node", "main.js"]