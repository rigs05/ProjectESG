# The Backend of ProjectESG

Modules Installed : Express, JWT, mongoose, cors, bcrypt, dotenv
Dev Dependencies: Nodemon, module-types

- Initialized the server
- .env file for credentials
- db.ts => connection to database ProjectESG
- userSchema => define schema of database {email, password} (to ensure type integrity in MongoDB)
- 3 routes login, signup and userAuth (with middleware), code is written in MVC architecture
- passwords are hashed and decoded using bcrypt module
- verifyMiddleware.ts to verify the jwt token after login (it is made a middleware as it is resolving the jwt which may have further actions later on)

- Structure of Back End:

- Write how to setup backend (incl instruction to make .env)
