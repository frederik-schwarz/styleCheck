import React, {useState, useEffect} from 'react' 
import { connect } from 'react-redux'



function Nav({items, history}) {

    const [drop, changeDrop] = useState(0)
    const [data, changeData] = useState(1)
    
    function handleClickBurger() {
        if(drop === 1) {
            changeDrop(0)
        } else {
            changeDrop(1)
        }
    }
    const anim =  useSpring({
        to: {opacity: 1},
        from: {opacity: 0},
        reset: true,
        reverse: flip,
    })
    return (
        <>
       
        <div className='navUlContainer'>
            <ul className='navUl'>
                <div className='navcontainerHome'>
                <li className='navLi' onClick={() => history.push('/')}>Home</li>
                </div>
                <div className='navcontainerRest'>
                <li className='navLi' id='cart' onClick={() => history.push('/basket/')}>cart ({items.length})</li>
                <li className='navLi' onClick={() => handleClickBurger()} id='specialChar'>≡</li>
                </div>
                
            </ul>
            {!!drop &&<animated.ul style={anim} className='dropDownMenuUl'>
                <li className='dropDownMenuLi' onClick={() => {
                    changeDrop(0);
                    history.push('/mensItems/')
                    }}>Men</li>

                <li className='dropDownMenuLi' onClick={() => {
                    changeDrop(0);
                    history.push('/womansItem/')
                    }}>Woman</li>

                <li className='dropDownMenuLi' onClick={() => {
                    changeDrop(0);
                    history.push('/uniSexItems/')
                    }}>Unisex</li>

                <li className='dropDownMenuLi' onClick={() => {
                    changeDrop(0);
                    history.push('/allItems/')
                    }}>All items</li>
            </animated.ul>}

        </div>
        
        </>
    )
}
const ms2p = (globalState) => {
    return {
        items: globalState.basketItems
    }
}
export default connect(ms2p) (Nav)

