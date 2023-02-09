import React, { useEffect, useState } from 'react'
import db from './Firebase';
import { doc, getDoc } from "firebase/firestore";
import { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import DateParagraph from './dateParagraph'
import {  updateDoc, arrayUnion,  } from "firebase/firestore";



export const About = () => {
  const params = useParams();
  const ID = params.itemID;
  console.log(params);
  
  const [post,setPost] = useState([]);
  const [userInfo,setUserInfo] = useState([]);
  useEffect(()=>{
    const docRef = doc(db,"eriomarosuto",ID);
    getDoc(docRef).then((docSnapshot)=>{
      // if (docSnapshot.exists()) {
      //   console.log('Document data:', docSnapshot.data());
      // } else {
      //   console.log('No such document!');
      // }
      setPost(docSnapshot.data());
    })
  },[])
  console.log(post.user);


  if (post.user) {
    console.log(post.user.code);
    
  } else {
    console.log("no");
  }



  const [user] = useAuthState(auth); 
  const [state,setState] = useState([]);

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


  return (
    <div className='container'>
      <div className='detailItem open'>
        <div id='detailText' className='text'>
          <div className="icon">
            <figure>
              {post && post.user ? 
              <img src={`${process.env.PUBLIC_URL}/img/${post.user.img}` } alt="アイコン" />
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
            <button type='submit' onClick={()=> getClickedPostData(post)}>応募する</button>
          </div>
        </div>
        <figure className='Img'>
          <img src={`${process.env.PUBLIC_URL}/img/stage/${post.selectCharacter}.jpg`} alt='thumbnail' />
        </figure>

      </div>
    </div>
  )
}