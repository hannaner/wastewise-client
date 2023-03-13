import { useState } from 'react'
import * as spotAPI from '../../utilities/spot-api'

export default function NewSpotForm({ user, setUser, newSpot, setNewSpot }){

    function handleChange(event) {
        setNewSpot({
            ...newSpot,
            [event.target.name]: event.target.value,
            // user._id
        })
    }

    async function handleCreateSpot(event){
        event.preventDefault()
        console.log(newSpot)
        
        await spotAPI.createSpot(newSpot)
    }

    return (
        <>
            <form>
                <label>Title</label>
                <input 
                    type="text"
                    name="title"
                    placeholder="Location of your spot (i.e. pantry, fridge, etc.)"
                    onChange={handleChange}
                />
                <label>Description</label>
                <input 
                    type="text"
                    name="description"
                    placeholder="Add any notes on this spot (i.e. on fridge door)"
                    onChange={handleChange}
                />
                <button type="submit" onClick={handleCreateSpot}>
                    Add spot
                </button>
            </form>
        </>
    );
}