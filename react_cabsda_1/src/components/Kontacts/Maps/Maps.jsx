import React,{ Component } from   'react';
import s from './Maps.module.css';

// const Maps = () => {
class Maps extends Component {

  componentDidMount() {
    this.renderMap()
  }
    renderMap = () => {
       loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBcY7q8_JzUwowzEoln9_64tcVi9VTSMxkY&callback=initMap")
       window.initMap = this.initMap
    }
    initMap = () => {
        var map = new window.google.maps.Map(document.getElementById(s.map), {
          center: {lat: 47.086618,lng:  31.328016 },
          zoom: 11
        })
    };  
    render () {
        return (
            <main>
              <div id={s.map}></div>
            </main>
        )
    }
}
function loadScript(url) {
  var index = window.document.getElementsByTagName("script")  [0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true 
  index.parentNode.insertBefore(script, index   )
}
export default Maps;