import React from 'react'
import "../scss/_compornents/form.scss";
import { Link } from 'react-router-dom';
import { useState } from 'react';



export const Form = () => {

    // const selectCharacter = document.getElementById("selectCharacter");
    // const selectImg = document.getElementById("selectImg");

    const [area, setArea] = useState("");

    // function setImag(){
    //     let imgFileName = selectCharacter.value;
    //     console.log(imgFileName);
    //     // selectImg.src = `${process.env.PUBLIC_URL}/img/stage/${imgFileName}`;
    // }

    return (
            <div className='container'>
                <h2>募集をする</h2>
                <form className='form'> 
                    <div className="form__thum">
                        <img id='selectImg' src={`${process.env.PUBLIC_URL}/img/stage/${area}`} alt='画像を選択してください' />
                    </div>
                    <div className="form__item">
                        <label for="title">タイトル</label>
                        <input type="text" placeholder="ここにタイトルを入力" />
                    </div>

                    <div className="form__item">
                        <label for="area">対戦エリア</label>
                        <select id='selectCharacter' onChange={(e)=>setArea(e.target.value)}  className="mode__select" name="mode" style={{cursor:"pointer",}}> 
                            <option selected disabled>対戦エリアを選択する</option>
                            <option value="yunohana.jpg">ユノハナ大渓谷</option>
                            <option value="gonnzui.jpg">ゴンズイ地区</option>
                            <option value="yagara.js">ヤガラ市場</option>
                            <option value="mategai.jpg">マテガイ放水路</option>
                            <option value="namerou.jpg">ナメロウ金属</option>
                            <option value="masaba.jpg">マサバ海峡大橋</option>
                            <option value="kinnmedai.jpg">キンメダイ美術館</option>
                            <option value="mahimahi.jpg">マヒマヒリゾート&スパ</option>
                            <option value="ama.jpg">海女美術大学</option>
                            <option value="tyouzame.jpg">チョウザメ造船</option>
                            <option value="zatou.jpg">ザトウマーケット</option>
                            <option value="sume-shi-.jpg">スメーシーワールド&スパ</option>
                            <option value="hirame.jpg">ヒラメが丘団地</option>
                        </select>
                    </div>
                    

                    <div className="form__item">
                        <label for="mode">対戦モード</label>
                        <select className="mode__select" name="mode" 
                            style={{
                                // background: "url(img/icon_down.svg)",
                                // backgroundRepeat:"no-repeat",
                                // backgroundPosition:" right center",
                                // backgroundSize:" 28px 28px",
                                cursor:"pointer",
                            }}
                        > 
                            <option value="">対戦モードを選択する</option>
                            <option value="asari">ガチアサリ</option>
                            <option value="area">ガチエリア</option>
                            <option value="yagura">ガチヤグラ</option>
                            <option value="hoko">ガチホコ</option>
                        </select>
                    </div>

                    <div className="form__item">
                        <label for="time">開始予定日</label>
                        <input type="dateTime-local" placeholder="開始予定時刻を入力"/>
                    </div>

                    <div className="form__item">
                        <label for="xp">xp </label>
                        <input type="text" placeholder="自チームの平均xpを入力" />
                    </div>

                    <div className="form__item">
                        <label for="other">その他</label>
                        <textarea name="other" cols="30" rows="10" wrap="hard"></textarea>
                    </div>

                    <div className='btn'>
                        <button><Link to="/send">募集を投稿する</Link></button>
                    </div>
                </form>
            </div>
    )
}

export default Form;