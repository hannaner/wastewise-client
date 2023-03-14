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

    // API call to retrieve all spots
    async function getAllSpots(){
        try {
            const spotsBelongingToUser = await spotAPI.indexSpots()
            setShowSpot(spotsBelongingToUser)
        } catch(error) {
            console.error(error)
        }
    }

    useEffect(function(){
        getAllSpots()
    }, [user])


    let spotsList = null
    // spotList = showSpot.spots.map((spot, index) => )
    // console.log(showSpot.spots)
    // state is a nested array of objects
    // console.log(spotList)
    // spotList = showSpot.spots.map((spot, index) => <SpotItem spot={spot} key={index}/>)
    // testMap = showSpot.spots.map((spotObj) => {return spotObj.title})
    if (showSpot){
        console.log(showSpot)
        spotsList = showSpot.spots.map((spotObj, index) => (
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

            <NewSpotForm setUser={setUser} user={user}newSpot={newSpot} setNewSpot={setNewSpot} showSpot={showSpot} setShowSpot={setShowSpot}/>
        </>
    );
}