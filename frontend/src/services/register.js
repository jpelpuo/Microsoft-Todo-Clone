export const register = async (firstName, lastName, email, password) => {
    const requestBody = {
        query : `
            mutation{
                addUser(userInput: {firstName: "${firstName}", lastName: "${lastName}", email: "${email}", password: "${password}"}){
                    email
                    password
                }
            }
        `
    }

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    }

    try{
        const response = await fetch("http://localhost:5500/graphql", requestOptions);

        const responseData = await response.json();
        return responseData;
    }catch(error){
        throw error
    }
}

export default register;
