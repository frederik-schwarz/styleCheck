import React, {useState, useEffect} from 'react' 
import { connect } from 'react-redux'

function ShoppingCart({items, history}) {
    
    return (
        <> 
            <ul>{items.map(item => { return (
                <li>{item.specification}</li>
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