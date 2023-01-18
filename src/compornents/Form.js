import React from 'react'
import "../scss/_compornents/form.scss";
import { Link } from 'react-router-dom';



export const Form = () => {
    return (
            <div className='container'>
                <h2>募集をする</h2>
                <form className='form'> 
                    <div className="form__thum">
                        <label className="form__thum-item">
                            <input type="file" name='file'/>ファイルを選択
                        </label>
                    </div>

                    <div className="form__item">
                        <label for="title">タイトル</label>
                        <input type="text" placeholder="ここにタイトルを入力" />
                    </div>

                    <div className="form__item">
                        <label for="mode">対戦モード</label>
                        <select className="mode__select" name="mode" 
                            // style={{
                            //     background: "url(img/icon_down.svg)",
                            //     backgroundRepeat:"no-repeat",
                            //     backgroundPosition:" 355px center",
                            //     backgroundSize:" 28px 28px",
                            //     cursor:"pointer",
                            // }}
                        > 
                            <option value="">対戦モードを選択する</option>
                            <option value="asari">ガチアサリ</option>
                            <option value="area">ガチエリア</option>
                            <option value="yagura">ガチヤグラ</option>
                            <option value="hoko">ガチホコ</option>
                        </select>
                    </div>

                    <div className="form__item">
                        <label for="time">開始予定日</label>
                        <input type="dateTime-local" placeholder="開始予定時刻を入力"/>
                    </div>

                    <div className="form__item">
                        <label for="xp">xp </label>
                        <input type="text" placeholder="自チームの平均xpを入力" />
                    </div>

                    <div className="form__item">
                        <label for="other">その他</label>
                        <textarea name="other" cols="30" rows="10" wrap="hard"></textarea>
                    </div>

                    <div className='btn'>
                        <button><Link to="/send">募集を投稿する</Link></button>
                    </div>
                </form>
            </div>
    )
}

export default Form;