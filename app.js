const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const Schema = require('./graphql/schema/index');
const resolvers = require('./graphql/resolvers/index');
const connectToDatabase = require('./utils/database');
const chalk = require('chalk');
const ENV = require('dotenv');
const isAuthenticated = require('./middleware/isAuthenticated')

ENV.config();

const app = express();

(async () => {
    await connectToDatabase()
        .catch(error => {
            console.log(chalk.redBright("Could not connect to database"))
        });
})();

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(isAuthenticated);

app.use((request, response, next) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if(request.method === 'OPTIONS'){
        return response.sendStatus(200);
    };
    next();
})

// Graphql middleware
app.use('/graphql', graphqlHTTP({
    schema: Schema,
    rootValue: resolvers,
    graphiql: true
}))

module.exports = app;