import React,{Component} from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm'
import _ from 'lodash'

class StreamEdit extends Component{
    componentDidMount(){
        //fetch our single stream then pass in the id of the stream we want
        this.props.fetchStream(this.props.match.params.id);
    }


    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues)
    }
    
    //if statement if we dont have out stream print out loading if we print the stream
    render(){
    if (!this.props.stream) {
        return <div>Loading...</div>
    }
    return (
        <div>
        <h3>Edit a Stream</h3>
        <StreamForm initialValues={_.pick(this.props.stream, 'title', 'description')}
         onSubmit={this.onSubmit}/>
        </div>
     )
    }
}
    
//selects the stream out of object that contains our streams then assigns it to the stream property then return from mapStateToProps
const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default  connect(mapStateToProps, {fetchStream: fetchStream, editStream: editStream})(StreamEdit);