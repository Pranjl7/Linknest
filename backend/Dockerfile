FROM node:20-slim

WORKDIR /app

COPY /package*.json ./

RUN npm intsall

COPY . .

CMD ["npm", "run", "dev"]