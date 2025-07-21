# Overview

This is a minimal reproduction repo for https://github.com/eliasm307/storybook-addon-deep-controls/issues/65

# Installing & running

The repo comes with a configured Docker Compose setup. To launch the container:

```shell
docker compose up
```

Once the container is built and the service is up, connect to it & install the dependencies:

```shell
npm run connect:bash
npm ci --force # --force flag is needed due to an issue with @storybook/types versioning
```

Once connected, start the Storybook in dev mode:

```shell
npm run storybook:dev
```

The above will start Storybook on port 6007 of the container mapped to the same port on the host,
making it accessible via `http://localhost:6007` from the host.