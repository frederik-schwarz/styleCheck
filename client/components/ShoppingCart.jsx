import React, {useState, useEffect} from 'react' 
import { connect } from 'react-redux'
import DeleteFromBasket from './DeleteFromBasket'

function ShoppingCart({items, history}) {
    
    return (
        <> 
            <ul>{items.map(item => { return (
                <li key={item.id}>{item.specification}
                <DeleteFromBasket item={item}/>
                </li>
            )
            }) 
            }
            </ul>
        </>
    )
}
const ms2p = (globalState) => {
    return {
        items: globalState.basketItems
    }
}
export default connect(ms2p) (ShoppingCart)