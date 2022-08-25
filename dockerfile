FROM cypress/browsers:node14.19.0-chrome100-ff99-edge
RUN mkdir /cypress-docker
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
RUN npm install -g npm@8.15.0
RUN npm install
ENTRYPOINT [ "npm","run" ]