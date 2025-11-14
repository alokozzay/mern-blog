import React, { useState } from "react";
import style from "./style.module.css";
import indexStyles from "../../../index.module.css";
import avatar from "../../../assets/avatar1.jpg";
import { Link } from "react-router-dom";

const authorsData = [
    {
        id: 1,
        name: "John Doe",
        avatar: avatar,
        posts: 2,
    },
    {
        id: 2,
        name: "Johasdasda Doe",
        avatar: avatar,
        posts: 3,
    },
    {
        id: 3,
        name: "John Dasdaoe",
        avatar: avatar,
        posts: 6,
    },
    {
        id: 4,
        name: "John Doe",
        avatar: avatar,
        posts: 2,
    },
    {
        id: 5,
        name: "John sadsadasd",
        avatar: avatar,
        posts: 2,
    },
];

export default function Authors() {
    const [authors, setAuthors] = useState(authorsData);

    return (
        <section className={style.main}>
            {authors.length > 0 ? (
                <div className={`${indexStyles.container} ${style.container}`}>
                    {authors.map(({ id, name, avatar, posts }) => {
                        const shortName =
                            name.length > 10 ? name.slice(0, 15) + "..." : name;
                        return (
                            <Link
                                key={id}
                                to={`/posts/users/${id}`}
                                className={style.author}
                            >
                                <div className={style.avatar}>
                                    <img src={avatar} alt="avatar" />
                                </div>
                                <div className={style.info}>
                                    <h4 className={style.info_name}>
                                        {shortName}
                                    </h4>
                                    <p className={style.info_posts}>
                                        Posts: {posts}
                                    </p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <h2 className={indexStyles.center}>No authors found</h2>
            )}
        </section>
    );
}
