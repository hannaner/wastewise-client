import { useState } from 'react'
import NewSpotForm from '../../components/NewSpotForm/NewSpotForm'
import SpotDetail from '../../components/SpotDetail/SpotDetail'
import * as spotAPI from '../../utilities/spot-api'

export default function SpotPage({ user, setUser }){
    const [spot, setSpot] = useState()
    const [newSpot, setNewSpot] = useState('')

    async function showSpots(){
        await spotAPI.indexSpots()
    }

    showSpots()

    return(
        <>
            <p>viewing all spots</p>
            <SpotDetail />
            <NewSpotForm setUser={setUser} user={user} newSpot={newSpot} setNewSpot={setNewSpot} />
        </>
    );
}