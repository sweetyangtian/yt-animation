import React from 'react';
import img1 from '../../../img/1.jpg';
import img2 from '../../../img/2.jpg';
import img3 from '../../../img/3.jpg';
import img4 from '../../../img/4.jpg';
import img5 from '../../../img/5.jpg';
import './index.less';

const imgList = [img1, img2, img3, img4, img5, img1];

const Card = () => {
  return (
    <div className="m-card-demo3">
      {imgList.map((item, index) => (
        <div key={index} className="card-item" style={{ backgroundImage: `url(${item})` }}>
          <div className="mask">
            <h2>标题哇</h2>
            <p>
              描述哇描述哇描述哇描述哇描述哇描述哇描述哇描述哇描述哇描述哇描述哇描述哇描述哇描述哇描述哇
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
