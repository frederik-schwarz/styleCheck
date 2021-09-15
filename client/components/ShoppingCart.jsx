import React, {useState, useEffect} from 'react' 
import { connect } from 'react-redux'
import DeleteFromBasket from './DeleteFromBasket'

function ShoppingCart({items, history}) {
    
    return (
        
        <> 
         <div className='.cartDiv'>
            <ul className='cartUl'>{items.map(item => { return (
                <li className='cartLi' key={item.id}>{item.specification}
                <DeleteFromBasket item={item}/>
                </li>
            )
            }) 
            }
            </ul>
            </div>
        </>
    )
}
const ms2p = (globalState) => {
    return {
        items: globalState.basketItems
    }
}
export default connect(ms2p) (ShoppingCart)