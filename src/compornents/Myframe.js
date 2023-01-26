import React from 'react'
import "../scss/_compornents/detail.scss"

import db from './Firebase';
import { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { doc, getDoc } from "firebase/firestore";

export const Myframe = () => {
  const [user] = useAuthState(auth); 
  const getRecruitItem = async () => {
    const docRef = doc(db,"eriomarosuto",user.uid);
    console.log(user.uid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.data());
  }
  getRecruitItem();
  return (
    <div className='container'>
      現在募集中の

      {/* {PostsData.map((post,i)=>(
      <div key={i} className='detailItem open' 
      // onClick={openDetail}
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
      ))} */}
    </div>
  )
}
