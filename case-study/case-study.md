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

  - We started by setting up the basic environment ([99172f8](https://github.com/edust-org/edust-backend/commit/99172f8)).
  - We then set up Express with TypeScript ([429b8a5](https://github.com/edust-org/edust-backend/commit/429b8a5)). Here is an excerpt from the `package.json` file, which highlights the setup:

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

#### Jun 12, 2024

**Backend Environment Setup**:

- **Problem**: We needed to define and set up roles for both users and organizations in the backend. The goal was to establish a clear structure for permissions and access control across different types of users and organizations within the system.

- **Solution**:

  - Created the **organization model** to represent organizations in the database ([d1c67a0](https://github.com/edust-org/edust-backend/commit/d1c67a0)).
  - Added the **organization role** to handle role-based access for organizations ([f338b50](https://github.com/edust-org/edust-backend/commit/f338b50)).
  - Completed **organization role seeding** to populate the database with predefined roles ([81f9852](https://github.com/edust-org/edust-backend/commit/81f9852)).
  - Built the **user model, migration, and seed** to set up users in the system ([a1d421c](https://github.com/edust-org/edust-backend/commit/a1d421c)).
  - Wrapped user generation logic in a function for better management and reuse ([241f58f](https://github.com/edust-org/edust-backend/commit/241f58f)).
  - Created the **role model** for assigning roles to users ([0baef36](https://github.com/edust-org/edust-backend/commit/0baef36)).
  - Updated user and role models to better reflect their relationship and interaction ([c2e6d09](https://github.com/edust-org/edust-backend/commit/c2e6d09)).
  - Established the **user role** to define user access based on their assigned role ([385f912](https://github.com/edust-org/edust-backend/commit/385f912)).

- **Challenges**
  - Setting up `seeding` for both users and organization roles was tricky, especially ensuring that the correct roles were assigned during the database population.
  - Maintaining consistency across both `user roles` and `organization roles` required careful planning and testing to avoid conflicts between the two different role structures.

#### Jun 13, 2024

**Global Error Handling and File Improvements**:

- **Problem**: As the project grew, error handling across different modules became inconsistent. There was a need for a unified error-handling mechanism to ensure that errors were managed effectively and didn't cause unexpected crashes. Additionally, some files required improvements to streamline the overall project structure.

- **Solution**:

  - Implemented **global error handling** to ensure consistent error management throughout the application ([e1a908f](https://github.com/edust-org/edust-backend/commit/e1a908f)).
  - Improved various **files and project structure** for better organization and maintainability.

- **Challenges**:

  - Ensuring that all modules and routes properly utilized the global error-handling mechanism required thorough testing and refactoring.
  - Refactoring multiple files without breaking existing functionality was challenging, as changes needed to be incremental and well-coordinated with the rest of the team.

**Swagger Documentation Setup for API Docs**:

- **Problem**: As our API expanded, documenting the endpoints and ensuring developers could easily understand and interact with them became a necessity. Without proper documentation, it was hard for team members and external developers to understand how to use the API.

- **Solution**:

  - Set up **Swagger docs** to API documentation for all routes ([0945626](https://github.com/edust-org/edust-backend/commit/0945626)).
  - This setup allowed us to expose the API documentation at a specific endpoint, `/api-docs`, so it can be accessed easily by any developer.

- **Challenges**:
  - Ensuring that Swagger correctly reflected all routes and endpoints required detailed integration across various modules.
  - Keeping the documentation in sync with the actual implementation was initially a challenge, especially as new routes and features were added.

#### Jun 14, 2024

**User Authentication System Setup**:

- **Problem**: We needed to implement a robust user authentication system, allowing users to register and log in using their email and password. Additionally, proper authentication checks and requirements had to be in place for protected routes.

- **Solution**:

  - Implemented the **login feature** where users can log in using their email and password ([2ec994c](https://github.com/edust-org/edust-backend/commit/2ec994c)).
  - Created the **registration service** to allow users to create an account ([9bc8f55](https://github.com/edust-org/edust-backend/commit/9bc8f55)).
  - Established that a **user can create an account** through the registration process ([b2acb6a](https://github.com/edust-org/edust-backend/commit/b2acb6a)).
  - Added **authentication requirements**, ensuring only authorized users can access protected routes ([9682246](https://github.com/edust-org/edust-backend/commit/9682246)).
  - Continued **working with authentication**, refining processes and improving the overall flow ([842d8b5](https://github.com/edust-org/edust-backend/commit/842d8b5)).

- **Challenges**:
  - Ensuring the authentication flow was both secure and user-friendly was a key challenge.
  - Properly handling edge cases, such as incorrect credentials or missing authentication tokens, required extensive testing.
  - Integrating the authentication system across all modules while maintaining scalability for future features was complex and required coordination across the development team.

#### Jun 15, 2024

**Added PugJS for Templating**:

- **Problem**: As we worked on backend development, we required a flexible and efficient templating engine to dynamically generate HTML for certain features. The goal was to make server-side rendering easier and more efficient.

- **Solution**:

  - Integrated **PugJS** into the project as our templating engine ([b975e36](https://github.com/edust-org/edust-backend/commit/b975e36)).
  - This allowed us to create reusable HTML templates, simplifying the rendering of dynamic content.

- **Challenges**:
  - Learning and implementing **PugJS syntax** across different views and ensuring consistency with previously used static HTML was initially challenging.
  - Adapting the existing project structure to incorporate **PugJS** required some refactoring, especially in routes that rendered views dynamically.

**User Authentication Improvements and Swagger Fixes**:

- **Problem**: We identified issues in the user authentication process, especially with finding users by email and ensuring proper protection for authenticated routes. Additionally, there were inconsistencies in the Swagger documentation for login and registration endpoints.

- **Solution**:

  - Improved the **findUserByEmail** function for more accurate user retrieval ([e7c373b](https://github.com/edust-org/edust-backend/commit/e7c373b)).
  - Implemented **authenticated route protection** to ensure only logged-in users can access specific routes ([0d07857](https://github.com/edust-org/edust-backend/commit/0d07857)).
  - Enhanced the **usersGetMe** route to retrieve user data based on their email, streamlining the user profile endpoint ([9b01cff](https://github.com/edust-org/edust-backend/commit/9b01cff)).
  - Fixed issues with **Swagger documentation** for login and registration routes, ensuring all details were correctly displayed in the API docs ([ab5fd2c](https://github.com/edust-org/edust-backend/commit/ab5fd2c)).

- **Challenges**:

  - Ensuring that **email-based user retrieval** was consistent across multiple services and routes, especially during the login and profile processes.
  - Adding **protection for authenticated routes** required refactoring several parts of the codebase to ensure proper checks and balances were in place.
  - Maintaining the accuracy of **Swagger documentation** as the codebase evolved, particularly for frequently changing authentication endpoints, was an ongoing challenge.

  #### Jun 16, 2024

**Fixing Issues with Path Alias**:

- **Problem**: We encountered issues with the use of **path aliases** in the codebase. These problems caused difficulties in importing modules and managing the project's structure efficiently, leading to confusion and errors.

- **Solution**:

  - Fixed the issues related to **path aliasing** by correcting alias paths in the `tsconfig.json` file and ensuring all imports were properly referenced ([4b7215b](https://github.com/edust-org/edust-backend/commit/4b7215b)).
  - Verified that the project structure and paths were well-aligned with the updated alias configurations.

- **Challenges**:
  - Troubleshooting **path resolution errors** caused by misconfigured aliases, which required careful examination of import statements throughout the project.
  - Ensuring that the **TypeScript compiler** and runtime could consistently resolve the aliases without issues during both development and production builds.
  - And also more import think that is in **database** directory we don't use any alias for `sequelize` migration problem.

### Conclusion

The initial version of the Edust-Backend established a scalable and modular architecture that allowed developers to easily create and manage new features. With the implementation of user authentication, role-based access control, organization management, and API documentation, we laid the foundation for a powerful and flexible backend system to support the growing needs of the Edust platform.
