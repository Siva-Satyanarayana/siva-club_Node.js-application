FROM node:20-alpine as builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/package.json .
RUN npm ci --omit=dev
COPY --from=builder /app/index.js ./index.js
CMD ["npm", "start"]


