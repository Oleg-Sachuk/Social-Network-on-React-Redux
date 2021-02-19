import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import style from '../Sidebar.module.css';

const Unsigned = () => {
    return (
        <div className={style.unsignedCard}>
            <Card body>
                <p>You are unsigned</p>
                <NavLink to={'/login'}>
                    <button>Sign In</button>
                </NavLink>
            </Card>
        </div>
    )
}

export default Unsigned;