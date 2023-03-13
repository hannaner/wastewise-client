import * as usersAPI from './users-api'

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData)
    // console.log(token)
    // localStorage.setItem("token", token.user.token)
    return login(userData)
}

export function getToken() {
    const token = localStorage.getItem("token")
    if(!token) return null
    return token
}

export function getUser() {
    const token = getToken()

    if(token){
        return token
    } else {
        return null
    }
}

export function logOut() {
    localStorage.removeItem("token")
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials)
    // console.log(token)
    localStorage.setItem("token", token.user.token)
    // localStorage.setItem("user", token.user.email)
    return getUser()
}