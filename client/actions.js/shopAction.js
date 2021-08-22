import { getAllSalesItems, getItem, addBasket} from '../apis/shopApi'

//!!!!!!!!!!!!!!!!!!!!!!
//write actions as shown below for new topic and also export as shown below 
//!!!!!!!!!!!!!!!!!!!!!!

export const ADD_TOBASKET = 'ADD_TOBASKET'
export const SET_SALESITEMS = 'SET_SALESITEMS'
export const SET_SINGLEITEM = 'SET_SINGLEITEM'


const AllSalesItems = (items) => {
    return {
        type: SET_SALESITEMS,
        items
    }
}

const getSingleItem = (itemId) => {
    return {
        type: SET_SINGLEITEM,
        itemId
    }
}

const addNewItemToBasket = (item) => {
    return {
        type: ADD_TOBASKET,
        item
    }
}


export const setSingleSalesItem = (itemId) => {
    return dispatch => {
        getItem(itemId)
        .then(item => {
            dispatch(getSingleItem(itemId))
        })
    }
}


export const setAllSalesItems = () => {
    return dispatch => {
        return getAllSalesItems()
        .then(items => {
            return dispatch(AllSalesItems(items))
        })
    }
}
export const addToBasket = (item) => {
    console.log(item, 'this reaching the action')
    return dispatch => {
      return addBasket(item)
        .then( item => {
            console.log(item, 'this is the second part of the action')
                return dispatch(addNewItemToBasket(item))
            }
        )
    }
}

