import React, { useState } from "react";
import style from "./style.module.css";
import indexStyles from "../../../index.module.css";
import Input from "../../../components/input/Input.jsx";

import ReactQuill from "react-quill-new"; // заменитель react-quill
import "react-quill-new/dist/quill.snow.css";
import { POST_CATEGORIES, FORMATS, MODULES } from "../../../assets/data.js";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Uncategorized");
    const [description, setDescription] = useState("");
    const [tumbnail, setTumbnail] = useState("");

    return (
        <section className={style.main}>
            <div className={`${indexStyles.container} ${style.container}`}>
                <h2>Create post</h2>
                <form className={style.form}>
                    <p className={style.error}>This is an error message</p>
                    <Input
                        type="text"
                        value={title}
                        setValue={setTitle}
                        placeholder="Title"
                    />
                    <select
                        name="Category"
                        id=""
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className={style.select}
                    >
                        {POST_CATEGORIES.map((cat) => (
                            <option key={cat}>{cat}</option>
                        ))}
                    </select>
                    <ReactQuill
                        className={style.ql_editor}
                        modules={MODULES}
                        formats={FORMATS}
                        value={description}
                        onChange={setDescription}
                    />
                    <Input
                        type="file"
                        accept="image/*"
                        setValue={setTumbnail}
                    />
                    <button
                        type="submit"
                        className={`${indexStyles.btn} ${indexStyles.btn_primary}`}
                    >
                        Create
                    </button>
                </form>
            </div>
        </section>
    );
}
