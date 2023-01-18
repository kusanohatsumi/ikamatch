import React from 'react'
import "../scss/_compornents/login.scss"

import { Link } from 'react-router-dom'


export const Login = () => {
  return (

    <div className="container">
        <form className='Login'>
            <div className="Login__item">
                <label for="title">ログインID</label>
                <input type="text" placeholder="ログインIDまたはパスワードを入力してください" />
            </div>
            <div className="Login__item">
                <label for="title">パスワード</label>
                <input type="text" placeholder="パスワードを入力してください" />
            </div>
            <div className="Login__help">
                <Link to="/passHelp">パスワードを忘れた場合はこちら</Link>
            </div>

            <button className='Login__btn'>ログイン</button>
            <button className='Login__btn Login__btn--new'>
                <Link to="/new">新規作成</Link>
            </button>
            <div className='or'>
                <p>または</p>
            </div>

            <div className="Login__btn--otherAccount">
                <button className='login__btn'>Googleでログイン</button>
                <button className='login__btn'>Yahooでログイン</button>
                <button className='login__btn'>Facebookでログイン</button>
            </div>


        </form>
    </div>
  )
}
