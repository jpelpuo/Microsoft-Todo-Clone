export const requestOptions = requestBody => {
    return {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(requestBody)
    }
}

export default requestOptions;