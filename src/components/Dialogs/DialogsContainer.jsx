import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { SendMessageCreator, UpdateMessageBodyCreator } from "../../redux/dialogs-reducer";
import Dialog from './Dialogs';

class DialogsPageAPI extends React.Component {

    render(){
        return <Dialog dialogPage= {this.props.dialogPage} 
        updateMessageBody={this.props.updateMessageBody}
        SendMessage= {this.props.SendMessage}
        loginStatus={this.props.loginStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageBody: (body) => {
            dispatch(UpdateMessageBodyCreator(body));
        },
        SendMessage: (body) => {
            if(body){
                dispatch(SendMessageCreator())
            } else {
                alert('Message field is empty')
            }
        }
    }
}

export default compose( connect(mapStateToProps,mapDispatchToProps), AuthRedirect )(DialogsPageAPI);