/* ------- Spot, including its items -------*/
/* ------- V2: this will be a navigation to view each spot rather than all spots and its details -------*/

import { useState } from 'react'
import NewItemForm from '../NewItemForm/NewItemForm'
import Items from '../Items/Items'
import * as spotAPI from '../../utilities/spot-api'
import './Spot.css'

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
    
    // Toggle to show spot items
    function toggleItems(){
        setToggle(!toggle)
    }

    // Toggle to show update form
    function toggleUpdateForm(){
        setShowUpdateForm(!showUpdateForm)
    }

    // Delete spot
    async function handleDeleteSpot(event){
        event.preventDefault()

        await spotAPI.deleteSpot(spotId)
        getAllSpots()
    }

    // Gather updated spot data
    function handleChange(event){
        setEditedSpot({
            ...editedSpot,
            [event.target.name]: event.target.value
        })
    }
    
    // Async function to send patch request for updating spot
    async function handleUpdateSpot(event){
        event.preventDefault()
        
        const updatedSpotData = {
            title: editedSpot.title,
            description: editedSpot.description
        }

        await spotAPI.updateSpot(spotId, updatedSpotData)
        getAllSpots()
        setEditedSpot(initialSpotData)
    }
    
    return(
        <div className="spot-item">
            <div data-id={spotId}>
                <h3>{spotTitle}</h3>
                <p>Description: {spotDescription}</p>
                <div>
                    <button className="delete-btn" onClick={handleDeleteSpot}>Delete spot</button>
                    <button className="edit-btn" onClick={toggleUpdateForm}>Edit spot</button>
                </div>

                { showUpdateForm && 
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

                {/* <p>Items in {spotTitle} </p> */}
                <button className="item-toggle-btn" onClick={toggleItems}>See items</button>
                {toggle && itemList}
                
            </div>
            <div className='item-form-container'>
                <NewItemForm
                    spotId={spotId}
                    getAllSpots={getAllSpots}
                />
            </div>
        </div>
    );
}


/** toggle state reference:
 * https://www.youtube.com/watch?v=5CTFTDpHHto
 */