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
    localStorage.removeItem("user")
    localStorage.removeItem("userId")
}

export async function login(credentials) {
    const token = await usersAPI.login(credentials)
    localStorage.setItem("token", token.user.token)
    // this isn't secure, but will need to figure out how to obtain user info later 
    localStorage.setItem("user", token.user.email)
    localStorage.setItem("userId", token.user.id)
    console.log(token.user)
    return getUser()
}