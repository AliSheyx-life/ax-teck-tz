# Nuxt App

This repository contains a Nuxt.js application designed to showcase the usage of modern web technologies.

The project leverages Nuxt.js, a powerful framework based on Vue.js, enabling server-side rendering and a smooth development experience. It utilizes TypeScript for type safety and Pinia for state management, ensuring a robust structure.

## Scripts

- "**build**": Build the application.
- "**dev**": Start the development server.
- "**generate**": Generate static files for deployment.
- "**preview**": Preview the production build locally.
- "**lint**":js: Lint JavaScript and Vue files using ESLint.
- "**lint**":prettier: Check code formatting using Prettier.
- "**lint**": Run both lint:js and lint:prettier commands.
- "**lintfix**": Auto-fix linting issues.
- "**test**": Run tests using Vitest.

## Getting Started

To start the development server, follow these steps:

1. Install dependencies:

```bash
npm install
# or
yarn install
```

## Usage

  Run json-server

```bash
  json-server --watch db.js
```

  Then run Nuxt app

```bash
  npm run dev
  # or
  yarn dev
```

To start with Docker run

```bash
  docker compose up -d --build
```

## Structure

The project follows a structured layout:
- `assets/`: Contains uncompiled assets like images or fonts.
- `components/`: Houses reusable Vue components.
- `layouts/`: Holds the main layout components.
- `pages/`: Contains the application's views and routes.
- `plugins/`: Includes Nuxt.js plugins.
- `store/`: Contains Pinia store files.
- `utils/`: Contains app helper functions
- `tests/`: Contains Test scripts.
