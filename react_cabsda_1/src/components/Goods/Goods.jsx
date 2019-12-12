import React from   'react';
import s from './Goods.module.css';
import img_sort_1 from './valek.jpg';
import img_sort_2 from './sredn.jpg';
import img_sort_3 from './pozd.jpg';
const Goods =  (props) => {
    return (
        <div>
            <div  className={s.zagolovok}>Сорти винограду</div>
            <div className={s.vid_sorta}>
                <a href="" className={s.pid_zagolovok}>"Ранні" сорти винограду:</a>
                <hr />
                <img src={img_sort_1} className={s.img_sort} height="209px"width="155px"/>
                <br />
                <br />
                <p className={s.text}>У розділі зібрані сорти раннього терміну дозрівання (90 - 125 днів від початку розпускання бруньок до споживчої зрілості).</p>
            </div>
            <div className={s.vid_sorta}>
                <br /><br /><br /><br /><br /><br /> <br />
                <a href="" className={s.pid_zagolovok}>"Середні" сорти винограду:</a>
                <hr />
                <img src={img_sort_2} className={s.img_sort} height="150px"width="200px"/>
                <br />
                <br />
                <p className={s.text}>У розділі зібрані сорти середнього терміну дозрівання (125 - 145 днів від початку розпускання бруньок до споживчої зрілості).</p>
            </div>
            <div className={s.vid_sorta}>
                <br /><br /><br /><br />
                <a href="" className={s.pid_zagolovok}>"Пізні" сорти винограду:</a>
                <hr />
                <img src={img_sort_3} className={s.img_sort} height="150px"width="200px"/>
                <br />
                <br />
                <p className={s.text}>У розділі зібрані сорти середнього терміну дозрівання (145 і більше днів від початку розпускання бруньок до споживчої зрілості).</p>
                <br /><br /><br /><br />
            </div>
        </div>
    )
}
export default Goods;