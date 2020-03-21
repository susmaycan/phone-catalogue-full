FROM node:lts-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install --silent
# Copy app source code
COPY . .

EXPOSE 3001

CMD [ "npm", "start"]