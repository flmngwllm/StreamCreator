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

onSubmit(formValues){
    console.log(formValues)
}
    render(){
        return (
            
       
            <form 
            onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form"> 
                {/* Fields from redux from library that takes in helper function to pass to the components */}
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>

                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

//checks to see if user enters valid input
const validate = (formValues) => {
    const errors = {}
 if(!formValues.title){
    errors.title = "You must enter a title"
 }

 if(!formValues.description){
    errors.description = "You must enter a title"
 }

 return errors
}

export default reduxForm({
    //name of the form
    form: 'streamCreate'
})(StreamCreate);