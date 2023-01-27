import React from 'react'
import { Link } from 'react-router-dom'
import "../scss/_compornents/searchItemStyle.scss"
// ---
import { useState } from 'react'
import db from './Firebase'
import { useEffect } from 'react'
import { collection ,getDocs } from 'firebase/firestore'
// ---

export const Search1 = () => {
    const postData = collection(db,"eriomarosuto");
    const [state,setState] = useState();

    useEffect(()=>{
        getDocs(postData).then((snapshot)=>{
            // console.log(snapshot.docs.map((doc)=>doc.data()));
            setState(snapshot.docs.map((doc) => (doc.data()) ) );
        })
    },[]);
    // console.log(state);


    return (
        <section className='Container'>
            <div className="recruitTtl">
                <h2>#えりおまろすと5先で探す</h2>
                <p>
                    <Link to="/About">詳細ページに進む→</Link>
                </p>
            </div>

            <div className="eriomarosuto contents"> 
            
                <div className="eriomarosuto__item "> 
                    <Link to="/About">
                        <div className="wrap">
                            <figure>
                                <img src={`${process.env.PUBLIC_URL}/img/stage/ama.jpg`} alt='thumbnail' />
                            </figure> 
                            <div className="contentsTxt">
                                <time dateTime="2022-12-13T22:00">22:00</time>
                                <p>対抗戦の相手募集</p>
                                <div className="tag">
                                    {/* <a href='eri'>#えりおまろすと5先</a>
                                    <a href='eri'>#xp2700</a> */}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="eriomarosuto__item "> 
                    <Link to="/About">
                        <div className="wrap">
                            <figure>
                                <img src={`${process.env.PUBLIC_URL}/img/stage/zatou.jpg`} alt='thumbnail' />
                            </figure> 
                            <div className="contentsTxt">
                                <time dateTime="2022-12-13T21:30">21:30</time>
                                <p>対抗戦の参加チーム募集</p>
                                <div className="tag">
                                    {/* <a href='eri'>#えりおまろすと5先</a>
                                    <a href='eri'>#xp2500</a> */}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="eriomarosuto__item "> 
                    <Link to="/About">
                        <div className="wrap">
                            <figure>
                                <img src={`${process.env.PUBLIC_URL}/img/stage/yagara.jpg`} alt='thumbnail' />
                            </figure> 
                            <div className="contentsTxt">
                                <time dateTime="2022-12-13T19:00">19:00</time>
                                <p>カスタムマッチ募集</p>
                                <div className="tag">
                                    {/* <a href='eri'>#えりおまろすと5先</a>
                                    <a href='eri'>#xp2700</a> */}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="eriomarosuto__item "> 
                    <Link to="/About">
                        <div className="wrap">
                            <figure>
                                <img src={`${process.env.PUBLIC_URL}/img/stage/sume-shi-.jpg`} alt='thumbnail' />
                            </figure> 
                            <div className="contentsTxt">
                                <time dateTime="2022-12-13T22:00">22:00</time>
                                <p>対抗戦の相手募集</p>
                                <div className="tag">
                                    {/* <a href='eri'>#えりおまろすと5先</a>
                                    <a href='eri'>#xp2600</a> */}
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

        </section>
    )
}
