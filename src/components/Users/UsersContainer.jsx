import React from 'react';
import Users from './Users';
import style from './Users.module.css'
import { connect } from 'react-redux';
import { setCurrentPage, getUsersThunk, getFollowingThunk, getUnfollowingThunk } from '../../redux/users-reducer';
import Loader from '../../assets/GIFs/Loader';
import { compose } from 'redux';
import { AuthRedirect } from '../../hoc/AuthRedirect';

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            { this.props.isFetching ? <Loader className={style.loader} /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                getFollowingThunk={this.props.getFollowingThunk}
                getUnfollowingThunk={this.props.getUnfollowingThunk}
                followingProgress={this.props.followingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

export default compose(connect(mapStateToProps, {
    setCurrentPage, getFollowingThunk,
    getUsersThunk, getUnfollowingThunk}),AuthRedirect)(UsersAPIComponent);