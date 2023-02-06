import React from 'react'
import "../scss/_compornents/detail.scss"
import { useSelector } from 'react-redux';
import { useState } from 'react';

import { doc } from 'firebase/firestore';
import db from './Firebase';
import { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { async } from '@firebase/util';
import {  updateDoc, arrayUnion,  } from "firebase/firestore";


export const Detail = () => {
  const PostsData = useSelector((state) => state.posts.value);
  const [user] = useAuthState(auth); 

  // 
  const getClickedPostData = async (clickedPostData) => {
    // 更新したいドキュメント
      const washingtonRef = doc(db, "eriomarosuto", clickedPostData.id);
      await updateDoc(washingtonRef, {
        // 指定した配列名に要素を追加
        participant: arrayUnion({
          // 追加したい名前とデータ[ 項目：データ, ]
          userName:user.displayName,
          participantUid:user.uid,
          imageUrl:user.photoURL,
        })
    });

  }



  // ---




  return (
    <div className='container'>
      {PostsData.map((post,i)=>(
      <div key={i} className='detailItem' 
      >
        <div id='detailText' className='text'>
          <div className="icon">
            <figure><img src={`${process.env.PUBLIC_URL}/img/${post.icon}` } alt="アイコン" /></figure>
            <p className="name">{post.name}</p>
            <p className="friend-cord">フレンドコード:{post.code}</p>
          </div>
          <h3 className="ttl">{post.title}</h3>
          <div className="tag"></div>
          <p className="comment">{post.text}</p>
          <div className='AppBtn add'>
            <button 
            onClick={()=> getClickedPostData(post)} 
            type='submit'>応募する</button>
          </div>
        </div>
        <figure className='Img'>
          <img src={`${process.env.PUBLIC_URL}/img/stage/${post.area}`} alt='thumbnail' />
        </figure>
      </div>
      ))}
    </div>

    
  )
}
export default Detail;


