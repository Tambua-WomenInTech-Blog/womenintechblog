FROM node:12-buster AS base
RUN yarn global add gatsby-cli
WORKDIR /app
ADD . ./
RUN yarn
RUN gatsby build

# Production Image
FROM danjellz/http-server:latest
WORKDIR /public
COPY --from=base /app/public/ .