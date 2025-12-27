FROM node:18-alpine
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
WORKDIR /usr/src/app
COPY app/package*.json ./
RUN npm ci --only=production
COPY app/ .
USER appuser
EXPOSE 3000
CMD ["node", "app.js"]
