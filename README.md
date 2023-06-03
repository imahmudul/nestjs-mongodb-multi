# NestJS Framework - Multiple MongoDB Support

A local development setup or boilerplate for [Nest.js framework](https://nestjs.com/) with multi [MongoDB](https://www.mongodb.com/) 

## Quick Start

1. Install [Node.js](https://nodejs.org/en/download/) - _for IDE type checking_.
2. Install [Yarn](https://yarnpkg.com/lang/en/docs/install/) - _for IDE type checking_.
4. Clone the app:

```bash
git clone https://github.com/imahmudul/nestjs-mongodb-multi
```

5. Install npm packages - _for IDE type checking_.

```bash
cd nestjs-mongodb-multi
yarn install
```

6. Build and run the Docker image.

```bash
yarn docker-compose:dev
```

7. Access the app at http://localhost:3000.
8. Make file changes and it will automatically rebuild the app.

## Running All Tests

```bash
yarn docker-compose:test
```

## Running All Tests (with coverage)

```bash
yarn docker-compose:test:cov
```

## Running Tests (Watch)

1. Build and run the Docker image.

```bash
yarn docker-compose:test:watch
```

2. Make file changes and it will automatically rerun tests related to changed files.

## Build For Production

```bash
yarn docker-compose:prod
```

## VSCode Extensions

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Learn

Learn how to build this setup or boilerplate [here](https://dominicarrojado.com/posts/local-development-setup-for-nestjs-projects-with-mongodb/).
