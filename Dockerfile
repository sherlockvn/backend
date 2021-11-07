FROM node:12-alpine
RUN mkdir /pm-project && apk update && apk upgrade && \
    apk add --no-cache bash git openssh tini tzdata

RUN addgroup -g 211000 -S appgroup && adduser -u 211000 -S appuser -G appgroup

WORKDIR /pm-project
COPY . .

RUN npm install && npm cache clean --force

RUN apk del git openssh

RUN chown -R appuser:appgroup /pm-project
USER appuser

EXPOSE 8085

ENTRYPOINT ["/sbin/tini", "-sg", "--"]