import React,{Component} from 'react'
import {Field, reduxForm} from 'redux-form'

class StreamCreate extends Component{
//helper function that renders the fields
renderInput = ({input, label}) =>{
    return (
    //takes all the formProps properties and adds them as properties to the input element
    <div className="field">
        <label>{label}</label>
    <input {...input}/>
    </div>
    )
}

    render(){
        return (
            <form className="ui form"> 
                {/* Fields from redux from library that takes in helper function to pass to the components */}
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
            </form>
        )
    }
}



export default reduxForm({
    //name of the form
    form: 'streamCreate'
})(StreamCreate);