import React, { useEffect, useState } from 'react';
import style from './Partials.module.css';


const ProfileStatusWithHooks = (props) => {

    let [editMode,setEditMode] = useState(false);
    let [status,setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    },[props.status]);

    const ChangeMode = () => {
        setEditMode(true);
    }

    const ChangeModeBack = () => {
        setEditMode(false);
        props.updateUsersStatus(status);
    }

    const OnStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            { !editMode
                ? <span onDoubleClick={ChangeMode}>{props.status || "No Status"}</span>
                : <span>
                    <input className={style.statusContainer} autoFocus={true} onBlur={ChangeModeBack}
                    value={status} onChange={OnStatusChange} />
                    <button className={style.btn} type={'submit'} onClick={ChangeModeBack}>OK</button>
                </span>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;