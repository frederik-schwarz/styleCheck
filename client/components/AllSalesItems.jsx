import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { setAllSalesItems } from '../actions.js'


function AllItems (props) {

    useEffect(()=> {
        props.dispatch(setAllSalesItems())
    }, [])
  
    return (
        <>
        <ul className='allItemsUl'>{props.items.map(item => {
             return (
                
                 <li className='allItemsLi' key={item.id}><img className='allItemsImg' src={item.Img} alt={item.specification}></img><span className='allItemsPrice'>{item.specification}</span> <span className='allItemsPrice'>${item.price}</span></li>
                
             )
         })}</ul>
        
        </>
    )
}
const ms2p = (globalState) => {
    return {
        items: globalState.saleItemsReducer
    }
}
export default connect(ms2p)(AllItems)