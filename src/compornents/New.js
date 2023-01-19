import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export const New = () => {

    return (
        <div>

            <div className="container">
            <form className='Login'>
                <div className="Login__item">
                    <label for="name">プレイヤー名</label>
                    <input name='name' type="text" placeholder="プレイヤー名を入力してください" />
                </div>
                <div className="Login__item">
                    <label for="id">ID</label>
                    <input name='id' type="text" placeholder="IDを入力してください" />
                    <ul className='attention'>
                        <li>16文字以内で入力してください</li>
                        <li>住所、電話番号などの個人情報は入力しないで下さい</li>
                        <li>他のユーザーが不愉快になるプレイヤー名は入力しないで下さい</li>
                    </ul>
                </div>
                <div className="Login__item">
                    <label for="password">パスワード</label>
                    <input name='password' type="password" placeholder="パスワードを入力してください" />
                </div>


                <div className="Login__help">
                    <Link to="/passHelp">パスワードを忘れた場合はこちら</Link>
                </div>

                <button className='Login__btn'>新規登録</button>

                <div className='or'>
                    <p>または</p>
                </div>

                <div className="Login__btn--otherAccount">
                    <button className='login__btn'>Googleで新規登録</button>
                    <button className='login__btn'>Yahooで新規登録</button>
                    <button className='login__btn'>Facebookで新規登録</button>
                </div>


            </form>
            </div>


            
        </div>
    )
}
