import React from 'react'
import "../scss/_compornents/form.scss";
import { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
// ---
import { useForm } from 'react-hook-form';
// ---
import { useDispatch } from 'react-redux';
import { addPost } from './features/Posts';
// ---
import db from './Firebase';
import { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";

import { Link } from 'react-router-dom';

// ---

import Option from './stage/Option';


// 
export const RecruitForm = () => {
    const [user] = useAuthState(auth); 

    const {register,handleSubmit} = useForm();
    const onSubmit = (data) => {
        setDoc(doc(db,"eriomarosuto", user.uid),data);
        // ↑ 「eriomarosuto」コレクションに uid と同じ名前でドキュメントを追加
    };
    // -- formの記入概要
    const [title,setTitle] = useState("");
    const [text,setText] = useState("");
    const [area,setArea] = useState("");
    const [mode,setMode] = useState("");
    const [time,setTime] = useState("");
    const [xp,setXp] = useState("");
    // ---
    const dispatch = useDispatch();
    const handleClick = () => {
    dispatch(addPost(
        {
            // id: postList.length,
            title: title,
            area: area,
            mode: mode,
            time: time,
            xp: xp,
            text: text,
        }
    ));
    setTitle("");
    setText("");
    setArea("");
    setMode("");
    setXp("");
    };





    // ---
    return (
        <div className='container'>
            <form className='form' onSubmit={handleSubmit(onSubmit)}> 
                <div className="form__thum">
                    <img id='selectImg' src={`${process.env.PUBLIC_URL}/img/stage/${Option.value}`} alt='画像を選択してください' />
                </div>

                <div className="form__item">
                    <label htmlFor="title">タイトル</label>
                    <input
                        id='ttl'
                        {...register("ttl")}
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)} 
                        placeholder="ここにタイトルを入力" />
                </div>
                {/* --- */}
                <div className="form__item">
                    <label htmlFor='selectCharacter' >対戦エリア</label>
                    <select 
                        id='selectCharacter' 
                        className="mode__select" 
                        defaultValue="no_img.jpg" 
                        style={{cursor:"pointer",}} 
                        onChange={(e)=>setArea(e.target.value)}  
                        {...register("selectCharacter")} 
                        > 
                        {Option.map((option)=>(
                            <option key={option.id} 
                            value={option.value}
                            >
                                {option.name}
                            </option>
                        ))}
                    </select>
                </div>
                {/* --- */}
                <div className="form__item">
                    <label htmlFor="mode">対戦モード</label>
                    <select id='mode' {...register("mode")} onChange={(e)=>setMode(e.target.value)} className="mode__select" name="mode" 
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
                    <label htmlFor="time">開始予定日時</label>
                    <input id='time' {...register("time")  } onChange={(e)=>setTime(e.target.value)} type="dateTime-local" placeholder="開始予定時刻を入力"/>
                </div>
                <div className="form__item">
                    <label htmlFor="xp">xp </label>
                    <input id='xp' {...register("xp")} onChange={(e)=>setXp(e.target.value)} type="text" placeholder="自チームの平均xpを入力" />
                </div>
                <div className="form__item">
                    <label htmlFor="other">その他</label>
                    <textarea id='other' {...register("other")} onChange={(e)=>setText(e.target.value)} name="other" cols="30" rows="10" wrap="hard"></textarea>
                </div>
                <div className='btn'>
                    <button onClick={()=> handleClick()}><Link to="/confirmation">確認</Link></button>
                </div>
            </form>
        </div>
    )
}

export default RecruitForm;