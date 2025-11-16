import React, { useState, useEffect } from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import indexStyle from "../../index.module.css";
import { BookOpenText } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);

    //     блокируем когда открыта бургер кнопка
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [open]);

    // закрытия меню
    const closeMenu = () => {
        return setOpen(false);
    };

    return (
        <div className={style.navbar}>
            <div className={`${indexStyle.container} ${style.container}`}>
                <Link to="/" className={style.container_logo}>
                    <BookOpenText />
                    <h2 className={style.name_logo}>Alokozzay</h2>
                </Link>
                <ul className={`${style.menu} ${open ? style.open : ""}`}>
                    <li>
                        <Link to="/profile/1" onClick={closeMenu}>
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/create" onClick={closeMenu}>
                            Create post
                        </Link>
                    </li>
                    <li>
                        <Link to="/authors" onClick={closeMenu}>
                            Authors
                        </Link>
                    </li>
                    <li>
                        <Link to="/logout" onClick={closeMenu}>
                            Logout
                        </Link>
                    </li>
                </ul>

                {/* бургер кнопка */}
                <button
                    className={`${style.button_toggle} ${
                        open ? style.open : ""
                    }`}
                    onClick={() => setOpen(!open)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    );
}
