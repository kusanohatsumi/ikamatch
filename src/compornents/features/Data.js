
import db from './Firebase';
import { doc, getDoc,  } from 'firebase/firestore';

import { auth } from './Firebase';
import {useAuthState} from "react-firebase-hooks/auth";

import { Link } from 'react-router-dom';
import { async } from '@firebase/util';
    


export const Data = () => {
    const [user] = useAuthState(auth);
    // --- フォームで入力した情報を表示 ---
        const getRecruitItem = async () => {
            // ユーザーIDの取得
            console.log(user.uid);
            // ユーザーID名のドキュメントを取得
            const docRef = doc(db,"eriomarosuto",user.uid);
            const docSnap = await getDoc(docRef);
            const itemData = docSnap.data();
        }
        getRecruitItem();

    return (
        <></>
    )
}

