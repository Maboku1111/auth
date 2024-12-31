// fetch service for authentication
async function fetchData(url) {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include'
        });
        console.log(response);
        if (!response.ok) throw new Error('not a valid response');
        let data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}

const registerUrl = 'http://localhost:3000/auth/register';
const loginUrl = 'http://localhost:3000/auth/login';

export const registerUser = fetchData(registerUrl).then(data => console.log(data))
export const loginUser = fetchData(loginUrl).then(data => console.log(data))
