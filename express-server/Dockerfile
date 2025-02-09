FROM node:14

WORKDIR /app

COPY package.json .
# COPY package-lock.json .

RUN npm install


COPY . .

RUN npx prisma generate

CMD ["node", "server.js"]
