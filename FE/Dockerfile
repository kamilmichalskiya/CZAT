FROM node:alpine
WORKDIR /fe
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
