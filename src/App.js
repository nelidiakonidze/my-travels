import React, { Component } from 'react';
import './App.css';

const Title = () => {
  return (
    <header className="header1">
      <h1>My travel photo gallery</h1>
    </header>
  )
};

/*
  I put (props) as the parameter because then I dont have to worry
  if I want to add or change completly its values.

  And then I destructured it into multiple variables.
*/
const MyTravelHistory = (props) => {
  const { destination, country, photo, distance } = props;
  return (
    <section>
      <img className="image" src={photo} />
      <div>
        <p>{destination}</p>
        <p>{country}</p>
        <p>{distance}</p>
      </div>
    </section>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <div className="container">
          <MyTravelHistory
            destination="Ushguli"
            country="Georgia"
            photo='./photos/ushguli.jpg'
            distance="3.122km"
          />

          <MyTravelHistory
            destination="Tunnel Beach, Dunedin"
            country="New Zealand"
            photo='./photos/IMG_7150.jpg'
            distance="63.66 km"
          />

          <MyTravelHistory
            destination="La Barceloneta, Barcelona, Home"
            country="Spain"
            photo='./photos/home.jpg'
            distance="1873 km"
          />

          <MyTravelHistory
            destination="Somewhere in Rome"
            country="Italy"
            photo='./photos/rome.jpg'
            distance="1509 km"
          />
        </div>

      </div>
    );
  }
}
export default App;


