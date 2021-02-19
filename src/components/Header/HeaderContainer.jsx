import  React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { SetAuthUserData } from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {

    render () {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

export default connect(mapStateToProps,{SetAuthUserData})(HeaderContainer);