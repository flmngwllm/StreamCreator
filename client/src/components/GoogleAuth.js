import React,{Component} from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends Component{

    //loads google client api
    componentDidMount(){
        //pass a callback function after client librabry is invoked
        window.gapi.load('client:auth2', () => {
            // calls asynchronus network request to initialize the client
            window.gapi.client.init({
                clientId: 
                '558643926580-o0asm8aqs5q2sna7ckktri6fu8jeej17.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                //assign the auth instance to this.auth
                this.auth = window.gapi.auth2.getAuthInstance()
                //update our auth state
                this.onAuthChange(this.auth.isSignedIn.get())
                //listen to see what the auth status is currently
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }


//function is called anytime the users authentication statues is changed
onAuthChange = (isSignedIn) => {
if (isSignedIn){
    this.props.signIn(this.auth.currentUser.get().getId())
} else {
    this.props.signOut()
}
}


//function that allows the user to sign in
onSignInClick = () => {
this.auth.signIn()
}

//callback function that allows the user to sign out
onSignOutClick = () => {
this.auth.signOut()
}

//function checks whether the user is signed in or not
renderAuthButton(){
    if (this.props.isSignedIn === null) {
        return null
    } else if (this.props.isSignedIn){
        return (
            <button onClick={this.onSignOutClick} className="ui red google button">
                <i className="google icon" />
                Sign Out
                </button>
        )} else {
        return (
            <button onClick={this.onSignInClick} className="ui red google button">
                <i className="google icon" />
                Sign In with Google
            </button>
        )
    }
}

    render(){
        return(
<div> 
    {this.renderAuthButton()}
</div>
        )
    }
}

//mapping the state from our reducer
const mapStateToProps = (state) =>{
    return { isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);