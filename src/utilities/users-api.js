import { getToken } from './users-service'
const BASE_URL = '/wastewise'

export async function signUp(userData){
    return sendRequest(BASE_URL + '/sign-up/', 'POST', userData)
}

export async function login(credentials){
    return sendRequest(BASE_URL + '/login/', 'POST', credentials)
}

export default async function sendRequest(url, method='GET', payload=null){
    const options = { method }
    
    if (payload){
        options.headers = {'Content-type': 'application/json'}
        options.body = JSON.stringify(payload)
    }

    const token = getToken()
    if (token){
        options.headers = options.headers || {}
        options.headers.Authorization = `Token ${token}`
    }

    const res = await fetch(url, options)
    if (res.ok) {
        return res.json()
    } else {
        throw new Error('Bad request')
    }
}