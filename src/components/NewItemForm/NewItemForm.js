export default function NewItemForm({ spotId }){
    return(
        <>
            <h4>Add an item</h4>
            <form>
                <label>Item name</label>
                <input
                    
                ></input>
                <label>Quantity</label>
                <input></input>
                <label>Expiration date</label>
                <input></input>
                <button type="submit">Add item</button>
            </form>
        </>
    );
}