FROM node:8.15-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY ./api ./api
COPY ./front-end ./front-end
COPY server.js .
COPY package-lock.json .
EXPOSE 9000

CMD ["node","server.js"]