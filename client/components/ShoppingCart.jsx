import React, {useState, useEffect} from 'react' 
import { connect } from 'react-redux'

function ShoppingCart({items, history}) {
    return (
        <>
        <h1>hello</h1>
        </>
    )
}
const ms2p = (globalState) => {
    return {
        items: globalState.basketItems
    }
}
export default connect(ms2p) (ShoppingCart)