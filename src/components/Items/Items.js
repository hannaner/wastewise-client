/* ------- Item details -------*/
export default function Items({ itemId, itemName, itemQuantity, itemExpDate}){
    return(
        <>
            <div data-item-id={itemId} >
                <p>{itemName} (qty: {itemQuantity})</p>
                <p>Exp: {itemExpDate}</p>
            </div>
            <br></br>
        </>
    );
}