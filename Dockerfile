FROM node:8-alpine
WORKDIR /app
ADD . /app
RUN apk add -U curl

CMD node server.js
HEALTHCHECK CMD curl -s --fail -o /dev/null http://localhost:3000/ || exit 1
