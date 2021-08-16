import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { setAllSalesItems } from '../actions.js'
//import SingleItmes from './SingleItmes.jsx'

function AllItems (props, {dispatch, history}) {
    console.log(dispatch)      
    useEffect(()=> {
        props.dispatch(setAllSalesItems())
    }, [])
    
    return (
        <>

        <ul className='allItemsUl'>{props.items.map(item => {
             return (
                
                 <li className='allItemsLi' key={item.id}>
                     <img className='allItemsImg' src={item.Img} alt={item.specification}></img>
                     <span className='allItemsPrice'>{item.specification}</span> 
                     <span className='allItemsPrice'>${item.price}</span>
                     <button onClick={() => history.push('/singleItem/')}>click me</button>
                 </li>
                
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