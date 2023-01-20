import React from 'react'
import "../scss/_compornents/detail.scss"
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addPost } from './features/Posts';
import PostsData from './DummyData';

export const Detail = () => {

  // ---
      const doc = document;
      let flg=false;
      function openDetail(){
        const detailItem = doc.querySelectorAll(".detailItem");
        const AppBtn = doc.querySelector(".AppBtn");

        console.log(detailItem);
        detailItem.forEach((e,i)=>{
          console.log();
          if (flg) {
            flg=false;
            detailItem[i].classList.remove("open");
            // AppBtn.classList.remove("add");
          } else {
            flg=true;
            detailItem[i].classList.add("open");
            AppBtn.classList.add("add");
            }
            });
    }
  // ---

  // --- 項目
  // const [title] = useState("");
  // const [text] = useState("");
  // const [icon] = useState("");
  // const [name] = useState("");
  // const [code] = useState("");
  // const [area] = useState("");
  // const [mode] = useState("");
  // const [time] = useState("");
  // const [xp]   = useState("");
  // ---

  // const postList = useSelector((state) => state.posts.value);
  // console.log(postList);

    // const dispatch = useDispatch();
    // dispatch(addPost(
    //   {
    //     icon: icon,
    //     name:name,
    //     code:code,
    //     title: title,
    //     area: area,
    //     mode: mode,
    //     time: time,
    //     xp: xp,
    //     text: text,
    //   }
    // ));




    // open
  return (
    <div className='container'>
      {PostsData.map((post)=>(
      <div className='detailItem' onClick={openDetail}>
        <div id='detailText' className='text'>
          <div className="icon">
            <figure><img src={`${process.env.PUBLIC_URL}/img/${post.icon}` } alt="アイコン" /></figure>
            <p className="name">{post.name}</p>
            <p className="friend-cord">フレンドコード:{post.code}</p>
          </div>
          <h3 className="ttl">{post.title}</h3>
          <div className="tag"></div>
          <p className="comment">{post.text}</p>
          <div className='AppBtn'>
            <button type='submit'>応募する</button>
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


