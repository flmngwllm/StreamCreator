import {CREATE_STREAM, EDIT_STREAM, DELETE_STREAM, FETCH_STREAM, FETCH_STREAMS} from '../actions/types'
import _ from 'lodash'
import streams from '../apis/streams';

export default (state = {}, action) => {
    switch (action.type) {
        //create a new object then take the list of streams and create an object using mapkeys usind the ids
        case FETCH_STREAMS:
                return {...state, ..._.mapKeys(action.payload, 'id')}
            
        case FETCH_STREAM:
            return {...state, [action.payload.id] : action.payload}
        case CREATE_STREAM:
            return {...state, [action.payload.id] : action.payload}
            
        case EDIT_STREAM:
            return {...state,[action.payload.id] :action.payload}
        
        case DELETE_STREAM:
            return  _.omit(...state, action.payload)

   
        default:
            return state
    }
}

