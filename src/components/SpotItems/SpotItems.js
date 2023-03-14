import { useEffect, useState } from 'react'
import * as itemAPI from '../../utilities/item-api'

export default function SpotItems({ spotId }){
    const [showItems, setShowItems] = useState()

    async function getAllItems(){
        try {
            const allItems = await itemAPI.indexItems(spotId)
            // is this sending the id right?
            setShowItems(allItems)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(function(){
        getAllItems()
    }, [])

    // console.log(showItems)

    return(
        <>
            <p>spot items</p>
        </>
    );
}