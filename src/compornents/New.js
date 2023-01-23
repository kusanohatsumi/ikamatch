import React from 'react'
// import "../scss/_compornents/new.scss"



import { Link } from 'react-router-dom'

export const New = () => {

    return (
        <div>
            <div className="container">
            <form className='Login'>
                <div className="Login__item">
                    <label htmlFor="name">プレイヤー名</label>
                    <input name='name' type="text" placeholder="プレイヤー名を入力してください" />
                </div>
                <div className="Login__item">
                    <label htmlFor="id">ID</label>
                    <input name='id' type="text" placeholder="IDを入力してください" />
                    <ul className='attention'>
                        <li>16文字以内で入力してください</li>
                        <li>住所、電話番号などの個人情報は入力しないで下さい</li>
                        <li>他のユーザーが不愉快になるプレイヤー名は入力しないで下さい</li>
                    </ul>
                </div>
                <button className='Login__btn'><Link to="/">新規登録</Link></button>
            </form>
            </div>            
        </div>
    )
}
