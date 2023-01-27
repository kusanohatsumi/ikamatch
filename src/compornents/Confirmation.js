import React, { useEffect, useState } from 'react'
import "../scss/_compornents/form.scss";
import db from './Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { Link } from 'react-router-dom';



export const Confirmation = () => {
  const [user] = useAuthState(auth);  
  const [get,setGet] = useState([]);



  // --- ユーザー情報が取れているか ---
    if (user == null) {
      console.log("null");
    } else {
      console.log(user.uid);
  // ---
}
  // --- フォームで入力した情報を表示 ---
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

if (!get | get.length == 0) {
  return <p>loading...</p>
}



  return(
    <div className='container'>
      
        <form className='form'  >
            <div className="form__thum">
                <img id='selectImg' src={`${process.env.PUBLIC_URL}/img/stage/${get.selectCharacter}`} alt='画像を選択してください' />
            </div>
            <div className='form__item'>
              <label>タイトル</label>
              <p className='inputValue'>{get.ttl}</p>
            </div>

            {/* <div className='form__item'>
              <label>対戦エリア</label>
              <p className='inputValue'>{get.selectCharacter}</p>
            </div> */}

            <div className='form__item'>
              <label>対戦モード</label>
              <p className='inputValue'>{get.mode}</p>
            </div>
            <div className='form__item'>
              <label>開始予定日時</label>
              <p className='inputValue'>{get.time}</p>
            </div>
            <div className='form__item'>
              <label>xp</label>
              <p className='inputValue'>{get.xp}</p>
            </div>
            <div className='form__item'>
              <label>その他</label>
              <p className='inputValue inputValue--area'>{get.other}</p>
            </div>
            <div className='btn'>
                <button type='button'><Link to="/send">募集を投稿</Link></button>
                <button type='button'><Link to="/recruitform">編集</Link></button>
            </div>
        </form>

    </div>
  )
}




