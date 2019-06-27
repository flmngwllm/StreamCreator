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
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
//function is called anytime the users authentication statues is changed
onAuthChange = () => {
this.setState({isSignedIn: this.auth.isSignedIn.get() })
}

//
renderAuthButton(){
    if (this.state.isSignedIn === null) {
        return <div> I don't know if we are signed in</div>
    } else if (this.state.isSignedIn){
        return <div>I am signed in</div>
    } else {
        return <div>I am not signed in</div>
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

export default GoogleAuth;