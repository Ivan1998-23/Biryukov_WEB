import React,{ Component} from 'react';
import fut_css from  './Futer.module.css';

const Futer = () => {
 
    return (
    <div className={fut_css.futer}>         
      <div className={fut_css.inf}> 
      <p>© 2019, Kursova Biryukov<br></br>
      Сайт розробила компанія BiryukNet для підтримки малих бізнесів </p></div>
    </div>
    )
}
export default Futer;