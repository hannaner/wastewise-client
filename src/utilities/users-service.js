import * as usersAPI from './users-api'

// Sign up
export async function signUp(userData) {
    const token = await usersAPI.signUp(userData)
    // localStorage.setItem("token", token.user.token)
    return login(userData)
}

// Get token, used for sign up and login
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

export async function logOut(credentials) {
    // console.log(credentials)
    // need to fix this bug
    // // call logout from django
    if (credentials){
        await usersAPI.logout(credentials)
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("userId")
        return
    } else {
        return console.log('no user')
    }
}

export async function login(credentials) {
    console.log(credentials)
    const token = await usersAPI.login(credentials)
    localStorage.setItem("token", token.user.token)
    // this isn't secure, but will need to figure out how to obtain user info later 
    localStorage.setItem("user", token.user.email)
    localStorage.setItem("userId", token.user.id)
    return getUser()
}