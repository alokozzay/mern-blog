import React, { useState } from "react";
import style from "./style.module.css";
import indexStyles from "../../index.module.css";
import Input from "../../components/input/Input";
import { Link } from "react-router-dom";
export default function Login() {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    return (
        <section className={style.main}>
            <div className={`${indexStyles.container} ${style.container}`}>
                <h1 className={style.title}>Sign In</h1>
                <div className={style.form}>
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

                    <div
                        type="submit"
                        className={`${indexStyles.btn} ${indexStyles.btn_primary}`}
                    >
                        Login
                    </div>
                </div>
                <p className={style.information}>
                    Don't have an account?{" "}
                    <Link
                        className={style.information_primary}
                        to="/registration"
                    >
                        sign up
                    </Link>{" "}
                </p>
            </div>
        </section>
    );
}
