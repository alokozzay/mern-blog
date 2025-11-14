import React, { useState } from "react";
import style from "./style.module.css";
import indexStyles from "../../index.module.css";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
export default function Registration() {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    return (
        <section className={style.main}>
            <div className={`${indexStyles.container} ${style.container}`}>
                <h1 className={style.title}>Sign Up</h1>
                <div className={style.form}>
                    <p className={style.error}>This is error message</p>
                    <Input
                        value={userData.name}
                        setValue={(value) =>
                            setUserData({ ...userData, name: value })
                        }
                        type="text"
                        placeholder="Enter name..."
                    />
                    <Input
                        value={userData.email}
                        setValue={(value) =>
                            setUserData({ ...userData, email: value })
                        }
                        type="text"
                        placeholder="Enter email..."
                    />
                    <Input
                        value={userData.password}
                        setValue={(value) =>
                            setUserData({ ...userData, password: value })
                        }
                        type="text"
                        placeholder="Enter password..."
                    />
                    <Input
                        value={userData.password2}
                        setValue={(value) =>
                            setUserData({ ...userData, password2: value })
                        }
                        type="text"
                        placeholder="confirm password..."
                    />
                    <div
                        type="submit"
                        className={`${indexStyles.btn} ${indexStyles.btn_primary}`}
                    >
                        Register
                    </div>
                </div>
                <p className={style.information}>
                    Already have an account?{" "}
                    <Link className={style.information_primary} to="/login">
                        sign in
                    </Link>{" "}
                </p>
            </div>
        </section>
    );
}
