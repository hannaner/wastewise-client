/* ------- API requests for Item -------*/
import sendRequest from "./users-api"
const BASE_URL = '/wastewise'

// create new item
export async function createItem(itemData){
    return sendRequest(BASE_URL + '/items/', 'POST', itemData)
}

// view all items
// export function indexItems(){
//     return sendRequest(BASE_URL + '/items/', 'GET')
//     // tried passing in spotId
// }
export function indexItems(spotId){
    console.log(spotId)
    return sendRequest(BASE_URL + '/items/', 'GET', spotId)
    // tried passing in spotId
}