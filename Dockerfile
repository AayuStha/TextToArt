FROM node

COPY *.json .
COPY app.js app.js
COPY public/ public/
COPY views/ views/

RUN npm install

ENTRYPOINT ["node", "app.js"]