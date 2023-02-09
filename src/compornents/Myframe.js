import React, { useEffect, useState } from 'react'
import "../scss/_compornents/detail.scss"

import db from './Firebase';
import { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import DateParagraph from './dateParagraph'
import { Participant } from './Participant';
import { deleteUser } from 'firebase/auth';


export const Myframe = () => {
  const [user] = useAuthState(auth); 
  const [post,setPost] = useState([]);


  function getRecruitItem(){
     // ユーザーID名のドキュメントを取得
      const docRef = doc(db,"eriomarosuto",user.uid);
      getDoc(docRef).then((docSnapshot)=>{
        // if (docSnapshot.exists()) {
        //   console.log('Document data:', docSnapshot.data());
        // } else {
        //   console.log('No such document!');
        // }
        setPost(docSnapshot.data());
      })
    }
    // ---
    useEffect(()=>{
      getRecruitItem()
    },[]);

    const deleteUser = async () => {
      const userDocumentRef = doc(db, 'eriomarosuto', user.uid);
      await deleteDoc(userDocumentRef);
    };


  if (!post) {
    return <p>loading...</p>
  }
  return (
    <div className='container'>

      <div className='detailItem myFrame'>
        <div id='detailText' className='text'>
          <div className="icon">
            <figure>
            {post && post.user ? 
              <img src={`${process.env.PUBLIC_URL}${post.user.img}` } alt="アイコン" />
              :null
              }
            </figure>
            <p className="name">{post.name}</p>
            { post && post.user ? 
            <p className="friend-cord">フレンドコード:{post.user.code[0]}-{post.user.code[1]}-{post.user.code[2]}</p>
            :null
            }
          </div>
          <h3 className="ttl">{post.ttl}</h3>
          <div className="tag"></div>
          <time>{post && post.time ? <DateParagraph time={post.time} /> : null }</time>
          <p>モード：{post.mode}</p>
          <p className="comment">{post.text}</p>

          <div className='AppBtn'>
            <button type='submit'>編集</button>
            <button type='submit' onClick={() => deleteUser(user.id)}>削除する</button>
          </div>

        </div>
        <figure className='Img'>
          <img src={`${process.env.PUBLIC_URL}/img/stage/${post.selectCharacter}.jpg`} alt='thumbnail' />
        </figure>

      </div>
      <div className='participant'>
        { post.participant ? <Participant Participant={post.participant} /> : null }
      </div>
    </div>
  )
}
