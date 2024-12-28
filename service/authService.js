// fetch service for authentication
const registerUrl = 'http://localhost:3000/auth/register';
const loginUrl = 'http://localhost:3000/auth/login';

export function registerUser() {
  fetch(registerUrl)
    .then((response) => {
      if (!response.ok) throw new Error('not a valid response')
      return response.json()
    })
    .then((dataobj) => {
      console.log(dataobj)
    })
    .catch((error) => {
      console.error(error.message)
    })
}

export function loginUser() {
  fetch(loginUrl)
    .then((response) => {
      if (!response.ok) throw new Error('not a valid response')
      return response.json()
    })
    .then((dataobj) => {
      console.log(dataobj)
    })
    .catch((error) => {
      console.error(error.message)
    })
}
