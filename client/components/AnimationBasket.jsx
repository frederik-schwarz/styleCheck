import React, {useState} from 'react'
import { connect } from 'react-redux'

function AnimationBasket() {
    return (
        <>
        <div className='imgAnimationContainer'>
        <img className='imgAnimation' src='/images/shopping-basket.png'></img>
        </div>
        </>
    )
}

export default connect() (AnimationBasket)