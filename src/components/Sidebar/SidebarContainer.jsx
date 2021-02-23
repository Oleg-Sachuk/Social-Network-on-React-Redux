import React from 'react';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';

class SidebarContainer extends React.Component {
    
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

export default connect(mapStateToProps,null)(SidebarContainer);