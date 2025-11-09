import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
export default function Footer() {
    return (
        <footer className={style.footer}>
            <div className={style.container}>
                <ul className={style.categories}>
                    <li>
                        <Link
                            to="/posts/categories/Agriculture"
                            className={style.categories_item}
                        >
                            Argiculture
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/posts/categories/Business"
                            className={style.categories_item}
                        >
                            Business
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/posts/categories/Education"
                            className={style.categories_item}
                        >
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/posts/categories/Entertainment"
                            className={style.categories_item}
                        >
                            Entertainment
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/posts/categories/Art"
                            className={style.categories_item}
                        >
                            Art
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/posts/categories/Investment"
                            className={style.categories_item}
                        >
                            Investment
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/posts/categories/Weather"
                            className={style.categories_item}
                        >
                            Weather
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/posts/categories/Uncategorized"
                            className={style.categories_item}
                        >
                            Uncategorized
                        </Link>
                    </li>
                </ul>
                <div className={style.copyright}>
                    <small>
                        All Rights Reserved &copy; Copyright, Nikita Alokozzay.
                    </small>
                </div>
            </div>
        </footer>
    );
}
