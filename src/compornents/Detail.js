import React from 'react'
import "../scss/_compornents/detail.scss"

export const Detail = () => {


    const doc = document;
    let flg=false;
    
    function openDetail(){
      const detailItem = doc.querySelectorAll(".detailItem");
      const AppBtn = doc.querySelector(".AppBtn");

      console.log(detailItem);
      detailItem.forEach((e,i)=>{
        console.log();
        if (flg) {
          flg=false;
          detailItem[i].classList.remove("open");
          AppBtn.classList.remove("add");
        } else {
          flg=true;
          detailItem[i].classList.add("open");
          AppBtn.classList.add("add");
          }
          });

  }
  


    // open
  return (
    <div className='container'>
      <div className='detailItem' onClick={openDetail}>
        <div id='detailText' className='text'>
          <div className="icon">
            <figure></figure>
            <p className="name">suda</p>
            <p className="friend-cord">フレンドコード:3044-1210-1751</p>
          </div>
          <h3 className="ttlh">〇〇したいスプラ勢集まれ！深夜のイカタコマッチ</h3>
          <div className="tag"></div>
          <p className="comment">ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。</p>
          <div className='AppBtn'>
            <button type='submit'>応募する</button>
          </div>
        </div>
        <figure className='Img'>
          <img src="https://source.unsplash.com/random/" alt='thumbnail' />
        </figure>
      </div>

      <div className='detailItem' onClick={openDetail}>
        <div id='detailText' className='text'>
          <div className="icon">
            <figure></figure>
            <p className="name">suda</p>
            <p className="friend-cord">フレンドコード:3044-1210-1751</p>
          </div>
          <h3 className="ttlh">〇〇したいスプラ勢集まれ！深夜のイカタコマッチ</h3>
          <div className="tag"></div>
          <p className="comment">ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。ここに詳細のコメントを掲載する。</p>
          <div className='AppBtn'>
            <button type='submit'>応募する</button>
          </div>
        </div>
        <figure className='Img'>
          <img src="https://source.unsplash.com/random/" alt='thumbnail' />
        </figure>
      </div>




    </div>

    
  )
}
export default Detail;


