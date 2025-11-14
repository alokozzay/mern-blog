import React, { useState } from "react";
import { DUMMY_POSTS } from "../../assets/data.js";
import style from "./style.module.css";
import indexStyles from "../../index.module.css";
import { Link } from "react-router-dom";

export default function DashBoard() {
    const [posts, setPosts] = useState(DUMMY_POSTS);
    return (
        <section className={style.main}>
            {posts.length ? (
                <div className={`${style.container} ${indexStyles.container}`}>
                    {posts.map((post) => {
                        return (
                            <div className={style.post}>
                                <div className={style.info}>
                                    <div className={style.thumbnail}>
                                        <img
                                            src={post.thumbnail}
                                            alt="thumbnail"
                                        />
                                    </div>
                                    <h5 className={style.post_title}>
                                        {post.title}
                                    </h5>
                                </div>
                                <div className={style.actions}>
                                    <Link
                                        to={`/posts/${post.id}`}
                                        className={`${indexStyles.btn} ${indexStyles.sm}`}
                                    >
                                        View
                                    </Link>
                                    <Link
                                        to={`/posts/${post.id}/edit`}
                                        className={`${indexStyles.btn} ${indexStyles.sm} ${indexStyles.btn_primary}`}
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        to={`/posts/${post.id}/delete`}
                                        className={`${indexStyles.btn} ${indexStyles.sm} ${indexStyles.btn_danger}`}
                                    >
                                        Delete
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <h1 className={indexStyles.center}>You have no posts</h1>
            )}
        </section>
    );
}
