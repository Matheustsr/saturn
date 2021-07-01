FROM node:latest
 RUN mkdir /src
 WORKDIR /src
 COPY package.json /src/
 COPY yarn.lock /src/
 RUN npm install
 ADD . /src/
