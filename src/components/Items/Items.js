/* ------- Item details -------*/
import './Items.css'

export default function Items({ itemId, itemName, itemQuantity, itemExpDate}){
    return(
        <>
            <div className="item-detail" data-item-id={itemId} >
                <p>{itemName} (qty: {itemQuantity})</p>
                <p>Exp: {itemExpDate}</p>
            </div>
            <br></br>
        </>
    );
}