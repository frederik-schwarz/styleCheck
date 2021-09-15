import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import { deleteFromBasket } from '../actions.js/basketAction.js'



function DeletePurchase(props) {
    function handleDeleteClick(id) {
        props.dispatch(deleteFromBasket(id))
    }
    
    return (
        <div className="deleteButtonContainerBasket">
        <div className="deleteButtonContainerChildBasket">
        <button className="deleteButtonBasket" onClick={() => handleDeleteClick(props.item.id)}>🗑️</button>
        </div>
        </div>
    )
}

export default connect()(DeletePurchase)