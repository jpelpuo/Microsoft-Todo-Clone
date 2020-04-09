const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const Schema = require('./graphql/schema/index');
const resolvers = require('./graphql/resolvers/index')

const app = express();

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse application/json
app.use(bodyParser.json());

// Graphql middleware
app.use('/graphql', graphqlHTTP({
    schema : Schema,
    rootValue: {
        resolvers
    },
    graphiql: true
}))

module.exports = app;