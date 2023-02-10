import React from 'react'
import "../scss/_compornents/searchItemStyle.scss"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import db from './Firebase'
import { doc, collection , limit, onSnapshot, orderBy, query,  } from 'firebase/firestore'
import DateParagraph from './dateParagraph'
import { About } from './About'

export const Search1 = () => {
    const [state,setState] = useState([]);
    useEffect(()=>{
        const postData = collection(db,"eriomarosuto");
        const q = query(postData,orderBy("eriomarosuto","desc"),limit(8));
        onSnapshot(q,(snapshot)=>{
            setState(snapshot.docs.map((doc) => (doc.data())));
        })
    },[]);
    console.log();

    const getClickedPostData = async (clickedPostData) => {
        console.log(clickedPostData.id);
    }

    return (
        <section className='Container'>
            <div className="recruitTtl">
                <h2>#えりおまろすと5先で探す</h2>
                <p>
                    <Link to="/detail">もっと見る→</Link>
                </p>
            </div>

            <div className="eriomarosuto contents" > 
                {state.map((post,i)=>(

                <div className="eriomarosuto__item" key={i} > 
                    <div className="wrap">
                        <figure>
                            <Link to={`/about/${post.id}`} state={{test:"test"}}>
                            <img src={`${process.env.PUBLIC_URL}/img/stage/${post.selectCharacter}.jpg`} alt='thumbnail' />
                            </Link>
                        </figure> 
                        <div className="contentsTxt">
                        <Link to={`/about/${post.id}`} state={{test:"test"}}>
                            <time dateTime="2022-12-13T22:00">
                                {post && post.time ? <DateParagraph time={post.time} /> : null }
                            </time>
                            <p>{post.title}</p>
                            <p>{post.text}</p>
                        </Link>
                            <div className="tag">
                                <a href='eri'>#{post.eriomarosuto}</a>
                                <a href='eri'>#xp{post.xp}</a>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>

        </section>
    )
}



