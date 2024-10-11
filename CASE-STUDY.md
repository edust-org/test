# Introduction

At [Edust Org](https://github.com/edust-org), our backend development involved creating a complex architecture that supports multiple features, including user authentication, organization management, role-based access control, and API documentation. The primary objective of the **Edust-Backend** was to build a scalable and modular backend system to power our educational platform, facilitating smooth interactions between students, teachers, and organizations.

# Versions

- [0.1.0](#version-010-initial-backend)

## Version 0.1.0: Initial Backend

### Problem Statement

The primary challenge we faced in the early stages of backend development was setting up a clean, scalable, and maintainable architecture for a growing set of features. Each new feature required creating models, controllers, services, and route handlers. This became cumbersome as more modules were added, and maintaining consistency became difficult. We needed a solution that allowed the development team to quickly scaffold new features, ensure adherence to coding standards, and efficiently manage role-based access.

### The Decision to Use

To address this, we chose **Express.js** as our backend framework with **TypeScript** for static typing, which helps in reducing bugs and enhancing code maintainability. We also adopted **Sequelize ORM** for database interactions to allow flexibility in switching between different databases like MySQL and PostgresSQL in the future. Also many different packages.

We structured our backend to use the following components:

- **src/api/v0/routes**: For managing the API endpoints.
- **src/api/v0/controllers**: For handling the business logic.
- **src/api/v0/services**: For database and logic abstraction.
- **src/middleware**: For common tasks like authentication and error handling.

### Challenges Faced and Solutions Provided

#### Jun 10, 2024

**Backend Environment Setup**:

- **Problem**: We needed to set up a backend environment using Express, TypeScript, and integrate a database. This was crucial for establishing the foundation of our project.
- **Solution**:

  - We started by setting up the basic environment [99172f8](https://github.com/edust-org/edust-backend/commit/99172f8).
  - We then set up Express with TypeScript [429b8a5](https://github.com/edust-org/edust-backend/commit/429b8a5). Here is an excerpt from the `package.json` file, which highlights the setup:

  ```json
  {
    "name": "edust-backend",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "build": "tsc",
      "start": "node dist/server.js",
      "dev": "nodemon",
      "lint": "eslint . --ext .ts",
      "format": "prettier --write .",
      "db:migrate": "ts-node migrate.ts",
      "db:seed": "npx sequelize-cli db:seed:all",
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "bcrypt": "^5.1.1",
      "body-parser": "^1.20.2",
      "cookie-parser": "^1.4.6",
      "cors": "^2.8.5",
      "dotenv": "^16.4.5",
      "express": "^4.19.2",
      "express-validator": "^7.1.0",
      "jsonwebtoken": "^9.0.2",
      "mysql2": "^3.10.2",
      "sequelize": "^6.37.3",
      "umzug": "^3.8.1"
    },
    "devDependencies": {
      "@types/bcrypt": "^5.0.2",
      "@types/body-parser": "^1.19.5",
      "@types/cookie-parser": "^1.4.7",
      "@types/cors": "^2.8.17",
      "@types/es6-promise": "^3.3.0",
      "@types/express": "^4.17.21",
      "@types/jsonwebtoken": "^9.0.6",
      "@types/node": "^20.14.10",
      "@types/sequelize": "^4.28.20",
      "@typescript-eslint/eslint-plugin": "^7.16.0",
      "@typescript-eslint/parser": "^7.16.0",
      "eslint": "^9.6.0",
      "eslint-config-prettier": "^9.1.0",
      "eslint-import-resolver-typescript": "^3.6.1",
      "eslint-plugin-prettier": "^5.1.3",
      "nodemon": "^3.1.4",
      "prettier": "^3.3.2",
      "sequelize-cli": "^6.6.2",
      "ts-node": "^10.9.2",
      "ts-node-dev": "^2.0.0",
      "tsconfig-paths": "^4.2.0",
      "typescript": "^5.5.3"
    }
  }
  ```

  The setup involved a lot of configuration, such as adding TypeScript support, setting up database migrations and seeders, linting with ESLint, and code formatting with Prettier.

- **Challenges**
  The main challenge we faced was dealing with database migrations and seeders. While there are plenty of resources available for JavaScript, we had fewer resources for TypeScript. We had to figure out how to properly handle these using TypeScript and Sequelize ORM. This took time, but we resolved it by carefully integrating the right TypeScript tools.

### Conclusion

The initial version of the Edust-Backend established a scalable and modular architecture that allowed developers to easily create and manage new features. With the implementation of user authentication, role-based access control, organization management, and API documentation, we laid the foundation for a powerful and flexible backend system to support the growing needs of the Edust platform.
