FROM node:22-bookworm-slim

WORKDIR /app

RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       openssl \
       ca-certificates \
       python3 \
       make \
       g++ \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
COPY prisma ./prisma

RUN npm ci --include=dev --ignore-scripts \
    && DATABASE_URL="postgresql://placeholder:placeholder@localhost:5432/placeholder" \
       DIRECT_URL="postgresql://placeholder:placeholder@localhost:5432/placeholder" \
       npx prisma generate

COPY . .

ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000

CMD ["sh", "-c", "npm run prisma:deploy && exec node src/server.js"]