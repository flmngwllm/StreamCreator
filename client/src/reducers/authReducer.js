import {SIGN_IN,SIGN_OUT} from '../actions/types'
// defaulted the value
const INITIAL_STATE = {
    isSignedIn: null,
    userId: null

}

//passed the state object and action then created a switch case 
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case SIGN_IN:
            return {...state, isSignedIn: true, userId: action.payload}
            case SIGN_OUT:
                //set the userId back to null when user signs out
            return {...state, isSignedIn: false, userId: null}
            default:
                return state
    }
}