import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import style from "./style.module.css";

export default function Header() {
    return (
        <div className={style.navbar}>
            <div className={`container ${style.container}`}>
                <Link to="/">
                    <img src={Logo} alt="Logo" className={style.logo} />
                </Link>
                <ul className={style.menu}>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/create">Create post</Link>
                    </li>
                    <li>
                        <Link to="/authors">Authors</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>
                </ul>
                <button className={style.button_toggle}>x</button>
            </div>
        </div>
    );
}
