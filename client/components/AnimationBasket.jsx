import React, {useState} from 'react'
import { connect } from 'react-redux'


function AnimationBasket({handleSubmit}) {
    console.log(handleSubmit)
    
    return (
        <>
        {!!handleSubmit && <div className='imgAnimationContainer'>
            <img className='imgAnimation' src='/images/shopping-basket.png'></img>
        </div>
        }
        </>
    )
}

export default connect() (AnimationBasket)