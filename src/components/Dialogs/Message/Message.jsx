import React from 'react';
import style from '../Dialogs.module.css';

const Message = (props) => {
    return (
        <div>
            <p className={style.fromMe}>{props.message}</p>
            {/* <p className={style.fromThem}>{props.message}</p> */}
        </div>
        // <div className={style.container}>
        //     <div className={style.messageBlue}>
        //         <p className={style.messageContent}>{props.message}</p>
        //         <div className={style.timestamp}></div>
        //     </div>
        // </div>

        // <div className={style.myMessages}>
        //     <div className={style.message}>
        //         {props.message}
        //     </div>
        // </div>
    )
}

export default Message;