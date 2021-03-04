import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getProfileThunk, updateUsersStatus, getUsersStatus, savePic, saveProfile } from "./../../redux/profile-reducer";
import { AuthRedirect } from '../../hoc/AuthRedirect';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.loggeduserid
        }
        this.props.getProfileThunk(userId, this.props.loggeduserid);
        this.props.getUsersStatus(userId)
    }
    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} 
                status={this.props.status} updateUsersStatus={this.props.updateUsersStatus}
                savePic={this.props.savePic} saveProfile={this.props.saveProfile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    loggeduserid: state.auth.loggedId,
    status: state.profilePage.status
})

export default compose(connect(mapStateToProps,{
    getProfileThunk, updateUsersStatus, getUsersStatus, savePic, saveProfile}),
    withRouter,AuthRedirect)(ProfileContainer);