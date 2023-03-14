/* ------- Spot details, including its items -------*/
/* ------- this will be a navigation to view each spot rather than all spots and its details -------*/
// import { useState }
// import SpotDetailItems from '../SpotDetailItems/SpotDetailItems'
import { useState } from 'react'
import NewItemForm from '../NewItemForm/NewItemForm'
import Items from '../Items/Items'

export default function SpotItem({ spotId, spotTitle, spotDescription, spotItems }){

    const [items, setItems ] = useState()

    let itemList = null

    // console.log(spotItems)

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
    
    return(
        <>
            <div data-id={spotId}>
                <h3>Spot: {spotTitle}</h3>
                <p>Description: {spotDescription}</p>
                <p>Items in {spotTitle}: </p>
                {itemList}
            </div>
            <div>
                <NewItemForm spotId={spotId}/>
            </div>
            <hr></hr>
        </>
    );
}