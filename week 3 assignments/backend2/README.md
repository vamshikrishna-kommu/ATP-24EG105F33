###steps to create backend with database

1.generate package.json-------npm init -y

2.create express server

3.install mangoose and connect to the mongodb server
    --REST API -- MongoDB native driver => DB server
    --REST API -- Mongoose ODM tool => DB server

4.build USER REST API
    --create user
    --read all users
    --read a user by id
    --update a user by id
    --delelete a user by id
    
5.create schema and model of the resource(user)

6.create user api and define the routes

USER AUTHENTICATION (login)
    -submit credentials and get token


    -public routes(by anyone)
    -private routes(bu authenticated users only)






    3.cookies will send along with request automatically in same origin request , but for cross origin request , the token should be explicitly included to the request