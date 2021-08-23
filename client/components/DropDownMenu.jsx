import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'


function DropDownMenu({handleClick, childToParent, history}) {
    const [number, changeNumber] = useState(1)
    const [childPass, changeChildPass] = useState(0)
    function test() {
        console.log('hellllllllooo')
    }
    function menClick() {

    }
     function womanClick() {
        
    } 
    function unisexClick() {
        
    }
    function allClick() {
        history.push('/allItems/')
        changeNumber(0)
        changeChildPass(1)
        setTimeout(function(){
            changeNumber(1)
          },1000)
    }
    return (
        <>
       {!!number && <div>
          {!!handleClick &&<ul>
                <li onClick={() => menClick()}>Men</li>
                <li onClick={() => womanClick()}>Woman</li>
                <li onClick={() => unisexClick()}>Unisex</li>
                <li onClick={() =>  {
                    allClick();
                    childToParent(childPass);
                    }}>All items</li>
            </ul>}
        </div>}
        </>
    )

}

export default connect () (DropDownMenu)