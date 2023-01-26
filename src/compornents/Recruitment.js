import React, { useState } from 'react'

import db from './Firebase';
import { auth } from './Firebase';
import { doc, getDoc } from "firebase/firestore";
import { Myframe } from './Myframe';
import RecruitForm from './RecruitForm';
export const  Recruitment =  () => {
  const userId = auth.currentUser.uid;

  const [state,setState] = useState("");

  const PageChange = async () => {
    const docRef = doc(db, "eriomarosuto", userId);
    const docSnap = await getDoc(docRef);  
    const docId = docSnap.id;
    setState(docId);
  }
  PageChange();


  return (
    <div>
      { userId === state ?
      <Myframe />
      :
      <RecruitForm />
    }
    </div>
  )
}
