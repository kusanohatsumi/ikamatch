import React, { useEffect, useState } from 'react'
import "../scss/_compornents/detail.scss"

import db from './Firebase';
import { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";

export const Myframe = () => {
  const [user] = useAuthState(auth); 
  const [get,setGet] = useState([]);


  function getRecruitItem(){
     // ユーザーID名のドキュメントを取得
      const docRef = doc(db,"eriomarosuto",user.uid);
      getDoc(docRef).then((docSnapshot)=>{
        if (docSnapshot.exists()) {
          console.log('Document data:', docSnapshot.data());
        } else {
          console.log('No such document!');
        }
      setGet(docSnapshot.data());
    })
  }
  // ---
  useEffect(()=>{
    getRecruitItem()
    console.log(get);
  },[]);

  if (!get) {
    return <p>loading...</p>
  }
  return (
    <div className='container'>

      <div className='detailItem open' >
        <div id='detailText' className='text'>
          <div className="icon">
            <figure><img src={`${process.env.PUBLIC_URL}/img/icon.svg` } alt="アイコン" /></figure>
            <p className="name">{get.name}</p>
            <p className="friend-cord">フレンドコード:{get.code}</p>
          </div>
          <h3 className="ttl">{get.ttl}</h3>
          <div className="tag"></div>
          <p className="comment">{get.other}</p>
          <p>{get.mode}</p>
          <div className='AppBtn add'>
            <button 
            type='submit'>削除する</button>
          </div>
        </div>
        <figure className='Img'>
          <img src={`${process.env.PUBLIC_URL}/img/stage/${get.selectCharacter}`} alt='thumbnail' />
        </figure>
      </div>
    </div>
  )
}
