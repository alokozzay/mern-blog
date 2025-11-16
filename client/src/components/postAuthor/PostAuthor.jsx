import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import avatar from "../../assets/avatar1.jpg";

// компонент чтоб отображать автора поста в карточке поста

export default function PostAuthor() {
    const name = "Nikita Alkoasdasdas";
    const shortName = name.length > 15 ? name.slice(0, 15) + "..." : name;
    return (
        <Link to={`/posts/users/asda`} className={style.post_author}>
            <div>
                <img src={avatar} alt="avatar" className={style.avatar} />
            </div>
            <div className={style.details}>
                <h5 className={style.name_author}>{`By: ${shortName}`}</h5>
                <div className={style.span}>Just Now</div>
            </div>
        </Link>
    );
}
