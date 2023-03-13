import sendRequest from "./users-api"
const BASE_URL = '/wastewise'

// create new spot
export async function createSpot(spotData){
    return sendRequest(BASE_URL + '/spots/', 'POST', spotData)
}

// view all spots
export function indexSpots(){
    return sendRequest(BASE_URL + '/spots/', 'GET')
}