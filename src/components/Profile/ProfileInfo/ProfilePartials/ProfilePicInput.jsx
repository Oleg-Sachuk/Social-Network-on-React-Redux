import React from 'react';
import { useState } from 'react';
import style from './Partials.module.css';


export const ProfilePicInput = (props) => {

    let [editMode, setEditMode] = useState(false);

    const OnProfilePicChanged = (e) => {
        if (e.target.files[0]) {
            props.savePic(e.target.files[0]);
        }
        setEditMode(false)
    }

    const ChangeMode = () => {
        setEditMode(true);
    }

    return (
        <div className={style.inputWrapper}>
            {editMode
                ? <input className={style.inputFile} type="file" onChange={OnProfilePicChanged} id={"addpic"} />
                : <input className={style.inputFile} type="file" onChange={OnProfilePicChanged} id={"addpic"} disabled />}
            <label htmlFor="addpic" onDoubleClick={ChangeMode} className={style.inputFileButton} >+</label>
        </div>
    )
}