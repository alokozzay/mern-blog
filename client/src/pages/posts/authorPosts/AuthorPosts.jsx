import React, { useState } from "react";
import indexStyles from "../../../index.module.css";
import style from "./style.module.css";
import { DUMMY_POSTS } from "../../../assets/data";
import PostItem from "../../../components/postItem/PostItem";

export default function AuthorPosts() {
    const [posts, setPosts] = useState(DUMMY_POSTS);

    return (
        <section className={style.main}>
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
