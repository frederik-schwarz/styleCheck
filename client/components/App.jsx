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


 

  return (
    <>
{/* childToParent={childToParent} */}
    <Route path='/' component={Nav}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/singleItem/:item' component={SingleItmes}/>
    <Route exact path='/womansItem/' component={WomansItems}/>
    <Route exact path='/mensItems/' component={MensItems}/>
    <Route exact path='/uniSexItems/' component={UniSexItems}/>
    <Route exact path='/allItems/' component={AllItems}/>
   
    </> 
  )
}

export default connect()(App)