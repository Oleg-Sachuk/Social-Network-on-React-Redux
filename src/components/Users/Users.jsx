import React from 'react';
import style from './Users.module.css';
import ppic from '../../assets/images/laptop-user.png';
import { NavLink } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = props.currentPage - 3; i <= props.currentPage + 3; i++) {
        pages.push(i);
    }
    debugger;
    return (
        <div>
            <h3 className={style.head}>Users:</h3>
            {
                props.users.map(user => <div className={style.postBlock} key={user.id}>
                    <Card body>
                        <Row>
                            <Col>
                                <div>
                                    <NavLink to={'/profile/' + user.id} >
                                        <img src={user.photos.small != null ? user.photos.small : ppic} className={style.userPhoto} alt='Profile pic' />
                                    </NavLink>
                                </div>
                                <div>
                                    {user.followed
                                        ?   <button disabled={props.followingProgress.some(id => id === user.id)} className={style.follbtn} onClick={() => {
                                            props.getUnfollowingThunk(user.id)
                                        }}> Unfollow
                                            </button>
                                        :   < button disabled={props.followingProgress.some(id => id === user.id)} className={style.follbtn} onClick={() => {
                                            props.getFollowingThunk(user.id)
                                        }}> Follow
                                            </button>
                                    }
                                </div>
                            </Col>
                            <Col xs={9}>
                                <div className={style.fullname}>
                                    {user.name} {user.surname}
                                    <div><span>{user.status}</span></div>
                                </div>
                                <div className={style.backinfo}>
                                    <p className={style.betime}>{'user.location.country'}<br />{'user.location.city'}</p>
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </div>)
            }
            <div className={style.paging}>
                <button className={style.leftbtn} onClick={(e) => { props.onPageChanged(props.currentPage-1) }}>{"<<"}</button>
                {
                    pages.map(page => {
                        if (page >= 1 && page <= pagesCount) {
                            return <div className={style.pblock}><span className={props.currentPage === page && style.selected}
                                onClick={(e) => { props.onPageChanged(page) }}>{page} </span></div>
                        } else
                            return null
                    })
                }
                <span onClick={(e) => { props.onPageChanged(pagesCount) }}>{` Out of: ${pagesCount}`}</span>
                <button className={style.rightbtn} onClick={(e) => { props.onPageChanged(props.currentPage+1) }}>{">>"}</button>
            </div>
        </div>
    )
}

export default Users;