import React,{ Component} from 'react';
import { Slide } from 'react-slideshow-image';
import './Sliders.css';
import im1 from './1.jpg';
import im2 from './2.jpg';
import im3 from './3.jpg';
import im4 from './4.jpg';

const properties = {
    duration: 4000,
    transitionDuration: 800,
    infinite: true,
    indicators: true,
    arrows: true,
    }
const Slideshow = () => {
    return (
        <div className="containerSlide">
            <Slide {...properties}>
                <div className="each-slide">
                    <div>
                        <img src={im1} alt="im1"/>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                      <img src={im2} alt="im2"/>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                      <img src={im3} alt="im3"/>
                    </div>
                </div>
                <div className="each-slide">
                    <div>
                      <img src={im4} alt="im4"/>
                    </div>
                </div>
            </Slide>
        </div>
    )
}
export default Slideshow;