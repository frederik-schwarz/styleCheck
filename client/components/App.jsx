import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import { setAllSalesItems } from '../actions.js/shopAction.js'
import { setAllBasket } from '../actions.js/basketAction.js'


import AllItems from './AllSalesItems'
import WomansItems from './Woman'
import MensItems from './Men'
import UniSexItems from './UniSex'
import Nav from './Nav'
import SingleItmes from './SingleItmes'
import Home from './Home.jsx'
import ShoppingCart from './ShoppingCart.jsx'




function App ({dispatch}) {
  useEffect(()=> {
    dispatch(setAllSalesItems())
    dispatch(setAllBasket())
}, [])    


 

  return (
    <>
    <Route path='/' component={Nav}/>
    <Route exact path='/' component={Home}/>
    <Route exact path='/basket/' component={ShoppingCart}/>
    <Route exact path='/singleItem/:item' component={SingleItmes}/>
    <Route exact path='/womansItem/' component={WomansItems}/>
    <Route exact path='/mensItems/' component={MensItems}/>
    <Route exact path='/uniSexItems/' component={UniSexItems}/>
    <Route exact path='/allItems/' component={AllItems}/>
   
    </> 
  )
}

export default connect()(App)