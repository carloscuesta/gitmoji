FROM node:12-alpine AS builder

WORKDIR /build

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Build
COPY public public
COPY src src
COPY next.config.js .
RUN yarn build; \
    npx next export

FROM nginx:alpine AS runner
COPY --from=builder /build/out /usr/share/nginx/html