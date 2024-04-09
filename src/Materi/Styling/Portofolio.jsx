import React from 'react';
import './index.css'; 
import image1 from './Picture/A.png';
import image2 from './Picture/B.png';
import image3 from './Picture/C.png';
import image4 from './Picture/D.png';
import image5 from './Picture/E.png';
import image6 from './Picture/F.png';
import image7 from './Picture/G.png';
import image8 from './Picture/H.png';
import image9 from './Picture/I.png';

const Portofolio = () => (
<header>
      <div id="grid-container">
        <div className="grid-item"><img src={ image1 } alt="my first img" /></div>
        <div className="grid-item"><img src= {image2} alt="Second" /></div>
        <div className="grid-item"><img src={image3} alt="third" /></div>
        <div className="grid-item"><img src={image4} alt="fourth" /></div>
        <div className="grid-item"><img src={image5} alt="fifth" /></div>
        <div className="grid-item"><img src={image6} alt="sixth" /></div>
        <div className="grid-item"><img src={image7} alt="seven" /></div>
        <div className="grid-item"><img src={image8} alt="eight" /></div>
        <div className="grid-item"><img src={image9} alt="nine" /></div>
      </div>
    </header>
);

export default Portofolio;