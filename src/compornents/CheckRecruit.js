import React from 'react'
import { useState, useEffect } from 'react';
import db, { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { doc, setDoc, getDoc} from 'firebase/firestore';
import RecruitForm from './RecruitForm';
import { Confirmation } from './Confirmation';


export const CheckRecruit = () => {
    const [user] = useAuthState(auth); 
    const [get,setGet] = useState([]);

    useEffect(()=>{
        const docRef = doc(db,"eriomarosuto",user.uid);
        getDoc(docRef).then((docSnapshot)=>{
            if (docSnapshot.exists()) {
                console.log('Document data:', docSnapshot.data());
            } else {
                console.log('No such document!');
            }
            setGet(docSnapshot.data());
        })
        console.log(get);
    },[]);

  return (
    <>{get ? 
        <Confirmation />
        :
        <RecruitForm />
    }</>
  )
}
