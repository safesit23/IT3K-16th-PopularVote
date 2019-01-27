FROM node:8.15-alpine
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install

COPY ./components ./components
COPY ./config ./config
COPY ./pages ./pages
COPY ./service ./service
COPY ./static ./static
COPY ./utils ./utils
COPY .babelrc .
COPY next.config.js .
COPY package-lock.json .
RUN yarn build

EXPOSE 3000
CMD ["yarn","start","--env=production"]
