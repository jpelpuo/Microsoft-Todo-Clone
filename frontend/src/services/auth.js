const login = async (email, password) => {
    const requestBody = {
        query: `
            query {
                login(email: "${email}", password : "${password}"){
                    userId
                    token
                    firstName
                    lastName
                    tokenExpiration
                }
            }
        `
    };

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
    };


    try {
        const response = await fetch("http://localhost:5500/graphql", requestOptions);

        const responseData = await response.json();
        return responseData;

    } catch (error) {
        console.log(error)
    }
}

export default login;
