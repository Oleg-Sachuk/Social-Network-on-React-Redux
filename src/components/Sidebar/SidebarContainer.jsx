import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { getAuthThunk } from "../../redux/auth-reducer";

class SidebarContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthThunk()
    }
    
    render(){
        return <Sidebar {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        loggedId: state.auth.loggedId
    }
}

export default connect(mapStateToProps,{getAuthThunk})(SidebarContainer);