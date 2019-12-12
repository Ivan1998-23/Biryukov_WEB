import React,{ Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Content from './components/Content/Content';
import {BrowserRouter, Route} from "react-router-dom";
import Kontacts from './components/Kontacts/Kontacts';
import Delivery from './components/Delivery/Delivery';
import Futer from './components/Futer/Futer';
import Goods from './components/Goods/Goods';
import Photos from './components/Photos/Photos';

const App = (props) => {
  return(
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
            <Route path='/content' component={Content}/>
            <Route path='/delivery' component={Delivery}/>
            <Route path='/goods' component={Goods}/>
            <Route path='/kontacts' component={Kontacts}/>
            <Route path='/photos' component={Photos}/>            
        </div>
        <Futer />
      </div>
    </BrowserRouter>
  )
}
export default ( App)