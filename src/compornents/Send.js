import React from 'react'
import { Link } from 'react-router-dom'
import "../scss/_compornents/send.scss"

export const Send = () => {
  return (
    <section class="send"> 
        <h2>募集記事に登録しました。</h2>
        <p>以下のボタンから募集一覧に戻ることができます。</p>
        
        <button><Link to="/">募集一覧に戻る</Link></button>
        
  </section>
)
}
