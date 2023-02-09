import React from 'react'
import { useState, useEffect } from 'react';
import "../scss/_compornents/form.scss";
import { useForm } from 'react-hook-form';
import db, { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import Option from './stage/Option';
import { doc, setDoc, getDoc, Timestamp } from 'firebase/firestore';
import { async } from '@firebase/util';
import { Link } from 'react-router-dom';
import { Myframe } from './Myframe';


// 
export const RecruitForm = () => {
    const [user] = useAuthState(auth); 
    const [time,setTime] = useState();

    const {register,handleSubmit} = useForm();
    const onSubmit = async(data) => {
        console.log(data);
        await setDoc(doc(db,"eriomarosuto", user.uid),data);
        // ↑ 「eriomarosuto」コレクションに uid と同じ名前でドキュメントを追加
    }

    const [get,setGet] = useState([]);

    useEffect(()=>{
        const docRef = doc(db,"eriomarosuto",user.uid);
        getDoc(docRef).then((docSnapshot)=>{
            // if (docSnapshot.exists()) {
            //     console.log('Document data:', docSnapshot.data());
            // } else {
            //     console.log('No such document!');
            // }
            setGet(docSnapshot.data());
        })
        console.log(get);
    },[]);


    return (
        <div className='container'>
            <form className='form' onSubmit={handleSubmit(onSubmit)}> 
                <div className="form__item">
                    <label htmlFor="title">タイトル</label>
                    <input
                        id='title'
                        {...register("ttl",{ required: true })}
                        placeholder="ここにタイトルを入力" />
                </div>
                <div className="form__item">
                    <label htmlFor='selectCharacter' >対戦エリア</label>
                    <select 
                        className="mode__select" 
                        defaultValue="no_img.jpg" 
                        style={{cursor:"pointer",}} 
                        {...register("selectCharacter",{ required: true })} 
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
                <div className="form__item">
                    <label htmlFor="mode">対戦モード</label>
                    <select id='mode' 
                    {...register("mode",{ required: true })}
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
                    {...register("time",{ required: true })}
                    type="dateTime-local" 
                    placeholder="開始予定時刻を入力"/>
                </div>
                <div className="form__item">
                    <label htmlFor="xp">xp </label>
                    <input id='xp' 
                    {...register("xp",{ required: true })}
                    type="text" 
                    placeholder="自チームの平均xpを入力" />
                </div>
                <div className="form__item">
                    <label htmlFor="text">説明</label>
                    <textarea id='text' 
                    {...register("text",{ required: true })} 
                    className="text" cols="30" rows="10" wrap="hard">
                    </textarea>
                </div>

                <div className='btn'>
                    {get ? 
                    <Myframe />
                    :
                    <button type='submit'><Link to="/confirmation">保存</Link></button>
                    }
                </div>
            </form>
        </div>
    )
}
export default RecruitForm;