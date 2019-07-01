import {SIGN_IN,SIGN_OUT, CREATE_STREAM} from './types'
import streams from '../apis/streams'

export const signIn = (userId) => {
return {
    type : SIGN_IN,
    payload : userId
}
 }


 export const signOut = () =>{
     return {
         type : SIGN_OUT
     }
 }


 //list of values that we entered into our form as an argument
 export const createStream = (formValues) =>{
     return async (dispatch) => {
    const response = streams.post('/streams', formValues)
    dispatch({ type: CREATE_STREAM, payload: response.data})
     }
 }