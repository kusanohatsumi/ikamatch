import React from 'react'
import "../scss/_compornents/form.scss";
import { useState } from 'react';
// ---
import { useForm } from 'react-hook-form';
// ---

// 
export const Form = () => {
    // ---
    const {register,handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    };
    // --

    // ---
    const [area, setArea] = useState("");

    return (
            <div className='container'>
                <form className='form' onSubmit={handleSubmit(onSubmit)}> 
                    <div className="form__thum">
                        <img id='selectImg' src={`${process.env.PUBLIC_URL}/img/stage/${area}`} alt='画像を選択してください' />
                    </div>
                    <div className="form__item">
                        <label htmlFor="title">タイトル</label>
                        <input
                            id='ttl'
                            {...register("ttl")}
                            placeholder="ここにタイトルを入力" />
                    </div>

                    <div className="form__item">
                        <label htmlFor='selectCharacter' for="area">対戦エリア</label>
                        <select  id='selectCharacter' {...register("selectCharacter")} onChange={(e)=>setArea(e.target.value)}  className="mode__select" name="mode" style={{cursor:"pointer",}}> 
                            <option selected disabled>対戦エリアを選択する</option>
                            <option value="yunohana.jpg">ユノハナ大渓谷</option>
                            <option value="gonnzui.jpg">ゴンズイ地区</option>
                            <option value="yagara.jpg">ヤガラ市場</option>
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
                        <label htmlFor="mode">対戦モード</label>
                        <select id='mode' {...register("mode")} className="mode__select" name="mode" 
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
                        <label htmlFor="time">開始予定日</label>
                        <input id='time' {...register("time")} type="dateTime-local" placeholder="開始予定時刻を入力"/>
                    </div>

                    <div className="form__item">
                        <label htmlFor="xp">xp </label>
                        <input id='xp' {...register("xp")} type="text" placeholder="自チームの平均xpを入力" />
                    </div>

                    <div className="form__item">
                        <label htmlFor="other">その他</label>
                        <textarea id='other' {...register("other")} name="other" cols="30" rows="10" wrap="hard"></textarea>
                    </div>

                    <div className='btn'>
                        <button>募集を投稿する</button>
                        {/* <button><Link to="/send">募集を投稿する</Link></button> */}
                    </div>
                </form>
            </div>
    )
}

export default Form;