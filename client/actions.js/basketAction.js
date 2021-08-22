import { getAllBasket } from '../apis/basketApi'


export const SET_ALLBASKET = 'SET_ALLBASKET'


const allBasketItems = (item) => {
    return {
        type: SET_ALLBASKET,
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