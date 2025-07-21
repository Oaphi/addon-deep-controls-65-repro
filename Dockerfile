FROM node:20.18.1

# package-lock must be copied for npm ci to work
COPY ./package.json /app/
COPY ./package-lock.json /app/

WORKDIR /app

EXPOSE 6007

CMD sleep 100d

