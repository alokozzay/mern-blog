import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import PostAuthor from "../postAuthor/PostAuthor";
import indexStyles from "../../index.module.css";

// компонент для отображения карточки поста на главной странице и странице категории

export default function PostItem({ post }) {
    const { id, thumbnail, category, title, desc } = post;
    const shortDesc = desc.length > 150 ? desc.slice(0, 150) + "..." : desc; // сокращаем описание если оно длиннее 150 символов
    const shortTitle = title.length > 30 ? title.slice(0, 30) + "..." : title; // сокращаем заголовок если он длиннее 30 символов
    return (
        <div className={style.post}>
            <div className={style.post_image}>
                <img
                    src={thumbnail}
                    alt={title}
                    className={style.post_image_img}
                />
            </div>
            <div className={style.content}>
                <Link to={`/posts/${id}`}>
                    <h3 className={style.post_title}>{shortTitle}</h3>
                </Link>
                <div className={style.post_desc}>{shortDesc}</div>
                <div className={style.post_footer}>
                    <PostAuthor />
                    <Link
                        to={`/posts/categories/${category}`}
                        className={`${indexStyles.btn_category} ${indexStyles.btn}`}
                    >
                        {category}
                    </Link>
                </div>
            </div>
        </div>
    );
}
