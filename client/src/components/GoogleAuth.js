import React,{Component} from 'react'

class GoogleAuth extends Component{
    //loads google client api
    componentDidMount(){
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: 
                '558643926580-o0asm8aqs5q2sna7ckktri6fu8jeej17.apps.googleusercontent.com',
                scope: 'email'
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