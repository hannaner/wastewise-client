import { useState, useEffect } from 'react'
import NewSpotForm from '../../components/NewSpotForm/NewSpotForm'
import SpotDetail from '../../components/SpotDetail/SpotDetail'
import * as spotAPI from '../../utilities/spot-api'

export default function SpotPage({ user, setUser }){
    // state for showing all Spots
    const [showSpot, setShowSpot] = useState()
    // state for creating new Spot
    const [newSpot, setNewSpot] = useState('')

    // API call to retrieve all spots
    async function getAllSpots(){
        const spotsBelongingToUser = await spotAPI.indexSpots()
        setShowSpot(spotsBelongingToUser)
    }

    useEffect(function(){
        getAllSpots()
    }, [])

    let spotList = null
    console.log(showSpot)
    spotList = showSpot.spots.map((spot, index) => spot)
    console.log(spotList)
    // spotList = showSpot.spots.map((spot, index) => <SpotDetail spot={spot} key={index}/>)
    
    return(
        <>
            <h2>Spot page</h2>
            {spotList}
            <NewSpotForm setUser={setUser} user={user}newSpot={newSpot} setNewSpot={setNewSpot}/>
        </>
    );
}