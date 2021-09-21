import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { addToBasket } from '../actions.js/basketAction.js'


function SingleItems (props) {
  const [currentItem, changeItem] = useState({})
  const [open1, changeOpen1] = useState(0)
  const [open2, changeOpen2] = useState(1)
  const [animation, changeAnimation] = useState(0)
 
  function handleChange(item) {
    changeItem({item: item.item, size: item.size, specification: item.specification, condition: item.condition, Img: item.Img, price: item.price, brand: item.brand, Gender: item.Gender})
    changeOpen1(1)
    changeOpen2(0)
    
  }
  function handleSubmit(e) {
    e.preventDefault()
    props.dispatch(addToBasket(currentItem))
    changeOpen1(0)
    changeOpen2(1)
    changeAnimation(1)
    setTimeout(function(){
      changeAnimation(0)
    },3000)
  }
  function handleCancel() {
    changeItem({})
    changeOpen1(0)
    changeOpen2(1)
  }
  
    return (
            <>

            <ul className='singleItemsUl'> {props.item.map(item => {
              if(item.id === parseInt(props.match.params.item)){
              return (
                <li key={item.id} className='singleItemsLi'>
                <span className='singleItemsSpec'>{item.specification}</span> 
                <img className='singleItemsImg' src={item.Img} alt={item.specification}></img>
                <span className='singleItemPrice'>Price: ${item.price}</span>
                <div className='divFlexSingleItem'>
                <span className='singleItemSizeName'>Size:</span>
                <span className='singleItemSize'>{item.size}</span>
                </div>
                {!!open2 &&<button className='addToCartButton' onClick={() => handleChange(item)}>Add to cart</button>}
                {!!open1 &&<div className='tikXContainer'>
                <button className='tickButton' onClick={(event) => handleSubmit(event)}>✓</button>
                <button className='crossButton' onClick={() =>  handleCancel()}>✖</button>
                </div>}
            </li>
              )
              }
            })}
                
            </ul>
              
            </>
    )}

const ms2p = (globalState) => {
  return {
      item: globalState.saleItemsReducer
  }
}

export default connect(ms2p) (SingleItems)