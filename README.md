# Saturn

## Resources

- Express
- TypeORM
- SQLite

## About

- User registration
- Tag Registration (possible compliments)
  - Only admin user
- Registration of praise
  - User ID who will receive praise
  - ID of the user sending the compliment
  - tag ID
  - Creation date
- User authentication
  - Generate JWT Token
  - Validate user logged in the necessary routes
- User Listing
- Tag listing
- List of compliments by user

## Starting project


After cloning the project, you need to update the dependencies.

### Commands to download dependencies, run migrations and start application


```bash
yarn
yarn typeorm migration:run
yarn dev
```

Enjoy and happy hacking!
