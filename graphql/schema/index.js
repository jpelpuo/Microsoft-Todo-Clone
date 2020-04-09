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
        task_body: String!
        task_completed: Boolean!
        created_by: User
    }

    input createTaskInput {
        task_body: String!
        task_completed: Boolean!
        created_by: User
    }

    input deleteTask {
        task_id: ID!
    }

    input updateTask{
        _id: ID!
        task_body: String
        task_completed: Boolean
    }
 

    type RootQuery {
        getTasks: [Task!]!
    }

    type RootMutation {
        createTask(taskInput: createTaskInput): Task!
        deleteTask(id: ID!): Task!
        completeTask(id: ID!): Task!
        updateTask(updateInput: updateTask!): Task!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);


module.exports = Schema;