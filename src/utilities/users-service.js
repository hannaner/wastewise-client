import * as usersAPI from './users-api'

export async function signUp(userData) {
    const token = await usersAPI.signUp(userData)
   
    localStorage.setItem("token", token)
    return getUser()
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

    localStorage.setItem("token", token)
    return getUser()
}