/* ------- Form to create new spot -------*/
import * as spotAPI from '../../utilities/spot-api'

export default function NewSpotForm({ user, setUser, newSpot, setNewSpot, showSpot, setShowSpot, getAllSpots }){

    const userId = parseInt(localStorage.getItem('userId'))

    function handleChange(event) {
        setNewSpot({
            ...newSpot,
            [event.target.name]: event.target.value
        })
    }

    async function handleCreateSpot(event){
        event.preventDefault()
        
        try {
            const spotData = { "title": newSpot.title, "description": newSpot.description, "owner": userId}
    
            const updatedSpot = await spotAPI.createSpot(spotData)

            getAllSpots()

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <>
            <form>
                <h3>Add a new spot</h3>
                <label>Title</label>
                <input 
                    type="text"
                    name="title"
                    placeholder="Location of your spot (i.e. pantry, fridge, etc.)"
                    value={newSpot.title}
                    onChange={handleChange}
                />
                <label>Description</label>
                <input 
                    type="text"
                    name="description"
                    placeholder="Add any notes on this spot (i.e. on fridge door)"
                    value={newSpot.description}
                    onChange={handleChange}
                />
                <button type="submit" onClick={handleCreateSpot}>
                    Add spot
                </button>
            </form>
        </>
    );
}