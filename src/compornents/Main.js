import React from 'react'
import { Search1 } from './Search1'
import { Search2 } from './Search2'


import "../scss/_compornents/main.scss";


export const Main = () => {
  return (
        <main>
            <div className='firstView'>
                <div className='firstView__item'>
                    <h1 className='logo'>Logo</h1>
                    <p>text</p>
                </div>
                <div className='firstView__item'>
                    <figure></figure>
                    <p>サービスのモックアップと説明文</p>
                </div>
            </div>
                <div className='container'>
                    <Search1 />
                    <Search2 />
                </div>
        </main>
  )
}
