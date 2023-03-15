/* ------- Page to view all spots -------*/
import { useState, useEffect } from 'react'
import NewSpotForm from '../../components/NewSpotForm/NewSpotForm'
import Spot from '../../components/Spot/Spot'
import * as spotAPI from '../../utilities/spot-api'
import './SpotPage.css'

export default function SpotPage({ user, setUser }){
    // state for showing all Spots
    const [showSpots, setShowSpots] = useState()
    // state for creating new Spot
    const [newSpot, setNewSpot] = useState('')
    // state for showing single spot - to implement in v2
    // const [showSpotDetails, setShowSpotDetails] = useState()

    // API call to retrieve all spots - use to update state
    async function getAllSpots(){
        try {
            const spotsBelongingToUser = await spotAPI.indexSpots()
            setShowSpots(spotsBelongingToUser.spots)
        } catch(error) {
            console.error(error)
        }
    }

    useEffect(function(){
        getAllSpots()
    }, [user])


    let spotsList = null

    // show all spots
    if (showSpots && showSpots.length > 0){
        spotsList = showSpots.map((spot, index) => (
            <Spot
                key={index}
                spotId={spot.id}
                spotTitle={spot.title} 
                spotDescription={spot.description}
                spotItems={spot.items}
                getAllSpots={getAllSpots}
            />
        ))
    }

    return(
        <>
            <h2>Your spots</h2>
            { (showSpots == undefined || !showSpots || showSpots.length == 0) ? 
            <>
                <p>No spots created yet!</p>
                <p>Start by adding a spot where you'd like to keep track of food items</p>
            </>
            :
            spotsList
            }

            <NewSpotForm 
                setUser={setUser}
                user={user}
                newSpot={newSpot}
                setNewSpot={setNewSpot}
                getAllSpots={getAllSpots}
            />
        </>
    );
}