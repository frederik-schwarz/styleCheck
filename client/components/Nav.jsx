import React, {useState, useEffect} from 'react' 
import { connect } from 'react-redux'



function Nav({dispatch, history}) {
    return (
        <>
        <ul className='navUl'>
            <li className='navLi' onClick={() => history.push('/')}>Home</li>
            <li className='navLi' id='specialChar'>≡</li>
        </ul>
        </>
    )
}

export default connect() (Nav)