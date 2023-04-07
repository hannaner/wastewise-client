/* ------- API requests for Item -------*/
import sendRequest from './send-request-api'
const BASE_URL = 'wastewise'

// create new item
export async function createItem(itemData){
    return sendRequest(BASE_URL + '/items/', 'POST', itemData)
}

// view all items
export function indexItems(){
    return sendRequest(BASE_URL + '/items/', 'GET')
}