import React from 'react';
import './Item.css';

const item = ( props ) => {
    return(
        <div className="styling">
            <h3>ItemName : {props.name}</h3>
            <h3>Itemcost : {props.cost}</h3>
            <h3>Itemnumber : {props.number}</h3>
            {props.number==0 ? <p className="red">No item left to delete</p> : <p className="green">Click on + to add items</p>}
            
            <pre><button onClick={props.clicked1}>+</button>   <button onClick={props.clicked2}>-</button></pre> 

        </div>
    )
}

export default item;