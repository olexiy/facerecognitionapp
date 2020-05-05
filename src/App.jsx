/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognnition from './components/FaceRecognnition/FaceRecognnition';

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
};


function App() {
  return (
    <div className="App">
      <Particles params={particlesOptions} className="particles" />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      <FaceRecognnition />
    </div>
  );
}

export default App;
