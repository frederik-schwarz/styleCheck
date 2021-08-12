import React, {useState, useEffect} from 'react' 
import { connect } from 'react-redux'

function Nav() {
    return (
        <>
        <ul className='navUl'>
            <li className='navLi'>Home</li>
            <li className='navLi' id='specialChar'>≡</li>
            
        </ul>
        </>
    )
}

export default connect() (Nav)