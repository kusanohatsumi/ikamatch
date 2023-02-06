import React from 'react'
import { Link } from 'react-router-dom'
import "../scss/_compornents/searchItemStyle.scss"
// ---
import { useState } from 'react'
import db from './Firebase'
import { useEffect } from 'react'
import { collection ,getDocs } from 'firebase/firestore'
// ---
import { format, formatDistance, toDate } from 'date-fns'
import { ja } from "date-fns/locale";
import DateParagraph from './dateParagraph'

export const Search1 = () => {
    const postData = collection(db,"eriomarosuto");
    const [state,setState] = useState([]);

    // --- 日付
    // let date = new Date();
    let date = "02 feb 2023 06:01:00 GMT+0900";
    let today = format(new Date(), 'yyyy/MM/dd');
    // console.log(format(new Date(date), 'yyyy-MM-dd HH:mm'));
    let time = formatDistance(new Date(), Date.parse(date), {
        locale: ja,
    });
    // console.log(time);

    // ---

    console.log(state);

    const [timeData,setTimeData] = useState("");
    useEffect(()=>{
        getDocs(postData).then((snapshot)=>{      
            // console.log(snapshot.docs.map((doc) => (doc.data())));
            setState(snapshot.docs.map((doc) => (doc.data())));
        })
        // console.log(state);
        // state.map((post,i)=>(
        //     console.log(post.time)
        // ))
    },[]);




    return (
        <section className='Container'>
            <div className="recruitTtl">
                <h2>#えりおまろすと5先で探す</h2>
                <p>
                    <Link to="/About">詳細ページに進む→</Link>
                </p>
            </div>

            <div className="eriomarosuto contents"> 
                {state.map((post,i)=>(
                <div className="eriomarosuto__item" key={i}> 
                    {/* <Link to="/About"> */}
                        <div className="wrap">
                            <figure>
                                <img src={`${process.env.PUBLIC_URL}/img/stage/${post.selectCharacter}.jpg`} alt='thumbnail' />
                            </figure> 
                            <div className="contentsTxt">
                                <time dateTime="2022-12-13T22:00">
                                    {post && post.time ? <DateParagraph time={post.time} /> : null }
                                </time>
                                <p>{post.title}</p>
                                <p>{post.text}</p>
                                <div className="tag">
                                    <a href='eri'>#えりおまろすと5先</a>
                                    <a href='eri'>#xp{post.xp}</a>
                                </div>
                            </div>
                        </div>
                    {/* </Link> */}
                </div>
                ))}
            </div>

        </section>
    )
}
