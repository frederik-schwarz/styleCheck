import React, {useState, useEffect} from 'react' 
import { connect } from 'react-redux'
import DropDownMenu from './DropDownMenu'



function Nav({items, history}) {

    const [drop, changeDrop] = useState(0)
    const [check, changeCheck] = useState(0)
    const [data, changeData] = useState()
    
   function childToParent(info) {
    changeData(info)
    console.log(data, 'this will hopefully be 0')
   } 
   function handleClick(value) {
       console.log(value, 'this is the value')
       changeCheck(check + 1)
        if(check === 1) {
            changeDrop(0)
            changeCheck(0)
        }
        else if(check === 0){
            changeDrop(1)
        } 
        
   
    }
    

    return (
        <>
        <div className='navUlContainer'>
            <ul className='navUl'>
                <li className='navLi' onClick={() => history.push('/')}>Home</li>
                <li className='navLi' id='cart' onClick={() => history.push('/basket/')}>cart({items.length})</li>
                <li className='navLi' onClick={() => handleClick()} id='specialChar'>≡</li>
            </ul>
                <DropDownMenu handleClick={drop} childToParent={childToParent} history={history}/>
        </div>
        {data}
        </>
    )
}
const ms2p = (globalState) => {
    return {
        items: globalState.basketItems
    }
}
export default connect(ms2p) (Nav)

