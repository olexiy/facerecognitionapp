import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => (
  <div className="ma4 mt0">
    <Tilt className="Tilt" options={{ max: 25 }} style={{ height: 150, width: 150 }}>
      <div className="Tilt-inner pa3"><img style={{ paddingTop: '5px' }} src={brain} alt="brain logo" /></div>
    </Tilt>
  </div>
);

export default Logo;