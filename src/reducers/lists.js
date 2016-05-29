import endpoints from "consts/endpoints"

const REQUEST_LIST="REQUEST_LIST"
const LIST_SUCCESS="LIST_SUCCESS"
const LIST_ERROR="LIST_ERROR"

const initialState = {
}

export default function reducer(state = initialState, action){
    switch (action.type) {

        case REQUEST_LIST:
            return {loading: true}

        case LIST_SUCCESS:
            return {data : action.payload}

        case LIST_ERROR:
            return {error: true}

        default:
            return state
    }
}

/* action creator */
export function getLists(){
    return {
        url : endpoints.getLists(),
        onStart : (payload, meta, dispatch/*, getState*/)=>{
            dispatch({ type : REQUEST_LIST })
        },
        onSuccess : (payload, meta, dispatch/*, getState*/)=>{
            dispatch({type : LIST_SUCCESS, payload })
        },
        onError : (payload, meta, dispatch/*, getState*/) => {
            dispatch({ type : LIST_ERROR })
        }
    }
}
