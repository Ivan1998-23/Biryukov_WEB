import React from   'react';
import s from './Kontacts.module.css';
import Maps2 from './Maps2/Maps2';
import Maps from './Maps/Maps';

const Kontacts = (props) => {
    
    return (
        <div className={s.kontact}>
          <p className={s.zagolovok}>  Контакти</p>
          <table>
              <tr>
                <th>Зателефонуйте нам :</th>
                <td width="15px"></td>
                <td>0660601211 Олег, 0979963439 Анна</td>
              </tr>
              <tr>
                <th>Наша електронна пошта :</th>
                <td width="15px"></td>
                <td>Burinkova_anna@gmail.com :</td>
              </tr>
              <tr>
                <th>Наша адреса :</th>
                <td width="15px"></td>
                <td>Миколаївська обл. Веселинівський район, село Кубряки, вул. Садова 69</td>
              </tr>
          </table>
           {/* <Maps2 /> */}
           <Maps />
      </div>
    )
}
export default Kontacts;