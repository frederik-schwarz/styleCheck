import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import { setAllSalesItems } from '../actions.js'

import AllItems from './AllSalesItems'
import WomansItems from './Woman'
import MensItems from './Men'
import UniSexItems from './UniSex'
import Nav from './Nav'
import SingleItmes from './SingleItmes'
import Home from './Home.jsx'




function App ({dispatch}) {
  console.log(dispatch)
  useEffect(()=> {
    dispatch(setAllSalesItems())
}, [])    


  // const [open1, changeOpen1] = useState(0)
  // const [open2, changeOpen2] = useState(0)
  // const [open3, changeOpen3] = useState(0)
  // const [open4, changeOpen4] = useState(0)
  // const [open5, changeOpen5] = useState(1)
  // const [open6, changeOpen6] = useState(1)
  // const [open7, changeOpen7] = useState(1)
  // const [open8, changeopen8] = useState(1)
  // console.log(open1, open2, open3, open4, open5, open6, open7, open8)

  // const [data, setData] = useState('');

  // const childToParent = (childdata) => {
  //   console.log(data)
  //   changeOpen1(0)
  //   changeOpen2(0)
  //   changeOpen3(0)
  //   changeOpen4(0)
  //   changeOpen5(1)
  //   changeOpen6(1)
  //   changeOpen7(1)
  // }
  
  // function handleClick(number) {
  //   if(number === 1) {
  //     changeOpen1(1)
  //     changeOpen2(0)
  //     changeOpen3(0)
  //     changeOpen4(0)
  //     changeOpen5(0)
  //     changeOpen6(0)
  //     changeOpen7(0)
  //   }
  //   else if(number === 2) {
  //     changeOpen1(0)
  //     changeOpen2(1)
  //     changeOpen3(0)
  //     changeOpen4(0)
  //     changeOpen5(0)
  //     changeOpen6(0)
  //     changeOpen7(0)
  //   }   
  //   else if(number === 3) {
  //     changeOpen1(0)
  //     changeOpen2(0)
  //     changeOpen3(1)
  //     changeOpen4(0)
  //     changeOpen5(0)
  //     changeOpen6(0)
  //     changeOpen7(0)
  //   }
  //   else if(number === 4) {
  //     changeOpen1(0)
  //     changeOpen2(0)
  //     changeOpen3(0)
  //     changeOpen4(1)
  //     changeOpen5(0)
  //     changeOpen6(0)
  //     changeOpen7(0)
  //   }
  //   }
  

  return (
    <>
{/* childToParent={childToParent} */}
    <Route path='/' component={Nav}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/singleItem/' component={SingleItmes}/>
    <Route exact path='/womansItem/' component={WomansItems}/>
    <Route exact path='/mensItems/' component={MensItems}/>
    <Route exact path='/uniSexItems/' component={UniSexItems}/>
    <Route exact path='/allItems/' component={AllItems}/>
   
    </> 
  )
}

export default connect()(App)