import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { setAllSalesItems } from '../actions.js/shopAction.js'
//import SingleItmes from './SingleItmes.jsx'

function AllItems ({items, basket, history}) {
    console.log(basket, 'OQNDBIPJBQEPIDBQEIPDQP')
    return (
        <>

        <ul className='allItemsUl'>{items.map(item => {
             return (
                
                 <li className='allItemsLi' key={item.id}>
                     <img className='allItemsImg' src={item.Img} alt={item.specification}></img>
                     <span className='allItemsPrice'>{item.specification}</span> 
                     <span className='allItemsPrice'>${item.price}</span>
                     <button onClick={() => history.push('/singleItem/' + item.id)}>click me</button>
                 </li>
                
             )
         })}</ul>
        
        </>
    )
}
const ms2p = (globalState) => {
    return {
        items: globalState.saleItemsReducer,
        basket: globalState.basketItems
    }
}
export default connect(ms2p)(AllItems)