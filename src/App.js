import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <MyTravelHistory
        destination="Ushguli"
        country="Georgia"
        photo='./photos/ushguli.jpg'
        distance="3.122km"
      />

      <MyTravelHistory
        destination="Tunnel Beach, Dunedin"
        country="New Zealand"
        photo= './photos/IMG_7150.jpg'
        distance="63.66 km"
      />

      <MyTravelHistory
      destination="Tunnel Beach, Dunedin"
        country="New Zealand"
        photo='./photos/IMG_7150.jpg'
        distance="63.66 km"
      />

      </div>
    );
  }
}
export default App;

const MyTravelHistory = ({ destination, country, photo, distance }) => (
  <figure>
    <img className="image" src={photo} />
    <figcaption>
      <blockquote>{destination}</blockquote>
      <blockquote>{country}</blockquote>
      <cite>{distance}</cite>
    </figcaption>
  </figure>
);

