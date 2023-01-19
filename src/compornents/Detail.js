import React from 'react'
import "../scss/_compornents/detail.scss"

export const Detail = () => {


    const doc = document;
    let flg=false;
    
    function openDetail(){
      const detailItem = doc.querySelectorAll(".detailItem");
      const AppBtn = doc.querySelector(".AppBtn");

      console.log(detailItem);
      detailItem.forEach((e,i)=>{
        console.log();
        if (flg) {
          flg=false;
          detailItem[i].classList.remove("open");
          // AppBtn.classList.remove("add");
        } else {
          flg=true;
          detailItem[i].classList.add("open");
          AppBtn.classList.add("add");
          }
          });

  }
  


    // open
  return (
    <div className='container'>
      <div className='detailItem' onClick={openDetail}>
        <div id='detailText' className='text'>
          <div className="icon">
            <figure></figure>
            <p className="name">suda</p>
            <p className="friend-cord">フレンドコード:3044-1210-1751</p>
          </div>
          <h3 className="ttlh">今から遊べるスプラ勢集まれ！深夜のイカタコマッチ</h3>
          <div className="tag"></div>
          <p className="comment">暇な人募！深夜のカスタムマッチ　夜更かしさんいらっしゃい</p>
          <div className='AppBtn'>
            <button type='submit'>応募する</button>
          </div>
        </div>
        <figure className='Img'>
          <img src={`${process.env.PUBLIC_URL}/img/stage/mahimahi.jpg`} alt='thumbnail' />
        </figure>
      </div>

      <div className='detailItem' onClick={openDetail}>
        <div id='detailText' className='text'>
          <div className="icon">
            <figure></figure>
            <p className="name">kusano</p>
            <p className="friend-cord">フレンドコード:3044-1210-1751</p>
          </div>
          <h3 className="ttlh">ゆったりまったりカジュアルマッチ</h3>
          <div className="tag"></div>
          <p className="comment">カジュアルに楽しく遊べる人来て欲しいです。カスタムマッチを楽しもう！</p>
          <div className='AppBtn'>
            <button type='submit'>応募する</button>
          </div>
        </div>
        <figure className='Img'>
          <img src={`${process.env.PUBLIC_URL}/img/stage/ama.jpg`} />
        </figure>
      </div>

      <div className='detailItem' onClick={openDetail}>
        <div id='detailText' className='text'>
          <div className="icon">
            <figure></figure>
            <p className="name">kusano</p>
            <p className="friend-cord">フレンドコード:3044-1210-1751</p>
          </div>
          <h3 className="ttlh">ガチ勢歓迎！本気のスプラ</h3>
          <div className="tag"></div>
          <p className="comment">大会優勝を目指した練習がしたい！レベルの高いゲームをしたい人集まれ</p>
          <div className='AppBtn'>
            <button type='submit'>応募する</button>
          </div>
        </div>
        <figure className='Img'>
          <img src={`${process.env.PUBLIC_URL}/img/stage/mategai.jpg`} />
        </figure>
      </div>

      <div className='detailItem' onClick={openDetail}>
        <div id='detailText' className='text'>
          <div className="icon">
            <figure></figure>
            <p className="name">kusano</p>
            <p className="friend-cord">フレンドコード:3044-1210-1751</p>
          </div>
          <h3 className="ttlh">主初心者です。練習カスタム</h3>
          <div className="tag"></div>
          <p className="comment">初心者のみんなでわいわ楽しくエンジョイカスタム。スプラが苦手な人や始めたての人でも大歓迎！！</p>
          <div className='AppBtn'>
            <button type='submit'>応募する</button>
          </div>
        </div>
        <figure className='Img'>
          <img src={`${process.env.PUBLIC_URL}/img/stage/tyouzame.jpg`} />
        </figure>
      </div>

      <div className='detailItem' onClick={openDetail}>
        <div id='detailText' className='text'>
          <div className="icon">
            <figure></figure>
            <p className="name">kusano</p>
            <p className="friend-cord">フレンドコード:3044-1210-1751</p>
          </div>
          <h3 className="ttlh">「第3回あゆん主催スプラ3大会ビッグプレゼント杯」優勝目指して</h3>
          <div className="tag"></div>
          <p className="comment"></p>
          <div className='AppBtn'>
            <button type='submit'>応募する</button>
          </div>
        </div>
        <figure className='Img'>
          <img src={`${process.env.PUBLIC_URL}/img/stage/yagara.jpg`} />
        </figure>
      </div>



    </div>

    
  )
}
export default Detail;


