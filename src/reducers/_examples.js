// Import your action constants to which the reducer reacts
import { ADD_EXAMPLE, RESET_EXAMPLES } from "consts/actions"

const initialState = {
    data : []
}

export default function reducer(state = initialState, action){
    switch (action.type) {
        case ADD_EXAMPLE:
            return {...state, data : [...state.data, action.payload]}
        case RESET_EXAMPLES:
            return initialState
        default:
            return state
    }
}
