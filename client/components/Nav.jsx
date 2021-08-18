import React, {useState, useEffect} from 'react' 
import { connect } from 'react-redux'



function Nav({dispatch, history}) {
    return (
        <>
        <ul className='navUl'>
            <li className='navLi' onClick={() => history.push('/')}>Home</li>
            <li className='navLi' id='specialChar'>≡</li>
            <l1 className='navLi' onClick={() => history.push('/basket/')}>cart(0)</l1>
        </ul>
        </>
    )
}

export default connect() (Nav)