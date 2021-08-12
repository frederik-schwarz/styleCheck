//Write reducers here I think this is part which links to global store


// import { SET_FRUITS } from '../actions'
import { SET_SALESITEMS } from "../actions.js/index.js"

// const initialState = []
const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SALESITEMS:
            return action.items
        default: 
        return state
    }
}


export default reducer