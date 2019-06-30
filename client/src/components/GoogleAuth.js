import React,{Component} from 'react'
import {connect} from 'react-redux'
import {signIn, signOut} from '../actions'

class GoogleAuth extends Component{

state = {
    isSignedIn: null
}

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
                this.auth = window.gapi.auth2.getAuthInstance()
                // sets the state and checks to see if user is signed in
                this.setState({isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
//function is called anytime the users authentication statues is changed
onAuthChange = (isSignedIn) => {
if (isSignedIn){
    this.props.signIn()
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
    if (this.state.isSignedIn === null) {
        return null
    } else if (this.state.isSignedIn){
        return (
            <button onClick={this.onSignOutClick} className="ui red google button">
                <i className="google icon" />
                Sign Out
                </button>
        )
    } else {
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

export default connect(null, {signIn, signOut})(GoogleAuth);