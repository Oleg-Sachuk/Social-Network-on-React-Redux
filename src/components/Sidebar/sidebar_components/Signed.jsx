import React from 'react';
import style from '../Sidebar.module.css';
import ppic from '../../../assets/images/laptop-user.png'

const Signed = (props) => {
    return (
        <div className={style.signedContainer}>
                <div><img className={style.ppic} src={ppic} alt={ppic}></img></div>
                {/* <li><span>{props.login}</span></li> */}
                <div><p className={style.name}><span>{props.login}</span></p></div>
        </div>
    )
}

export default Signed;