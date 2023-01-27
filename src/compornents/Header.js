import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/_compornents/header.scss';

import { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import UserInfo from './Login';

export const Header = () => {
  const [user] = useAuthState(auth); 
  
  return (
    <header className='header'>
        <div className="logoContents">
            <h1 className="logo"><Link to="/">イカマッチ</Link></h1>
            <p>~簡単に対戦相手や大会を探せる~</p>
        </div>
        <nav>
            <ul> 
                <li><Link to="/About">募集を探す</Link></li>
                {/* <li><Link to="/req">募集中の大会を探す</Link></li> */}
                <li><Link to="/checking">相手を募集する</Link></li>
                <li className='login'>
                  
                    {user ? (
                        <UserInfo />
                    ):(
                      <Link to="/login">アカウント作成/ログイン</Link>
                    )}
                  
                  
                  
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;
