import React, { useState } from 'react'
import "../scss/_compornents/form.scss"

import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './Firebase';


export const NewAccount = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    // 入力した情報をfirebaseに送信
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await createUserWithEmailAndPassword(
                auth, email, password
            );
        } catch(error){
            alert("正しく入力してください");
        }
    }
    return (
        <div>
            <div className="container">
                <form className='Login' onSubmit={handleSubmit} >
                    <div className="Login__item">
                        <label htmlFor="email">メールアドレス</label>
                        <input 
                        value={email} name='email' type="email" placeholder="メールアドレスを入力してください" 
                        onChange={(event) => setEmail(event.target.value)} />
                    </div>
                    <div className="Login__item">
                        <label htmlFor="password">パスワード</label>
                        <input 
                        value={password} name='password' type="password" placeholder="パスワードを入力してください" 
                        onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <button className='Login__btn'><Link to="/new" >次へ</Link></button>
                </form>
            </div>
        </div>
    )
}
