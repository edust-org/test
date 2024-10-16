# Option 1

```
.
├── docs
├── jest.config.js
├── LICENSE
├── nodemon.json
├── package.json
├── pnpm-lock.yaml
├── public
│   └── images
├── README.md
├── src
│   ├── app.ts
│   ├── configs
│   │   ├── cloudinary.config.ts
│   │   ├── db.config.ts
│   │   └── swagger-docs.config.ts
│   ├── middlewares
│   │   ├── authenticate.middleware.ts
│   │   └── error-handler.middleware.ts
│   ├── database
│   │   ├── migrations
│   │   ├── models
│   │   └── seeders
│   ├── modules
│   │   ├── auth
│   │   │   ├── controllers
│   │   │   │   ├── v1
│   │   │   │   │   ├── login.controller.ts
│   │   │   │   │   └── register.controller.ts
│   │   │   │   └── v2
│   │   │   │       ├── login-with-2fa.controller.ts
│   │   │   │       └── register-with-email.controller.ts
│   │   │   ├── routes
│   │   │   │   ├── auth.v1.routes.ts
│   │   │   │   └── auth.v2.routes.ts
│   │   │   ├── services
│   │   │   │   ├── auth.service.ts
│   │   │   │   └── auth-with-2fa.service.ts
│   │   │   └── schemas
│   │   │       ├── auth.schema.ts
│   │   │       └── auth.v2.schema.ts
│   │   ├── user
│   │   │   ├── controllers
│   │   │   │   └── get-user.controller.ts
│   │   │   ├── routes
│   │   │   │   └── user.routes.ts
│   │   │   ├── services
│   │   │   │   └── user.service.ts
│   │   │   └── schemas
│   │   │       └── user.schema.ts
│   │   └── organization
│   │       ├── controllers
│   │       │   └── get-organization.controller.ts
│   │       ├── routes
│   │       │   └── organization.routes.ts
│   │       └── services
│   │           └── organization.service.ts
│   ├── routes.ts
│   └── utils
│       └── logger.ts
├── tests
│   ├── api
│   │   ├── auth
│   │   │   └── auth.v1.test.ts
│   │   └── user
│   │       └── user.test.ts
└── tsconfig.json

```

# Option 2

```
/project-root/
├── src/
│   ├── api/
│   │   ├── v1/
│   │   │   ├── users/
│   │   │   │   ├── controller.ts         # Users Controller
│   │   │   │   ├── route.ts              # Users Routes
│   │   │   │   ├── service.ts            # Users Service
│   │   │   │   ├── repository.ts         # Users Repository
│   │   │   │   └── types.ts              # User Types
│   │   │   ├── organizations/
│   │   │   │   ├── controller.ts         # Organization Controller
│   │   │   │   ├── route.ts              # Organization Routes
│   │   │   │   ├── service.ts            # Organization Service
│   │   │   │   └── types.ts              # Organization Types
│   │   │   └── auth/
│   │   │       ├── controller.ts         # Auth Controller
│   │   │       ├── route.ts              # Auth Routes
│   │   │       └── service.ts            # Auth Service
│   │   └── v2/                           # Future Version (v2)
│   │       └── ...                       # Similar structure as v1
│   │
│   ├── models/                           # Centralized Models
│   │   ├── User.ts                       # User Model
│   │   ├── Role.ts                       # Role Model (Central Role Management)
│   │   ├── Organization.ts               # Organization Model
│   │   └── index.ts                      # Model Associations & Exports
│   │
│   ├── core/
│   │   ├── database/
│   │   │   ├── connection.ts             # Sequelize Initialization
│   │   │   └── migrations/               # DB Migrations
│   │   └── middleware/
│   │       ├── auth.middleware.ts        # Auth Middleware
│   │       └── error.middleware.ts       # Error Handling Middleware
│   │
│   ├── config/
│   │   ├── db-config.ts                  # Database Config
│   │   └── index.ts                      # Other Configurations
│   │
│   └── utils/
│       ├── logger.ts                     # Logging Utility
│       └── helpers.ts                    # Helper Functions
│
├── tests/                                # Centralized Tests
│   ├── api/
│   │   ├── v1/
│   │   │   ├── users.test.ts             # Users Tests
│   │   │   ├── organizations.test.ts     # Organizations Tests
│   │   │   └── auth.test.ts              # Auth Tests
│   │   └── v2/                           # Future Version Tests
│   │       └── ...
│   └── core/
│       └── errorHandler.test.ts          # Error Middleware Test
│
├── node_modules/                         # Installed Dependencies
├── package.json                          # Dependencies & Scripts
├── pnpm-lock.yaml                        # Lock File (for pnpm)
├── tsconfig.json                         # TypeScript Config
├── tsconfig-paths-bootstrap.js           # Path Aliases Bootstrap
├── example.env                           # Example Environment Variables
├── .env                                  # Environment Variables
├── .gitignore                            # Git Ignore Config
└── README.md                             # Project Documentation


```
