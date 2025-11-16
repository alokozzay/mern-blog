import style from "./style.module.css";

import React from "react";

const Input = (props) => {
    return (
        <div className={style.input_container}>
            <input
                value={props.value}
                onChange={(e) => {
                    if (props.type === "file") {
                        props.setValue(e.target.files?.[0] || null);
                    } else {
                        props.setValue(e.target.value);
                    }
                }}
                type={props.type}
                placeholder={props.placeholder}
                className={`${style.input} ${props.className}`}
                accept={props.accept}
            />
        </div>
    );
};
export default Input;
