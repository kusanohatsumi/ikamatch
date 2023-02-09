import React from 'react'
import { Search1 } from './Search1'
import { Search2 } from './Search2'


import "../scss/_compornents/main.scss";


export const Main = () => {
    return (
        <>
            <div className='firstView'>
                <figure className='firstView__item'>
                    <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="サムネイル" />
                </figure>
                <div className='firstView__text'>
                    <h2>スプラトゥーンのカスタムマッチに<br />参加や募集ができるサービスです</h2>
                    <p>条件を設けた個人の大会や、公式大会のルール通りで募集し、練習する事ができます。</p>
                </div>

            </div>
            <div className='container main'>
                <Search1 />
                <Search2 />
            </div>
        </>
    )
}
