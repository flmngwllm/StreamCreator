import {SIGN_IN,SIGN_OUT, CREATE_STREAM, FETCH_STREAM, FETCH_STREAMS, DELETE_STREAM, EDIT_STREAM} from './types'
import streams from '../apis/streams'
import history from '../history'

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
     return async (dispatch, getState) => {
    //accessing the auth piece of state
    const {userId} = getState().auth
    // getting key values out of formValues then adding the userId
    const response =  await streams.post('/streams', {...formValues, userId })
    dispatch({ type: CREATE_STREAM, payload: response.data })
    //programmatic navigation to get the user back to the root route
    history.push('/')
     }
 }

export const fetchStreams = () => async dispatch => {

    const response = await streams.get('/streams')
    dispatch({type: FETCH_STREAMS, payload: response.data})

}

export const fetchStream = (id) => async dispatch => {
    const response = await streams.get(`/streams/${id}`)
    dispatch({type: FETCH_STREAM, payload: response.data})
}

export const deleteStream = (id) => async dispatch => {
    await streams.delete(`/streams/${id}`)
    dispatch({type: DELETE_STREAM, payload: id})
}


 export const editStream = (id, formValues,) => async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues)
    dispatch({type: EDIT_STREAM, payload: response.data})
    history.push('/')
 }