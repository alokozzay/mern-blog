import React, { useState } from "react";
import Avatar from "../../../assets/avatar1.jpg";
import style from "./style.module.css";
import indexStyles from "../../../index.module.css";
import { Link } from "react-router-dom";
import { ImagePlus, Check } from "lucide-react";
import Input from "../../../components/input/Input";

export default function UserProfile() {
    const [avatar, setAvatar] = useState(Avatar);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <section className={style.userProfile}>
            <div className={`${indexStyles.container} ${style.container}`}>
                <Link to={"/myposts/12"} className={indexStyles.btn}>
                    My posts
                </Link>
                <div className={style.details}>
                    <div className={style.avatar_wrapper}>
                        <div className={style.avatar}>
                            <img src={avatar} alt="avatar" />
                        </div>

                        {/* Avatar form  */}

                        <form className={style.form}>
                            <input
                                type="file"
                                name="avatar"
                                id="avatar"
                                accept="png, jpeg, jpg"
                                onChange={(e) => setAvatar(e.target.files[0])}
                                className={style.input}
                            />
                            <label htmlFor="avatar" className={style.label}>
                                <ImagePlus />
                            </label>
                        </form>
                        <div className={style.button_check}>
                            <Check />
                        </div>
                    </div>

                    <h1 className={style.name_user}>Name</h1>

                    {/* Profile form */}

                    <form className={style.profile_form}>
                        <p className={style.error}>This is an error message</p>
                        <Input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            setValue={setName}
                        />
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            setValue={setEmail}
                        />
                        <Input
                            type="password"
                            placeholder="Current password"
                            value={currentPassword}
                            setValue={setCurrentPassword}
                        />
                        <Input
                            type="password"
                            placeholder="New password"
                            value={newPassword}
                            setValue={setNewPassword}
                        />
                        <Input
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            setValue={setConfirmPassword}
                        />
                        <button
                            className={`${indexStyles.btn} ${indexStyles.btn_primary}`}
                        >
                            Update my details
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
