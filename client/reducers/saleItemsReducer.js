//Write reducers here I think this is part which links to global store


// import { SET_FRUITS } from '../actions'
import { ADD_TOBASKET, SET_SALESITEMS, SET_SINGLEITEM } from "../actions.js/index.js"

// const initialState = []
const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SALESITEMS:
            return action.items
        case SET_SINGLEITEM:
                return state.filter(item => {item.id  === action.itemId})
        case ADD_TOBASKET:
            return [...state, action.item]
        default: 
        return state
    }
}



export default reducer