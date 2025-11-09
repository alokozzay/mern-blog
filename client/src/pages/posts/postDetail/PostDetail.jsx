import React from "react";
import style from "./style.module.css";
import indexStyles from "../../../index.module.css";
import PostAuthor from "../../../components/postAuthor/PostAuthor";
import { Link } from "react-router-dom";
import blog1 from "../../../assets/blog1.jpg";
// компонент для отображения полной страницы поста

export default function PostDetail() {
    return (
        <section className={style.post_detail}>
            <div className={`${indexStyles.container} ${style.container}`}>
                <div className={style.header}>
                    <PostAuthor />
                    <div className={style.buttons}>
                        <Link
                            to="/posts/wer/edit"
                            className={`${indexStyles.btn} ${indexStyles.btn_sm} ${indexStyles.btn_primary}`}
                        >
                            Edit
                        </Link>
                        <Link
                            to="/posts/wer/delete"
                            className={`${indexStyles.btn} ${indexStyles.btn_sm} ${indexStyles.btn_danger}`}
                        >
                            Delete
                        </Link>
                    </div>
                </div>
                <h1>Post Title Example</h1>
                <div className={style.image}>
                    <img src={blog1} alt="postImg" />
                </div>
                <p className={style.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vitae rem vero quas, quaerat similique quod! Maiores impedit
                    nesciunt, blanditiis, esse aliquid eaque aut reprehenderit
                    eos repudiandae eveniet nobis itaque! Alias qui dicta
                    maiores odit error fuga? Eum earum tempora illo, iste quasi
                    ipsa ipsam iusto atque perspiciatis nobis vero nostrum
                    eligendi consequatur dolores obcaecati amet consequuntur
                    maxime. Recusandae, minus magni dolore, magnam animi ducimus
                    soluta quibusdam in assumenda repellendus quas modi enim
                    iure et laboriosam expedita ut officiis veniam minima. Quas
                    tempore odit, nobis iusto fugit incidunt ratione dolorem
                    velit itaque nostrum, at architecto commodi laborum iste
                    beatae aspernatur quod.
                </p>
            </div>
        </section>
    );
}
