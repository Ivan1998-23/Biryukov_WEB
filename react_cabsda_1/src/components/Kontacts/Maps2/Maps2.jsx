import React,{ Component } from   'react';
import s from './Maps2.module.css';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
class Maps2 extends Component {
    render () {
        return (
          <div className={s.mapa}>
            <Map google={this.props.google} zoom={14}>
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                <InfoWindow onClose={this.onInfoWindowClose}>

              </InfoWindow>
            </Map> 
          </div>
        )
    }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyBcY7q8_JzUwowzEoln9_64tcVi9VTSMxk")
})(Maps2)