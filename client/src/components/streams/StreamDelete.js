import React, {Component} from 'react'
import Modal from '../Modal'
import history from '../../history'
import {fetchStream, deleteStream} from '../../actions'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


//Delete Stream component
class StreamDelete extends Component {

componentDidMount () {
    this.props.fetchStream(this.props.match.params.id)
}

// renders the Delete and Cancel Button
    renderActions (){
        const {id} = this.props.match.params

        return (
        <React.Fragment>
            <button 
            onClick={() => this.props.deleteStream(id)} 
            className="ui button negative">Delete</button>
            <Link to="/" className="ui button cancel">Cancel</Link>
        </React.Fragment>
        )
    }


//renders text if there is not a stream available yet then returns the title once the stream becomes available
    renderContent(){
        if (!this.props.stream){
            return 'Are you sure you want to delete this stream?'
        } 
        return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`
    }


    render () {
    return (
       
        <Modal
            title="Delete Stream"
            content={this.renderContent()}
            actions={this.renderActions()} 
            onDismiss={() => history.push('/')} 
        />
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

// connected fetchStream from our actions
export default connect(mapStateToProps, {fetchStream : fetchStream, deleteStream : deleteStream}) (StreamDelete);