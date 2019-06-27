import React,{Component} from 'react'

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
            })
        })
    }

    render(){
        return(
<div>
    GoogleAuth
</div>
        )
    }
}

export default GoogleAuth;