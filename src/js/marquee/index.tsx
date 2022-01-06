import React from 'react';
// import { Button } from 'antd';
import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';

import useMarquee from './useMarquee';
export default function IndexPage() {
  const { MarqueeWrapper } = useMarquee({ imgList: [img1, img2, img3] });

  return <MarqueeWrapper style={{ height: '600px' }} />;
}
