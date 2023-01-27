import db from './Firebase';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { async } from '@firebase/util';

export const Data = () => {

  const [get, setGet] = useState([]);

  function getCollection(){
    getDocs(collection(db, "eriomarosuto"))
    .then((querySnapshot) => {
      setGet(querySnapshot.docs.map((doc) => doc.data()))
    })
  }

  useEffect(() => {
    getCollection()
    console.log(get);
  },[])

  if (!get | get.length == 0) {
    return <p>loading...</p>
  }

  return (
    <div>
      {console.log(get)}
      {get.map((doc, i)=>(
        <div key={i}>
          <h2>{doc.mode}</h2>
          <p>{doc.selectCharacter}</p>
        </div>
      ))}
    </div>
  )
}
