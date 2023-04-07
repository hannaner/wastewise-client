// import { getToken } from './users-service'
import sendRequest from './send-request-api'
const BASE_URL = 'wastewise'

export async function signUp(userData){
    return sendRequest(BASE_URL + '/sign-up/', 'POST', userData)
}

export async function login(credentials){
    return sendRequest(BASE_URL + '/login/', 'POST', credentials)
}

export async function logout(credentials){
    return sendRequest(BASE_URL + '/logout/', 'DELETE', credentials)
}

