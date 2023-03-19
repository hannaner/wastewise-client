import { useRef, useState } from 'react'
import * as itemAPI from '../../utilities/item-api'
import './NewItemForm.css'

export default function NewItemForm({ spotId, getAllSpots }){
    const [newItem, setNewItem] = useState('')
    // for setting expiration date
    const [expDate, setExpDate] = useState('')
    const dateInputRef = useRef(null)

    function handleDateChange(event){
        setExpDate(event.target.value)
    }

    function handleChange(event){
        setNewItem({
            ...newItem,
            [event.target.name]: event.target.value
        })
    }

    async function handleAddItem(event){
        event.preventDefault()
        setExpDate(dateInputRef)

        try {
            const itemData = {name: newItem.name, quantity: newItem.quantity, exp_date: expDate, spot_id: spotId
            }
            
            await itemAPI.createItem(itemData)

            getAllSpots()
            
            // somehow not resetting form states to empty values
            setNewItem('')
            
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <div className="new-item-form-container">
            <h4>Add an item</h4>
            <form className="new-item-form">
                <label>Item name</label>
                <input
                    type="text"
                    name="name"
                    onChange={handleChange}
                    required
                ></input>
                <label>Quantity</label>
                <input
                    type="text"
                    name="quantity"
                    onChange={handleChange}
                    required
                ></input>
                <label>Expiration date</label>
                <input
                    type="date"
                    name="exp_date"
                    ref={dateInputRef}
                    onChange={handleDateChange}
                    required
                    ></input>
                <button type="submit" onClick={handleAddItem}>Add item</button>
            </form>
        </div>
    );
}

/* ----- References:
 *   https://www.makeuseof.com/react-date-picker/
-----*/