import React from 'react'
import { Link } from 'react-router-dom'
export const Search2 = () => {
  return (
    <section className='Container'>
        <div class="recruitTtl">
            <h2>募集中の大会を探す</h2>
            <p>
              <Link to="/Detail">詳細ページに進む→</Link>
            </p>
        </div>

        <div class="contents tournament"> 
            <div class="tournament__item "> 
                <div class="wrap">
                    <figure class="tournamentImg">
                        <img src="https://source.unsplash.com/random/" alt='thumbnail' />
                    </figure>
                    <div class="contentsTxt">
                        <time dateTime="2022-12-13T22:00">開催日：2022/12/17（土）21:00</time>
                        <h3>第3回あゆん主催スプラ3大会ビッグプレゼント杯</h3>
                        <p>ぼっちは卒業！クリスマスは仲のいいイカとペアを組んでスプラトゥーンを楽しもう！プライズ詳細：優勝賞金：1,500円×2 人準優勝賞金：500円×2人賞金総額：4,000円</p>
                        <div class="tag">
                            {/* <a id="tag" href="#"> #えりおまろすと5先</a>
                            <a id="tag" href="#"> #xp2700</a> */}
                        </div>
                    </div>
                </div>
            </div>

            <div class="tournament__item "> 
                <div class="wrap">
                    <figure class="tournamentImg">
                        <img src="https://source.unsplash.com/random/" alt='thumbnail' />
                    </figure>
                    <div class="contentsTxt">
                        <time dateTime="2022-12-13T22:00">開催日：2022/12/17（土）21:00</time>
                        <h3>第3回あゆん主催スプラ3大会ビッグプレゼント杯</h3>
                        <p>ぼっちは卒業！クリスマスは仲のいいイカとペアを組んでスプラトゥーンを楽しもう！プライズ詳細：優勝賞金：1,500円×2 人準優勝賞金：500円×2人賞金総額：4,000円</p>
                        <div class="tag">
                            {/* <a id="tag" href="#"> #えりおまろすと5先</a>
                            <a id="tag" href="#"> #xp2700</a> */}
                        </div>
                    </div>
                </div>
            </div>



        </div>

    </section>
  )
}
