FROM node:12.16.1-alpine AS build-stage

RUN mkdir -p /usr/src/
WORKDIR /usr/src/

COPY . .

RUN apk --no-cache add python make

RUN npm ci --quiet
RUN npm test
RUN npm run build
RUN npm ci --only=production --quiet


FROM node:12.16.1-alpine

RUN adduser -D -u 1001 app
RUN mkdir -p /usr/src/app && chown -R app /usr/src/app
WORKDIR /usr/src/app
USER 1001

COPY --from=build-stage /usr/src/node_modules/ /usr/src/app/node_modules/
COPY --from=build-stage /usr/src/package.json /usr/src/app/
COPY --from=build-stage /usr/src/dist/ /usr/src/app/dist/

EXPOSE 8000

#run correctly -> exit code etc... entrypoint?
CMD npm start