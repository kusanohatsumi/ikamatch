import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/_compornents/header.scss';


export const Header = () => {
  return (
    <header className='header'>
        <div className="logoContents">
            <h1 className="logo">イカマッチ</h1>
            <p>~簡単に対戦相手や大会を探せる~</p>
        </div>
        <nav>
            <ul> 
                <li><Link to="/">募集相手を探す</Link></li>
                <li><Link to="/req">募集中の大会を探す</Link></li>
                <li><Link to="/recruitform">相手を募集する</Link></li>
                <li className='login'><Link to="/login">アカウント作成/ログイン</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;
