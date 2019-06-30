import {SIGN_IN,SIGN_OUT} from '../actions/types'
// defaulted the value
const INITIAL_STATE = {
    isSignedIn: null
}

//passed the state object and action then created a switch case 
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SIGN_IN:
            return {...state, isSignedIn: true}
            case SIGN_OUT:
            return {...state, isSignedIn: false}
            default:
                return state
    }
}