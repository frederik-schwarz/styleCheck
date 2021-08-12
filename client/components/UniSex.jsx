import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { setAllSalesItems } from '../actions.js'


function UniSexItems (props) {
    useEffect(()=> {
        props.dispatch(setAllSalesItems())
    }, [])
  
    return (
        <>
        
        <ul className='UniSexItemsUl'>{props.items.map(item => {
             if(item.Gender === 'Unisex'){
             return (
                 <li key={item.id}>{item.item}</li>
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