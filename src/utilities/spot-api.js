/* ------- API requests for Spot -------*/
import sendRequest from "./users-api"
const BASE_URL = '/wastewise'

// Create new spot
export async function createSpot(spotData){
    return sendRequest(BASE_URL + '/spots/', 'POST', spotData)
}

// View all spots
export function indexSpots(){
    return sendRequest(BASE_URL + '/spots/', 'GET')
}

// Update single spot
export async function updateSpot(spotId, spotData){
    try {
        const spot = await sendRequest(`${BASE_URL}/spots/${spotId}/`, 'PATCH', spotData)
        return spot
    } catch(error) {
        console.error(error)
    }
}

// View single spot
export function showSpot(spotId){
    return sendRequest(`${BASE_URL}/spots/${spotId}/`, 'GET')
}

// Delete single spot
export function deleteSpot(spotId){
    return sendRequest(BASE_URL + '/spots/' + `${spotId}/`, 'DELETE')
}