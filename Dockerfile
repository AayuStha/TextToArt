FROM node

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY app.js app.js
COPY public/ public/
COPY views/ views/

RUN npm install

ENTRYPOINT ["node", "app.js"]