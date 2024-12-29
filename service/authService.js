// fetch service for authentication
function fetchData(url) {
    return fetch(url)
        .then((response) => {
            if (!response.ok) throw new Error('not a valid response')
            return response.json()
        })
        .then(data => data)
        .catch((error) => {
            console.error(error)
        })
}

const registerUrl = 'http://localhost:3000/auth/register';
const loginUrl = 'http://localhost:3000/auth/login';

export const registerUser = fetchData(registerUrl).then(data => console.log(data))
export const loginUser = fetchData(loginUrl).then(data => console.log(data))
