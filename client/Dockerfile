FROM node:lts-slim

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install --silent
# Copy app source code
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
