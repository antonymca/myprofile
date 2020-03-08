FROM node:12-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN  npm install --production
RUN npm install pm2 -g

COPY . .

EXPOSE 3000

CMD ["npm","start"]