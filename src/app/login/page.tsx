"use client"
import { useState } from "react";

export default function Login(){
    const [switchForm, setSwitchForm] = useState<"login" | "signUp">("login");

    const switchSectionLogin = () => {
        setSwitchForm('login')
    } 

    const switchSectionsignUp = () => {
        setSwitchForm('signUp')
    } 

    const handleLogin = async (events: React.FormEvent<HTMLFormElement>) => {
        events.preventDefault()

        const formData = new FormData(events.currentTarget)
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;

        // console.log(email, password)

        const res = await fetch("/api/auth/session", {
            method: "POST",
            headers: {"Context-Type" : "application/json"},
            body: JSON.stringify({ email, password}),
        })
    }

    return(
        <>
        <div>
            <div>
                <button onClick={switchSectionLogin}>ログイン</button>
                <button onClick={switchSectionsignUp}>新規登録</button>
            </div>
            {switchForm === "login" && (
                <div id="login-section">
                    <h1>ログイン</h1>
                    <form action="" className="" onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="email">メールアドレス</label><input type="text" name={'email'} className="border-b-2 border-gray-400"/>
                        </div>
                        <div>
                            <label htmlFor="password">パスワード</label><input type="password" name={'password'} className="border-b-2 border-gray-400"/>
                        </div>
                        <button type="submit">ログイン</button>
                    </form>
                </div>
            )} 

            {switchForm === "signUp" && (
                <div id="signUp-section">
                    <h1>新規登録</h1>
                    <form action="">
                        <div>
                            <label htmlFor="name">ニックネーム</label><input type="text" name={'userName'} className="border-b-2 border-gray-400"/>
                        </div>
                        <div>
                            <label htmlFor="email">メールアドレス</label><input type="text" name={'e-mail'} className="border-b-2 border-gray-400"/>
                        </div>
                        <div>
                            <label htmlFor="password">パスワード</label><input type="password" name={'password'} className="border-b-2 border-gray-400"/>
                        </div>
                        <button>新規登録</button>
                    </form>
                </div>
            )}
        </div>
        </>
    );
}