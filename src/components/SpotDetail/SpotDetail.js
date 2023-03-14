/* ------- Spot details -------*/
// import { useState }
import SpotItems from '../SpotItems/SpotItems'

export default function SpotItem({ spotId, spotTitle, spotDescription }){

    return(
        <>
            <div data-id={spotId}>
                <h3>Spot: {spotTitle}</h3>
                <p>Description: {spotDescription}</p>
                <p>Items in {spotTitle}: </p>
                <SpotItems spotId={spotId} />
            </div>
            
        </>
    );
}