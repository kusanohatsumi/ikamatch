import React from 'react'

import { auth } from './Firebase'
export const MyPage = () => {

  return (
    <div>
        <button onClick={() => auth.signOut()}>
            <p>サインアウト</p>
        </button>
    </div>
  )
}
