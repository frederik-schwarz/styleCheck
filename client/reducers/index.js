import { combineReducers } from 'redux'

import saleItemsReducer from './saleItemsReducer'
import basketItems from './basketReducer'

export default combineReducers({
  basketItems,
  saleItemsReducer
})

//exports all the reducers from this file