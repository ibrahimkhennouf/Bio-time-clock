    FROM node:latest
    WORKDIR /srv/app
    COPY package*.json ./
    RUN yarn
    COPY . .
    RUN yarn build
    EXPOSE 5000
    CMD ["node", "dist/app.js"]