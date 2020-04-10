const taskResolvers = require('./tasks');
const userResolvers = require('./user')

const resolvers = {
    ...taskResolvers,
    ...userResolvers
}

module.exports = resolvers;