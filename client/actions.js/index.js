import { getAllSalesItems } from '../apis/shopApi'

//!!!!!!!!!!!!!!!!!!!!!!
//write actions as shown below for new topic and also export as shown below 
//!!!!!!!!!!!!!!!!!!!!!!


export const SET_SALESITEMS = 'SET_SALESITEMS'

const AllSalesItems = (items) => {
    return {
        type: SET_SALESITEMS,
        items
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