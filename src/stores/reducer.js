
import { SET_STATE, ADD_ITEM, RESET_ITEM, ADD_TYPE } from "./constants"

const initState = {
    itemIndex: '',
    type: 'All',
    types: []
}

function reducer(state, actions) {
    switch (actions.type) {
        case SET_STATE:
            return {
                ...state,
                payload: actions.payload,
            }
        case ADD_ITEM:
            return {
                ...state,
                itemIndex: actions.payload,
            }
        case RESET_ITEM:
            return {
                ...state,
                itemIndex: '',
            }
        case ADD_TYPE:
            return {
                ...state,
                type: actions.payload,
            }
        default:
            throw new Error('Invalid action!')
    }
    return
}

export { initState }
export default reducer
