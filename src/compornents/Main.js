import React from 'react'
import { Search1 } from './Search1'
import { Search2 } from './Search2'


import "../scss/_compornents/main.scss";
import { Data } from './Data';


export const Main = () => {
    return (
        <main>
            <div className='firstView'>
                <div className='firstView__item'>
                    <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="サムネイル" />
                </div>
                <div className='firstView__item'>
                    <figure></figure>
                </div>
            </div>
                <div className='container main'>
                    <Search1 />
                    <Search2 />
                </div>
        </main>
    )
}
