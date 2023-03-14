/* ------- Page to view all spots -------*/
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
    // spotList = showSpot.spots.map((spot, index) => <SpotDetail spot={spot} key={index}/>)
    // testMap = showSpot.spots.map((spotObj) => {return spotObj.title})
    if (showSpot){
        spotsList = showSpot.spots.map((spotObj, index) => (
            <SpotDetail
                key={index}
                spotId={spotObj.id} 
                spotTitle={spotObj.title} 
                spotDescription={spotObj.description}
            />
        ))
    }

    return(
        <>
            <h2>Spot page</h2>
            {spotsList}

            <NewSpotForm setUser={setUser} user={user}newSpot={newSpot} setNewSpot={setNewSpot} showSpot={showSpot} setShowSpot={setShowSpot}/>
        </>
    );
}