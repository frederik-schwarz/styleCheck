
import { ADD_TOBASKET, SET_ALLBASKET } from "../actions.js/basketAction"


const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ALLBASKET:
            return action.item
        case ADD_TOBASKET:
            return [...state, action.item]
        default: 
        return state
    }
}



export default reducer