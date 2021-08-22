
import { SET_ALLBASKET } from "../actions.js/basketAction"


const initialState = []

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case SET_ALLBASKET:
            return action.item
        default: 
        return state
    }
}



export default reducer