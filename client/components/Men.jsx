import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { setAllSalesItems } from '../actions.js/shopAction.js'


function MensItems (props) {
    useEffect(()=> {
        props.dispatch(setAllSalesItems())
    }, [])
  
    return (
        <>
         <ul className='MensItemsUl'>{props.items.map(item => {
             if(item.Gender === 'men'){
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
export default connect(ms2p)(MensItems)