import { useRef, useState } from 'react'
import * as itemAPI from '../../utilities/item-api'

export default function NewItemForm({ spotId }){
    const [newItem, setNewItem] = useState('')
    // for setting expiration date
    const [expDate, setExpDate] = useState('')
    const dateInputRef = useRef(null)

    // const spot_idRef = useRef(spotId)

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
        console.log(expDate)
        console.log(newItem)
        try {
            const itemData = {name: newItem.name, quantity: newItem.quantity, exp_date: expDate, spot_id_id: spotId
            }
            console.log(itemData)
            
            await itemAPI.createItem(itemData)
            setExpDate(null)
            setNewItem('')
            
            console.log(expDate)
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <>
            <h4>Add an item</h4>
            <form>
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
                    ></input>
                <button type="submit" onClick={handleAddItem}>Add item</button>
            </form>
        </>
    );
}

/* ----- References:
 *   https://www.makeuseof.com/react-date-picker/
-----*/