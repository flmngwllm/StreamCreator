import React,{Component} from 'react'
import {Field, reduxForm} from 'redux-form'

class StreamCreate extends Component{
//helper function that renders the fields
renderInput = (formProps) =>{
    return (
    //takes all the formProps properties and adds them as properties to the input element
    <input {...formProps.input}/>
    )
}

    render(){
        return (
            <form> 
                <Field name="title" component={this.renderInput} />
                <Field name="description" component={this.renderInput}/>
            </form>
        )
    }
}



export default reduxForm({
    //name of the form
    form: 'streamCreate'
})(StreamCreate);