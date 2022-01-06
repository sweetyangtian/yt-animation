import React, { useEffect } from 'react';
import Click from './click';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';

export default () => (
  <Click imgs={[img1, img2, img3]}>
    <div style={{ width: '100%', height: '200px', background: '#efefef' }} />
  </Click>
);
