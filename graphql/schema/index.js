const { buildSchema } = require('graphql');

const Schema = buildSchema(`
    type User{
        name: String!
        email: String!
        contact: String
        username: String!
        password: String!
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

    type RootQuery {
        getTasks: [Task!]!
    }

    type RootMutation{
        createTask(taskInput: createTaskInput): Task
        deleteTask(task: Task!)
        completeTask(task: Task!)
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }
`);


module.exports = Schema;