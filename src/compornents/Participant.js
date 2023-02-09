import { nothing } from 'immer';
import React, { useEffect, useState } from 'react'

export const Participant = ({Participant}) => {
  const [participant,setParticipant] = useState([]);
  useEffect(()=>{
    if (Participant) {
      console.log(Participant);
    } else {
      // do nothing
    }

  })
  return (
    <>
      <p>{Participant.length}名の応募者</p>

    {Participant.map((post)=>(
      <div className='userItem'>
        <div className='userItem__info'>
          <figure className='userImg'><img src={post.imageUrl} /></figure>
          <div className='userText'>
            <p className='name'>{post.userName}</p>
            <p className='comment'>{post.text}</p>
          </div>
        </div>
        <button className='userItem__btn'>申し込みを受ける</button>

      </div>
    ))}
    </>
  )
}
