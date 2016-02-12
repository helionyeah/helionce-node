FROM hwestphal/nodebox

COPY ./ /src
WORKDIR /src

RUN npm install
RUN npm test

EXPOSE 8080
CMD ["node", "server.js"]
