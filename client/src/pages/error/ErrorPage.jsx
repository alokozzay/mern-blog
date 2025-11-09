import React from "react";
import style from "./style.module.css";
import indexStyles from "../../index.module.css";
import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
        <section className={style.error_page}>
            <div className={style.center_block}>
                <Link
                    to="/"
                    className={`${indexStyles.btn_primary} ${indexStyles.btn}`}
                >
                    Go back to Home Page
                </Link>
                <h2 className={style.error_text}>Page Not Found :(</h2>
            </div>
        </section>
    );
}
