import React, { useEffect, useRef } from 'react'
import "../scss/_compornents/form.scss";
import { useState } from 'react';
// ---
import { useForm } from 'react-hook-form';
// ---
// ---
import db, { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";

import { Link } from 'react-router-dom';

// ---

import Option from './stage/Option';
import { doc, setDoc } from 'firebase/firestore';


// 
export const RecruitForm = () => {
    const [user] = useAuthState(auth); 

    const {register,handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data);
        setDoc(doc(db,"eriomarosuto", user.uid),data);
        // ↑ 「eriomarosuto」コレクションに uid と同じ名前でドキュメントを追加
    };



    // -- formの記入概要
    // const [title,setTitle] = useState("");
    const [area,setArea] = useState("");
    const [selectCharacter,setSelectCharacter] = useState("");
    const [mode,setMode] = useState("");
    const [time,setTime] = useState("");
    const [xp,setXp] = useState("");
    const [text,setText] = useState("");
    // ---


    // ---
    return (
        <div className='container'>
            <form className='form' onSubmit={handleSubmit(onSubmit)}> 
                <div  className="form__thum">
                    <img id='selectImg' src={`${process.env.PUBLIC_URL}/img/stage/`} alt='画像を選択してください' />
                </div>

                <div className="form__item">
                    <label htmlFor="title">タイトル</label>
                    <input
                        id='ttl'
                        {...register("ttl")}
                        // onChange={(e)=>setTitle(e.target.value)}
                        placeholder="ここにタイトルを入力" />
                </div>
                {/* --- */}
                <div className="form__item">
                    <label htmlFor='selectCharacter' >対戦エリア</label>
                    <select 
                        className="mode__select" 
                        defaultValue="no_img.jpg" 
                        style={{cursor:"pointer",}} 
                        onClick={(e)=>setArea(e.target.id)}
                        {...register("selectCharacter")} 
                        // onChange={(e)=>setArea(e.target.value)}
                        > 
                        {Option.map((option)=>(
                            <option 
                            id={option.id} 
                            key={option.id} 
                            value={option.value}
                            name={option.name}
                            >
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
                {/* --- */}
                <div className="form__item">
                    <label htmlFor="mode">対戦モード</label>
                    <select id='mode' 
                    {...register("mode")}
                    // onChange={(e)=>setMode(e.target.value)}
                    className="mode__select"
                        style={{
                            cursor:"pointer",
                        }}
                    > 
                        <option value="">対戦モードを選択する</option>
                        <option value="ガチアサリ">ガチアサリ</option>
                        <option value="ガチエリア">ガチエリア</option>
                        <option value="ガチヤグラ">ガチヤグラ</option>
                        <option value="ガチホコ">ガチホコ</option>
                    </select>
                </div>
                <div className="form__item">
                    <label htmlFor="time">開始予定日時</label>
                    <input id='time' 
                    {...register("time")  }
                    // onChange={(e)=>setTime(e.target.value)}
                    type="dateTime-local" 
                    placeholder="開始予定時刻を入力"/>
                </div>
                <div className="form__item">
                    <label htmlFor="xp">xp </label>
                    <input id='xp' 
                    {...register("xp")}
                    // onChange={(e)=>setXp(e.target.value)}
                    type="text" 
                    placeholder="自チームの平均xpを入力" />
                </div>
                <div className="form__item">
                    <label htmlFor="text">その他</label>
                    <textarea id='text' 
                    {...register("text")} 
                    className="text" cols="30" rows="10" wrap="hard">
                    </textarea>
                </div>
                <div className='btn'>
                    <button type='button'>
                        <Link to="/confirmation">確認</Link>
                    </button>
                    <button type='submit'>
                        保存
                    </button>

                </div>
            </form>
        </div>
    )
}
export default RecruitForm;