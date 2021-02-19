import React from 'react';
import Loader from "../../assets/GIFs/Loader";
import Signed from './sidebar_components/Signed';
import Unsigned from './sidebar_components/Unsigned';
import style from './Sidebar.module.css';

const Sidebar = (props) => {
    if (props.isAuth == null) {
        return <Loader />
    }
    
    return (
        <div className={style.mainContainer}>
            { props.isAuth ? <Signed login={props.login}/> : <Unsigned />}
        </div>
    )
}

export default Sidebar;