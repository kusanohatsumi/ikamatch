import React from 'react'
import "../scss/_compornents/login.scss"

import { Link } from 'react-router-dom'
import { auth, provider } from './Firebase'
import {useAuthState} from "react-firebase-hooks/auth";
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'

export const Login = () => {
    const [user] = useAuthState(auth); 
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

        // 入力した情報をfirebaseで認証
        const handleSubmit = async(e) => {
            e.preventDefault();
            try{
                await signInWithEmailAndPassword(
                    auth, email, password
                );
            } catch(error){
                alert("正しく入力してください");
            }
        }
    return (

    <div className="container">
        <form className='Login' onSubmit={handleSubmit}>
            {/* --- ログイン項目 --- */}
            {/* メールアドレス */}
            <div className="Login__item">
                <label htmlFor="email">メールアドレス</label>
                <input 
                id='email' type="email" placeholder="メールアドレスを入力してください"
                onChange={(event)=>setEmail(event.target.value)}
                />
            </div>
            {/* パスワード */}
            <div className="Login__item">
                <label htmlFor="password">パスワード</label>
                <input 
                id='password' type="password" placeholder="パスワードを入力してください"
                onChange={(event)=>setPassword(event.target.value)}
                />
            </div>
            <div className="Login__help">
                <Link to="/passHelp">パスワードを忘れた場合はこちら</Link>
            </div>
            <div>
                { user ? 
                    <button type='submit' className='Login__btn'><Link to="/">ログイン</Link></button>
                    : 
                    <button type='submit' className='Login__btn'>ログイン</button>
                }
            </div>

            {/* --- 新規登録 --- */}
            <button type='button' className='Login__btn Login__btn--new'>
                <Link to="/newAccount">新規作成</Link>
            </button>

            <div className='or'>
                <p>または</p>
            </div>

            {/* --- 別アカウントでログイン --- */}
            <div className="Login__btn--otherAccount">
                <SignInWdthGoogle />
                <button className='login__btn'>Twitterでログイン</button>
                <button className='login__btn'>Facebookでログイン</button>
            </div>

        </form>
    </div>
    )
}


// ---- Googleでログインする
function SignInWdthGoogle(){
    const signinWidthGoogle = ()=> {
        signInWithPopup(auth,provider);
    }
    return(
        <button className='login__btn'  type='button' onClick={signinWidthGoogle}>
            Googleでログイン
        </button>
    );
    
}

// --- ログイン後のデザイン
function UserInfo(){
    return(
        <figure>
            <Link to="/mypage" >
            <img src={`${process.env.PUBLIC_URL}/img/icon.svg` } alt="アイコン" />
            </Link>
        </figure>
    );
}
export default UserInfo;
