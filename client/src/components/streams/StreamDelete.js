import React, {Component} from 'react'
import Modal from '../Modal'
import history from '../../history'
import {fetchStream} from '../../actions'
import connect from 'react-redux'


//Delete Stream component
class StreamDelete extends Component {

componentDidMount () {
    this.props.fetchStream(this.props.match.params.id)
}

    renderActions (){
        return (
        <React.Fragment>
            <button className="ui button negative">Delete</button>
            <button className="ui button cancel">Cancel</button>
        </React.Fragment>
        )
    }


    render () {

    return (
        <div>
            StreamDelete
            <Modal
            title="Delete Stream"
            content="Are you sure you want to delete this Stream?"
            actions={this.renderActions()} 
            onDismiss={() => history.push('/')} />
        </div>
    )
    }
}




export default connect(null, {fetchStream : fetchStream}) (StreamDelete);