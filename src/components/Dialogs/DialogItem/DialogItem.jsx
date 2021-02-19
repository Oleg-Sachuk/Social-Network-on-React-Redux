import React from 'react';
import { NavLink } from 'react-router-dom';
import style from '../Dialogs.module.css';

const DialogItem = (props) => {
    return(
        <div className={style.dlgs}>
            <NavLink className={style.dialogItem} activeClassName={style.activelink} to={'/dialogs/'+ props.id}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;