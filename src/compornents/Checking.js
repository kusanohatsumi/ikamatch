import React from 'react'
import { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";
import { Login } from './Login';
import { Recruitment } from './Recruitment';



export const Checking = () => {
    const [user] = useAuthState(auth); 
    return (
        <div>
            {user ? (
                // ログインしていたら
                <Recruitment />
                ):(
                // ログインしていなかったら
                <Login />
            )}
        </div>
    )
}
