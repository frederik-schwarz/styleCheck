import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { setSingleSalesItem } from '../actions.js'


function SingleItems (props) {
    let check =  0
    function handleClick(id) {
        console.log(props)
        check = 1
        props.dispatch(setSingleSalesItem(id))
    }
    return (
      <>
      <button onClick={() => handleClick(props.thing.id)}>this item</button>
      </>
    )
}

export default connect() (SingleItems)