// At the top of the file we import action constants
import { ADD_EXAMPLE, NEW_ALERT } from "consts/actions"

// A basic sync action creator, it just return a action object
export function addExample(title, content){
    // Use Flux Standard Action (FSA) format
    return {
        type : ADD_EXAMPLE,
        payload : {
            title,
            content
        }
    }
}

// A Basic thunk, (check redux-thunk)
export function addExampleWithLimit(title, content){

    // In a thunk, you receive dispatch and getState func as params
    // For instance, you can do conditionnal dispatch
    return (dispatch, getState) => {

        const currentState = getState()

        // You can perform check to be sure that value is available
        const examplesNumber = currentState.examples.data.length

        if (examplesNumber >= 5) {
            dispatch({
                type : NEW_ALERT,
                payload : {
                    title : "Example limit",
                    message : "You can't have more than 5examples"
                }
            })
        } else {
            // You can use a basic action creator
            dispatch(addExample(title, content))
        }
    }
}

// TODO : action creator : API call
