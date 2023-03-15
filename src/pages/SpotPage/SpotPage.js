/* ------- Page to view all spots -------*/
import { useState, useEffect } from 'react'
import NewSpotForm from '../../components/NewSpotForm/NewSpotForm'
import SpotItem from '../../components/SpotItem/SpotItem'
import * as spotAPI from '../../utilities/spot-api'

export default function SpotPage({ user, setUser }){
    // state for showing all Spots
    const [showSpot, setShowSpot] = useState()
    // state for creating new Spot
    const [newSpot, setNewSpot] = useState('')

    // API call to retrieve all spots - use to update state
    async function getAllSpots(){
        try {
            const spotsBelongingToUser = await spotAPI.indexSpots()
            setShowSpot(spotsBelongingToUser.spots)
        } catch(error) {
            console.error(error)
        }
    }

    useEffect(function(){
        getAllSpots()
    }, [user])


    let spotsList = null

    if (showSpot){
        // console.log(showSpot)
        spotsList = showSpot.map((spotObj, index) => (
            <SpotItem
                key={index}
                spotId={spotObj.id}
                spotTitle={spotObj.title} 
                spotDescription={spotObj.description}
                spotItems={spotObj.items}
            />
        ))
    }

    return(
        <>
            <h2>Your spots</h2>
            {spotsList}

            <NewSpotForm 
                setUser={setUser}
                user={user}
                newSpot={newSpot}
                setNewSpot={setNewSpot}
                showSpot={showSpot}
                setShowSpot={setShowSpot}
                getAllSpots={getAllSpots}
            />
        </>
    );
}