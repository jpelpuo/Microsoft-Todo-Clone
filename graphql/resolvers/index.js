const resolvers = {
    getTasks: async () => {
        await console.log("Hi There")
    },
    createTask: async ({}) => {
        await console.log("Hi there again")
    }
}

module.exports = resolvers;