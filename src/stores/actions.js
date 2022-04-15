import {ADD_ITEM, RESET_ITEM, ADD_TYPE} from './constants.js'

export const addItem = (payload) => { 
    return {
        type: ADD_ITEM,
        payload,
    }
} 

export const resetItem = (payload) => { 
    return {
        type: RESET_ITEM,
        payload,
    }
} 

export const addType = (payload) => { 
    return {
        type: ADD_TYPE, 
        payload,
    }
}

