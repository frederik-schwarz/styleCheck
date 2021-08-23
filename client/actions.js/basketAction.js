import { getAllBasket, deleteBasketItem, addBasket} from '../apis/basketApi'

export const ADD_TOBASKET = 'ADD_TOBASKET'
export const SET_ALLBASKET = 'SET_ALLBASKET'
export const DELETE_BASKETITEM = 'DELETE_BASKETITEM'


const allBasketItems = (item) => {
    return {
        type: SET_ALLBASKET,
        item
    }
}
const deleteBasket = (item) => {
    return {
        type: DELETE_BASKETITEM,
        item
    }
}
const addNewItemToBasket = (item) => {
    return {
        type: ADD_TOBASKET,
        item
    }
}

export const setAllBasket = () => {
    return dispatch => {
        return getAllBasket()
        .then(item => {
            return dispatch(allBasketItems(item))
        })
    }
}
export const deleteFromBasket = (id) => {
    return dispatch => {
        deleteBasketItem(id)
        .then(item => {
             dispatch(deleteBasket(item))
        })
        return getAllBasket()
        .then(item => {
            return dispatch(allBasketItems(item))
        })
    }
}
export const addToBasket = (item) => {
    console.log(item, 'this reaching the action')
    return dispatch => {
       addBasket(item)
        .then( item => {
            console.log(item, 'this is the second part of the action')
                 dispatch(addNewItemToBasket(item))
        })
        return getAllBasket()
        .then(item => {
            return dispatch(allBasketItems(item))
        })
    }
}
