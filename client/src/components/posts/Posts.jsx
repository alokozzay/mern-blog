import React, { useState } from "react";
import style from "./style.module.css";
import indexStyles from "../../index.module.css";

import PostItem from "../postItem/PostItem";
import { DUMMY_POSTS } from "../../assets/data";

// компонент для отображения списка постов на главной странице

export default function Posts() {
    const [posts, setPosts] = useState(DUMMY_POSTS);

    return (
        <section className={`${style.posts}`}>
            {posts.length > 0 ? (
                <div className={`${indexStyles.container} ${style.container}`}>
                    {posts.map((post) => (
                        <PostItem key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <h1 className={indexStyles.center}>No posts found</h1>
            )}
        </section>
    );
}
