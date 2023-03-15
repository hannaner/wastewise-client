/* ------- API requests for Spot -------*/
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

// Update single spot
export function updateSpot(spotId){
    return sendRequest(`${BASE_URL}/spots/${spotId}`, 'PATCH', spotId)
}

// View single spot
export function showSpot(spotId){
    return sendRequest(`${BASE_URL}/spots/${spotId}`, 'GET')
}