import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { setAllSalesItems } from '../actions.js/shopAction.js'


function UniSexItems ({items, history}) {
    return (
        <>
         <ul className='allItemsUl'>{items.map(item => {
             if(item.Gender === 'unisex'){
             return (
                <li className='allItemsLi' key={item.id}>
                    <img className='allItemsImg' src={item.Img} alt={item.specification}></img>
                    <span className='allItemsPrice'>{item.specification}</span> 
                    <span className='allItemsPrice'>${item.price}</span>
                    <button className='clickItemButton'onClick={() => history.push('/singleItem/' + item.id)}>click me</button>
                </li>
             )
             }
         })}</ul>
        
        </>
    )
}
const ms2p = (globalState) => {
    return {
        items: globalState.saleItemsReducer
    }
}
export default connect(ms2p)(UniSexItems)