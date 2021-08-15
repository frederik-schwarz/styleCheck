import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import AllItems from './AllSalesItems'
import WomansItems from './Woman'
import MensItems from './Men'
import UniSexItems from './UniSex'
import Nav from './Nav'
import { Route } from 'react-router-dom'
import SingleItmes from './SingleItmes'




function App (props) {
  

  const [open1, changeOpen1] = useState(0)
  const [open2, changeOpen2] = useState(0)
  const [open3, changeOpen3] = useState(0)
  const [open4, changeOpen4] = useState(0)
  const [open5, changeOpen5] = useState(1)
  const [open6, changeOpen6] = useState(1)
  const [open7, changeOpen7] = useState(1)
  const [open8, changeopen8] = useState(1)
  console.log(open1, open2, open3, open4, open5, open6, open7, open8)

  const [data, setData] = useState('');

  const childToParent = (childdata) => {
    console.log(data)
    changeOpen1(0)
    changeOpen2(0)
    changeOpen3(0)
    changeOpen4(0)
    changeOpen5(1)
    changeOpen6(1)
    changeOpen7(1)
  }
  
  function handleClick(number) {
    if(number === 1) {
      changeOpen1(1)
      changeOpen2(0)
      changeOpen3(0)
      changeOpen4(0)
      changeOpen5(0)
      changeOpen6(0)
      changeOpen7(0)
    }
    else if(number === 2) {
      changeOpen1(0)
      changeOpen2(1)
      changeOpen3(0)
      changeOpen4(0)
      changeOpen5(0)
      changeOpen6(0)
      changeOpen7(0)
    }   
    else if(number === 3) {
      changeOpen1(0)
      changeOpen2(0)
      changeOpen3(1)
      changeOpen4(0)
      changeOpen5(0)
      changeOpen6(0)
      changeOpen7(0)
    }
    else if(number === 4) {
      changeOpen1(0)
      changeOpen2(0)
      changeOpen3(0)
      changeOpen4(1)
      changeOpen5(0)
      changeOpen6(0)
      changeOpen7(0)
    }
    }
  

  return (
    <>
{/* childToParent={childToParent} */}
    <Route path='/' component={Nav}/>
    {!!open7 &&
    <div className='app'>
      <h1 className='titleHome'>Style Check</h1>
    </div>}
    <div className='imgContainer'>
      {!!open5 && <img className='fashionImgHome' src='https://cdn.shopify.com/s/files/1/0022/5050/6349/files/Frame_2_1200x.png?v=1627911934' alt='fashion line up'>
      </img>}
      </div>

      {!!open6 && <div className='lowerNavHome'>
      <p onClick={() => handleClick(1)}>Men</p>
      <p onClick={() => handleClick(2)}>Woman</p>
      <p onClick={() => handleClick(3)}>UniSex</p>
      <p onClick={() => handleClick(4)}>All Items</p>
      </div>}
   
      {!!open4 && <AllItems />}
      {!!open2 && <WomansItems/>}
      {!!open1 && <MensItems />}
      {!!open3 && <UniSexItems />}
      
    </>
  )
}

export default connect()(App)