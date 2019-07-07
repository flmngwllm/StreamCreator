import React, {Component} from 'react'
import Modal from '../Modal'
import history from '../../history'
import actions from '../../actions'

//Delete Stream component
class StreamDelete extends Component {



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




export default StreamDelete;