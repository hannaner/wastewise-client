/* ------- Spot, including its items -------*/
/* ------- this will be a navigation to view each spot rather than all spots and its details -------*/


import { useState } from 'react'
import NewItemForm from '../NewItemForm/NewItemForm'
import Items from '../Items/Items'

export default function Spot({ spotId, spotTitle, spotDescription, spotItems, getAllSpots }){

    const [items, setItems ] = useState()

    // toggle state to view items for each spot
    const [toggle, setToggle] = useState(false)

    let itemList = null

    if (spotItems){
        itemList = spotItems.map((itemObj, index) => (
            <Items 
                key={index}
                itemId={itemObj.id} 
                itemName={itemObj.name} 
                itemQuantity={itemObj.quantity}
                itemExpDate={itemObj.exp_date}
                items={items}
                setItem={setItems}
            />
            ))
        }
    
    function toggleItems(){
        setToggle(!toggle)
    }
    
    return(
        <>
            <div data-id={spotId}>
                <h3>Spot: {spotTitle}</h3>
                <p>Description: {spotDescription}</p>
                {/* <p>Items in {spotTitle} </p> */}
                <button onClick={toggleItems}>See items</button>
                {toggle && itemList}
            </div>
            <div>
                <NewItemForm
                    spotId={spotId}
                    getAllSpots={getAllSpots}
                />
            </div>
            <hr></hr>
        </>
    );
}