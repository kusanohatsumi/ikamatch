import React from 'react'
import "../scss/_compornents/login.scss"

import { Link } from 'react-router-dom'
import { auth, provider } from './Firebase'
import { signInWithPopup } from 'firebase/auth'



export const Login = () => {
  return (

    <div className="container">
        <form className='Login'>
            {/* --- ログイン項目 --- */}
            {/* ID */}
            <div className="Login__item">
                <label htmlFor="ID">ログインID</label>
                <input id='ID' type="text" placeholder="ログインIDまたはパスワードを入力してください" />
            </div>
            {/* パスワード */}
            <div className="Login__item">
                <label htmlFor="password">パスワード</label>
                <input id='password' type="password" placeholder="パスワードを入力してください" />
            </div>
            <div className="Login__help">
                <Link to="/passHelp">パスワードを忘れた場合はこちら</Link>
            </div>
            <button type='button' className='Login__btn'>ログイン</button>

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


// ----

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

function UserInfo(){
    return(
        <figure>
            <img src={auth.currentUser.photoURL} referrerPolicy="no-referrer" alt="アイコン" />
        </figure>
    );
}
export default UserInfo;
