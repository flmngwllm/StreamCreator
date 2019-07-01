import React,{Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {createStream} from '../../actions'

class StreamCreate extends Component{

//function that checks if the user touches the form and if there is an error message
renderError({error, touched}) {
    if(touched && error){
        return (
            <div className="ui error message">
                <div className ="header">{error}</div>
            </div>
        )
    }
}


//helper function that renders the fields
renderInput = ({input, label, meta}) =>{
    const className = `field ${meta.error & meta.touched ? 'error' : ''}`
    return (
    //takes all the formProps properties and adds them as properties to the input element
    <div className={className}>
        <label>{label}</label>
    <input {...input} autoComplete="off"/>
        {this.renderError(meta)}
    </div>
    )
}

onSubmit(formValues){
    console.log(formValues)
}
    render(){
        return (
            
       
            <form className="ui form error"
            onSubmit={this.props.handleSubmit(this.onSubmit)} > 
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
    errors.description = "You must enter a description"
 }

 return errors
}

export default reduxForm({
    //name of the form and connected validate function so it can be called
    form: 'streamCreate', validate: validate
})(StreamCreate);