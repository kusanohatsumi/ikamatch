import React from 'react'
import "../scss/_compornents/detail.scss"
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

import db from './Firebase';
import { doc, collection , limit, onSnapshot, orderBy, query,  } from 'firebase/firestore'

import { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { async } from '@firebase/util';
import {  updateDoc, arrayUnion,  } from "firebase/firestore";


export const Detail = () => {
  const [user] = useAuthState(auth); 

  const [state,setState] = useState([]);
  useEffect(()=>{
      const postData = collection(db,"eriomarosuto");
      const q = query(postData);
      onSnapshot(q,(snapshot)=>{
          setState(snapshot.docs.map((doc) => (doc.data())));
      })
  },[]);

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
      {state.map((post,i)=>(
      <div key={i} className='detailItem' 
      >
        <div id='detailText' className='text'>
          <div className="icon">
            <figure><img src={`${process.env.PUBLIC_URL}/img/icon.svg` } alt="アイコン" /></figure>
            <p className="name">{post.name}</p>
            <p className="friend-cord">フレンドコード:{post.code}</p>
          </div>
          <Link to={`/about/${post.id}`} state={{test:"test"}}>
          <h3 className="ttl">{post.title}</h3>
          <div className="tag"></div>
          <p className="comment">{post.text}</p>
          </Link>
          <div className='AppBtn add'>
            <button 
            onClick={()=> getClickedPostData(post)} 
            type='submit'>応募する</button>
          </div>
        </div>
        <figure className='Img'>
          <Link to={`/about/${post.id}`} state={{test:"test"}}>
            <img src={`${process.env.PUBLIC_URL}/img/stage/${post.selectCharacter}.jpg`} alt='thumbnail' />
          </Link>
        </figure>
      </div>
      ))}
    </div>

    
  )
}
export default Detail;


