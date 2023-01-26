import React, { useEffect, useState } from 'react'

import "../scss/_compornents/form.scss";

import db from './Firebase';
import { doc, getDoc, onSnapshot,  } from 'firebase/firestore';

import { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";

import { Link } from 'react-router-dom';
import { async } from '@firebase/util';
import UserInfo from './Login';
import { Loading } from './Loading';



export const Confirmation = () => {
  const [user] = useAuthState(auth);
  const [state,setState] = useState("");


  // ---
  // function UserItem(){
  //   return(
  //       <form className='form' > 
  //         <div className="form__thum">
  //             <img id='selectImg' src={`${process.env.PUBLIC_URL}/img/stage/`} alt='画像を選択してください' />
  //         </div>
  //         <div className='form__item'>
  //           <label>タイトル</label>
  //           <p className='inputValue'></p>
  //         </div>
  
  //         <div className='form__item'>
  //           <label>対戦エリア</label>
  //           <p className='inputValue'></p>
  //         </div>
  
  //         <div className='form__item'>
  //           <label>対戦モード</label>
  //           <p className='inputValue'></p>
  //         </div>
  //         <div className='form__item'>
  //           <label>開始予定日時</label>
  //           <p className='inputValue'></p>
  //         </div>
  //         <div className='form__item'>
  //           <label>xp</label>
  //           <p className='inputValue'></p>
  //         </div>
  //         <div className='form__item'>
  //           <label>その他</label>
  //           <p className='inputValue inputValue--area'></p>
  //         </div>
  
  //         <div className='btn'>
  //             <button type='submit'><Link to="/send">募集を投稿</Link></button>
  //             <button type='button'><Link to="/recruitform">編集</Link></button>
  //         </div>
  //       </form>
  
  //               // <img src={auth.currentUser.photoURL} referrerPolicy="no-referrer" alt="アイコン" />
  //               // <p>{auth.currentUser.uid}</p>
  //   );
  // }
  // ---
  
  // ---
      // --- ユーザー情報が取れているか ---
        if (user == null) {
          console.log("null");
        } else {
          console.log(user.uid);
        }
      // ---
      // --- フォームで入力した情報を表示 ---
      const getRecruitItem = async () => {
        // ユーザーID名のドキュメントを取得
        const docRef = doc(db,"eriomarosuto",user.uid);
        const docSnap = await getDoc(docRef);
        const itemData = docSnap.data();
        console.log(itemData);
      }
      // setTimeout(getRecruitItem,100);
      getRecruitItem();
    // ---



  
    
  return(
    <div className='container'>
        <form className='form' >
            <div className="form__thum">
                <img id='selectImg' src={`${process.env.PUBLIC_URL}/img/stage/`} alt='画像を選択してください' />
            </div>
            <div className='form__item'>
              <label>タイトル</label>
              <p className='inputValue'></p>
            </div>

            <div className='form__item'>
              <label>対戦エリア</label>
              <p className='inputValue'></p>
            </div>

            <div className='form__item'>
              <label>対戦モード</label>
              <p className='inputValue'></p>
            </div>
            <div className='form__item'>
              <label>開始予定日時</label>
              <p className='inputValue'></p>
            </div>
            <div className='form__item'>
              <label>xp</label>
              <p className='inputValue'></p>
            </div>
            <div className='form__item'>
              <label>その他</label>
              <p className='inputValue inputValue--area'></p>
            </div>
            <div className='btn'>
                <button type='submit'><Link to="/send">募集を投稿</Link></button>
                <button type='button'><Link to="/recruitform">編集</Link></button>
            </div>
        </form>
    </div>
  )
}




      // {/* {user ? (
      //     // <UserItem />
      //     <UserData />
      //   ):(
      //     <Loading />
      // )} */}
