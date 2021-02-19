import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import nav from 'react-bootstrap/nav'

const Navbar = () => {
    return (
        <div>
            <nav className={style.appNav}>
                <ul>
                    <li><NavLink to='/profile' className={style.navItem} activeClassName={style.activelink}>Profile</NavLink></li>
                    <li><NavLink to='/dialogs' activeClassName={style.activelink}>Messages</NavLink></li>
                    <li><NavLink to='/news' activeClassName={style.activelink}>News</NavLink></li>
                    <li><NavLink to='/music' activeClassName={style.activelink}>Music</NavLink></li>
                    <li><NavLink to='/settings' activeClassName={style.activelink}>Settings</NavLink></li>
                    <li><NavLink to='/users' activeClassName={style.activelink}>Users</NavLink></li>
                </ul>
            </nav>
        </div>

        // // <nav className={style.appNav}>
        //     <ul>
        //         <li><NavLink to='/profile' activeClassName={style.activelink}>Profile</NavLink></li>
        //         <li><NavLink to='/dialogs' activeClassName={style.activelink}>Messages</NavLink></li>
        //         <li><NavLink to='/news' activeClassName={style.activelink}>News</NavLink></li>
        //         <li><NavLink to='/music' activeClassName={style.activelink}>Music</NavLink></li>
        //         <li><NavLink to='/settings' activeClassName={style.activelink}>Settings</NavLink></li>
        //         <li><NavLink to='/users' activeClassName={style.activelink}>Users</NavLink></li>
        //     </ul>
        // </nav>
    )
}

export default Navbar;


