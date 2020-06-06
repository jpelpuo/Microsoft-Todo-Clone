import requestOptions from '../helpers/requestOptions';

export const getTasks = async () => {
    const requestBody = {
        query: `
            query{
                getTasks{
                    taskBody
                    taskCompleted
                    taskImportant
                }
            }
        `
    }

    try{
        const response = await fetch('http://localhost:5500/graphql', requestOptions(requestBody));
        const responseData = await response.json();

        return responseData;
    }catch(error){
        console.log(error)
    }
} 

export default getTasks;