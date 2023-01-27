import React, { useEffect, useState } from 'react'

import db from './Firebase';
import { auth } from './Firebase';
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { Myframe } from './Myframe';
import RecruitForm from './RecruitForm';
export const  Recruitment =  () => {
  const userId = auth.currentUser.uid;

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
      setState(querySnapshot.docs.map((doc) => doc.data()));
    });
  }, []);



  return (
    <div>
      { state.indexOf(userId) ?
      // uidが含まれていたら
      <Myframe />
      :
      // uidが含まれていなかったら
      <RecruitForm />
    }
    </div>
  )
}
