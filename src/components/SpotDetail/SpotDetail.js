export default function SpotItem({ spotId, spotTitle, spotDescription }){
    // console.log(showSpot)
    // console.log(showSpot[0])

    return(
        <div data-id={spotId}>
            <h3>Spot: {spotTitle}</h3>
            <p>Description: {spotDescription}</p>
        </div>
    );
}