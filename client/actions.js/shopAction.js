import { getAllSalesItems, getItem,} from '../apis/shopApi'

//!!!!!!!!!!!!!!!!!!!!!!
//write actions as shown below for new topic and also export as shown below 
//!!!!!!!!!!!!!!!!!!!!!!


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


