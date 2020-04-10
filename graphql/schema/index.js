const { buildSchema } = require('graphql');

const Schema = buildSchema(`
    type User{
        _id: ID!
        email: String!
        password: String!
        createdTasks: [Task!]!
    }

    type Task {
        _id : ID!
        taskBody: String!
        taskCompleted: Boolean!
        createdBy: User
    }

    input createTaskInput {
        taskBody: String!
        taskCompleted: Boolean!
    }

    input deleteTask {
        taskId: ID!
    }

    input updateTask{
        id: ID!
        taskBody: String
        taskCompleted: Boolean
    }

    input addUser{
        email: String!
        password: String!
    }

    type AuthData{
        userId: String!
        token: String!
        tokenExpiration: Int!
    }
 
    type RootQuery {
        getTasks: [Task!]!
        getTask(id: ID!): Task!
        login(email: String!, password: String!): AuthData!
    }

    type RootMutation {
        createTask(taskInput: createTaskInput): Task!
        deleteTask(id: ID!): Task!
        completeTask(id: ID!): Task!
        updateTask(updateInput: updateTask!): Task!
        addUser(userInput: addUser!): User!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);


module.exports = Schema;