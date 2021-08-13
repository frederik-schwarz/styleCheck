import React, {useState, useEffect} from 'react' 
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";
import App from './App'






function Nav({childToParent}) {
    const data = 1
    return (
        <>
        <ul className='navUl'>
            <li className='navLi' onClick={() => childToParent(data)}>Home</li>
            <li className='navLi' id='specialChar'>≡</li>
        </ul>
        </>
    )
}

export default connect() (Nav)