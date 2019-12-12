import React,{ Component} from 'react';
import hed from './Header.module.css';
const Header = () => {
    return (
        <header className={hed.header}>
             <p className={hed.nazva}>Burinkov's A/O grape company</p>
             <p className={hed.inf}>Найкращі сорти столового винограду від виробника</p>
       </header>
    )
}
export default Header;