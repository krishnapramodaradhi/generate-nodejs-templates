FROM node:alpine

RUN addgroup -S yodoc && adduser -S -g yodoc yodoc

ENV HOME=/home/yodoc

COPY package.json package-lock.json $HOME/app/

COPY src $HOME/app/src

RUN chown -R yodoc:yodoc $HOME/* /usr/local/

WORKDIR $HOME/app

RUN npm install --silent --progress=false --production

RUN chown -R yodoc:yodoc $HOME/*

USER yodoc

EXPOSE 3000

CMD ["npm", "start"]