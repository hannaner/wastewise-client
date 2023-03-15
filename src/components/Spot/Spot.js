/* ------- Spot, including its items -------*/
/* ------- this will be a navigation to view each spot rather than all spots and its details -------*/


import { useState } from 'react'
import NewItemForm from '../NewItemForm/NewItemForm'
import Items from '../Items/Items'
import * as spotAPI from '../../utilities/spot-api'

export default function Spot({ spotId, spotTitle, spotDescription, spotItems, getAllSpots }){
    const initialSpotData = {
        id: spotId,
        title: spotTitle,
        description: spotDescription
    }

    const [items, setItems ] = useState()
    // toggle state to view items for each spot
    const [toggle, setToggle] = useState(false)
    // toggle state to view update spot form
    const [showUpdateForm, setShowUpdateForm] = useState(false)

    const [editedSpot, setEditedSpot] = useState(initialSpotData)
    
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

    function toggleUpdateForm(){
        setShowUpdateForm(!showUpdateForm)
    }

    function handleChange(event){
        setEditedSpot({
            ...editedSpot,
            [event.target.name]: event.target.value
        })
    }

    async function handleDeleteSpot(event){
        event.preventDefault()

        await spotAPI.deleteSpot(spotId)
        getAllSpots()
    }
    
    // Async function to send patch request for updating spot
    async function handleUpdateSpot(event){
        event.preventDefault()
        
        const updatedSpotData = {
            id: spotId,
            title: editedSpot.title,
            description: editedSpot.description
        }

        console.log(updatedSpotData)
        await spotAPI.updateSpot(spotId, updatedSpotData)
        getAllSpots()
        setEditedSpot(initialSpotData)
    }
    
    return(
        <>
            <div data-id={spotId}>
                <h3>Spot: {spotTitle}</h3>
                <button onClick={handleDeleteSpot}>Delete spot</button>
                <button onClick={toggleUpdateForm}>Edit spot</button>

                { !showUpdateForm && 
                <>
                    <label>Title</label>
                    <input 
                        type="text"
                        name="title"
                        value={editedSpot.title}
                        onChange={handleChange}
                    />
                    <label>Description</label>
                    <input 
                        type="text"
                        name="description"
                        value={editedSpot.description}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        onClick={handleUpdateSpot}
                    >Update</button>
                </>

                }

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


/** toggle state reference:
 * https://www.youtube.com/watch?v=5CTFTDpHHto
 */