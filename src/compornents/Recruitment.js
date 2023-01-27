import React, { useEffect, useState } from 'react'

import db from './Firebase';
import { auth } from './Firebase';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Myframe } from './Myframe';
import RecruitForm from './RecruitForm';
export const  Recruitment =  () => {
  const userId = auth.currentUser.uid;
  console.log(userId);

  const [state,setState] = useState("");

  // const PageChange = async () => {
  //   const docRef = doc(db, "eriomarosuto", userId);
  //   const docSnap = await getDoc(docRef);  
  //   const docId = docSnap.id;
  //   console.log(docSnap.data());
  //   setState(docId);
  // }
  // PageChange();



  useEffect(() => {
    const usersCollectionRef = collection(db, 'eriomarosuto');
    getDocs(usersCollectionRef).then((querySnapshot) => {
      setState(querySnapshot.docs.map((doc)=>doc.id));
      // ドキュメントのIDを取得
    });
  }, []);
  console.log(state);
  const result = state.indexOf(userId);
  if (result !== -1) {
    console.log("含まれる");
  } else{
    console.log("含まれない");
  }
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
