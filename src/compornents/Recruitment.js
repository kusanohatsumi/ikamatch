import React, { useEffect, useState } from 'react'

import db from './Firebase';
import { auth } from './Firebase';
import { collection, getDocs } from "firebase/firestore";
import { Myframe } from './Myframe';
import { CheckRecruit } from './CheckRecruit';
import RecruitForm from './RecruitForm';
export const  Recruitment =  () => {
  const userId = auth.currentUser.uid;
  const [state,setState] = useState("");
  useEffect(() => {
    const usersCollectionRef = collection(db, 'eriomarosuto');
    getDocs(usersCollectionRef).then((querySnapshot) => {
      setState(querySnapshot.docs.map((doc)=>doc.id));
      // ドキュメントのIDを取得
    });
  }, []);
  // console.log(state);
  const result = state.indexOf(userId);
  // if (result !== -1) {
  //   console.log("含まれる");
  // } else{
  //   console.log("含まれない");
  // }
  return (
    <div>
      { result !== -1 ? (
        // 含まれる
          <Myframe />
        ):(
        // 含まれない
          <RecruitForm />
      )
    }
    </div>
  )
}
