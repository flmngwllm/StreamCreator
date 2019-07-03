import React,{Component} from 'react'
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions';

class StreamEdit extends Component{
    componentDidMount(){
        //fetch our single stream then pass in the id of the stream we want
        this.props.fetchStream(this.props.match.params.id);
    }
    
    //if statement if we dont have out stream print out loading if we print the stream
    render(){
    if (!this.props.stream) {
        return <div>Loading...</div>
    }
    return (<div>StreamEdit</div>
     )
    }
}
    
//selects the stream out of object that contains our streams then assigns it to the stream property then return from mapStateToProps
const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default  connect(mapStateToProps, {fetchStream: fetchStream})(StreamEdit);