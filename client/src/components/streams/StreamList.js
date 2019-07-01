import React,{Component} from 'react'
import {connect} from 'react-redux'
import { fetchStreams } from '../../actions'

class StreamList extends Component{
// get a list of the streams
    componentDidMount(){
        this.props.fetchStreams()
    }

    //pass in stream we are going to render over and shows edit and delete buttons
    renderAdmin(stream){
        if(stream.userId === this.props.currentUserId){
            return(
            <div className= "right floated content">
                <button className="ui button primary">
                    Edit</button>
                <button className= "ui button negative">
                    Delete
                </button>
                </div>
            ) 
        }
    }


// map over streams then return some jsx for the stream
    renderList= () => {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera"/>
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div>
            <h2>Streams</h2>
            <div className="ui celled list">{this.renderList()}</div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    //takes object as an argument then takes the values then insert them into an array
    return {streams: Object.values(state.streams),
    //getting the id of the person currently signed in from redux store
    currentUserId: state.auth.userId }
}


export default connect(mapStateToProps, {fetchStreams:fetchStreams}) (StreamList);