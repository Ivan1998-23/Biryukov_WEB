import React from   'react';
import s from './Delivery.module.css';
import img_NP from './np1.png';
import img_Ukr from './ukr.png';

const Delivery =  (props) => {
    return (
        <div >
           <div  className={s.zagolovok}>Доставка</div>
           <div className={s.vid_sorta}>
                <div className={s.pid_zagolovok}>1. ЗАМОВЛЕННЯ І ОПЛАТА:</div>
                <hr />                          
                <p className={s.pid_zagolovok_blue}>Ви можете замовити саджанці винограду самостійно:
                <ul>
                    <li>Зателефонувавши нам в будь-який день тижня по телефону 066-060-12-11 (Олег), 097-996-34-39 (Анна).</li>
                    <li>Відправивши замовлення по електронній пошті <b>Guiltyсompany@gmail.com.</b></li>
                </ul>
                У разі самостійного приїзду і здійснення покупки, оплата товару відбувається на місці.
                </p>
            </div>
            <div className={s.vid_sorta}>
                <div className={s.pid_zagolovok}>2. ДОСТАВКА В МІСТА УКРАЇНИ:</div>
                <hr />                          
                <p className={s.pid_zagolovok_blue}>Ми можемо доставити замовлення однією зі служб доставки зазначених нижче:
                <p>
                        <table>
                        <tr>
                            <td><a href="https://novaposhta.ua/" target="_blank"> <img src={img_NP} className={s.img_sort} height="70px"width="200px"/></a></td>
                            <td>Доставка оплачується покупцем перевізнику за фактом отримання товару.</td>
                        </tr>
                        <tr>
                            <td><a href="https://ukrposhta.ua/" target="_blank"> <img src={img_Ukr} className={s.img_sort} height="120px"width="180px"/></a></td>
                            <td>Доставка оплачується покупцем перевізнику за фактом отримання товару.</td>
                        </tr>
                    </table>
                    
                    <p >Відправляєме Вами замовлення страхується на 100%, вартість страховки включається в ціну доставки. Так що Ви можете бути спокійні за збереження замовлення. При пошкодженні або втраті вантажу повну матеріальну відповідальність несе служба доставки.</p>
                </p>
                </p>
            </div>
        </div>
    )
}
export default Delivery ;