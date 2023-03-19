/* ------- Form to create new spot -------*/
import * as spotAPI from '../../utilities/spot-api'
import './NewSpotForm.css'

export default function NewSpotForm({ newSpot, setNewSpot, getAllSpots }){

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
    
            await spotAPI.createSpot(spotData)

            // render Spots state to show newly added spot
            getAllSpots()

            setNewSpot('')

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="new-spot-form-container">
            <h4>Add a new spot</h4>
            <form className="new-spot-form">
                <label>Title</label>
                <input 
                    type="text"
                    name="title"
                    placeholder="Location of your spot (i.e. pantry, fridge, etc.)"
                    value={newSpot.title}
                    onChange={handleChange}
                    required
                />
                <label>Description</label>
                <input 
                    type="text"
                    name="description"
                    placeholder="Add any notes on this spot (i.e. on fridge door)"
                    value={newSpot.description}
                    onChange={handleChange}
                    required
                />
                <button type="submit" onClick={handleCreateSpot}>
                    Add spot
                </button>
            </form>
        </div>
    );
}