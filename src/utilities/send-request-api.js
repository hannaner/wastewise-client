import { getToken } from './users-service'

export default async function sendRequest(url, method='GET', payload=null){
    const options = { method }
    
    if (payload){
        options.headers = {
            'Accept': 'application/json',
            'Content-type': 'application/json',
        }
        options.body = JSON.stringify(payload)
    }

    const token = getToken()
    if (token){
        options.headers = options.headers || {}
        options.headers.Authorization = `Token ${token}`
    }

    const res = await fetch("https://wastewise-backend.onrender.com/" + url, options)
    console.log("hit send request")
    
    if (res.ok) {
        console.log("res is ok")
        if (res.status === 204){
            return res
        } else {
            return res.json()
        }
    } else {
        console.log(res.error)
        throw new Error('Bad request')
    }

    // const res = await fetch(url, options)
    // if (res.ok) {
    //     if (res.status === 204){
    //         return res
    //     } else {
    //         return res.json()
    //     }
    // } else {
    //     console.log(res.error)
    //     throw new Error('Bad request')
    // }
}