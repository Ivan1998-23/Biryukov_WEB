import React from   'react';
import s from './Photos.module.css';
import img_photos_1 from './img_photos/vin/1.jpg';
import img_photos_2 from './img_photos/vin/2.jpg';
import img_photos_3 from './img_photos/vin/3.jpg';
import img_photos_4 from './img_photos/vin/4.jpg';
import img_photos_5 from './img_photos/vin/5.jpg';
import img_photos_6 from './img_photos/vin/6.jpg';
import img_photos_7 from './img_photos/vin/7.jpg';
import img_photos_8 from './img_photos/vin/11.jpg';
import img_photos_9 from './img_photos/vin/12.jpg';
import img_photos_11 from './img_photos/img1.jpg';
import img_photos_12 from './img_photos/img2.jpg';
import img_photos_13 from './img_photos/img3.jpg';
import img_photos_14 from './img_photos/img4.jpg';
import img_photos_15 from './img_photos/img5.jpg';
import img_photos_16 from './img_photos/img6.jpg';
import img_photos_17 from './img_photos/img7.jpg';
import img_photos_18 from './img_photos/img8.jpg';
import img_photos_19 from './img_photos/img9.jpg';
import img_photos_10 from './img_photos/img10.jpg';
import img_photos_112 from './img_photos/img01.jpeg';
import img_photos_113 from './img_photos/img13.jpg';
import img_photos_114 from './img_photos/img14.jpg';
import img_photos_115 from './img_photos/img15.jpg';
import img_photos_116 from './img_photos/img16.jpg';
import img_photos_117 from './img_photos/img17.jpg';
import img_photos_118 from './img_photos/img18.jpg';
import img_photos_119 from './img_photos/img19.jpg';
const Photos = (props) => {
    return (
        <div>
          <p className={s.zagolovok}> Фотогалерея</p>
          <p className={s.pid_zagolovok_blue }> Фотографії нашого виноградника: 
            <ul>
              <li>закладка виноградника;</li>
              <li>молодий виноградник.</li>
              <li>Посадка  та інше.</li>
            </ul>            
          </p>
          <div className={s.photo}>
            <img  className={s.im_gleft} src={img_photos_1}/>
            <img  className={s.im_gleft} src={img_photos_2}/>
            <img  className={s.im_gleft} src={img_photos_3}/>
            <img  className={s.im_gleft} src={img_photos_4}/>
            <img  className={s.im_gleft} src={img_photos_5}/>
            <img  className={s.im_gleft} src={img_photos_6}/>
            <img  className={s.im_gleft} src={img_photos_7}/>
            <img  className={s.im_gleft} src={img_photos_8}/>
            <img  className={s.im_gleft} src={img_photos_9}/>
            <img  className={s.im_gleft} src={img_photos_10}/>
            <img  className={s.im_gleft} src={img_photos_11}/>
            <img  className={s.im_gleft} src={img_photos_12}/>
            <img  className={s.im_gleft} src={img_photos_13}/>
            <img  className={s.im_gleft} src={img_photos_14}/>
            <img  className={s.im_gleft} src={img_photos_15}/>
            <img  className={s.im_gleft} src={img_photos_16}/>
            <img  className={s.im_gleft} src={img_photos_17}/>
            <img  className={s.im_gleft} src={img_photos_18}/>
            <img  className={s.im_gleft} src={img_photos_19}/>
            <img  className={s.im_gleft} src={img_photos_112}/>
            <img  className={s.im_gleft} src={img_photos_113}/>
            <img  className={s.im_gleft} src={img_photos_114}/>
            <img  className={s.im_gleft} src={img_photos_115}/>
            <img  className={s.im_gleft} src={img_photos_116}/>
            <img  className={s.im_gleft} src={img_photos_117}/>
            <img  className={s.im_gleft} src={img_photos_118}/>
            <img  className={s.im_gleft} src={img_photos_119}/>
          </div>
        </div>
    )
}
export default Photos;