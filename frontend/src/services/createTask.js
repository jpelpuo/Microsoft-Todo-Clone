import requestOptions from '../helpers/requestOptions';

export const createTask = async (taskBody, taskCompleted = false, taskImportant = false) => {
    const requestBody = {
        query: `
            mutation{
                createTask(taskInput: {taskBody: "${taskBody}", taskCompleted: ${taskCompleted}, taskImportant: ${taskImportant}}){
                    taskBody
                    taskCompleted
                    taskImportant
                }
            }
        `
    }

    try {
        const response = await fetch('http://localhost:5500/graphql', requestOptions(requestBody));
        const responseData = await response.json();

        return responseData;
    } catch (error) {
        console.log(error)
    }
}

export default createTask;