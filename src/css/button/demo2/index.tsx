import React from 'react';
import './index.less';

const Demo = () => {
  return (
    <button className="m-button-demo2" data-text="hover me">
      <div className="btn-borders">
        <div className="border-top"></div>
        <div className="border-right"></div>
        <div className="border-bottom"></div>
        <div className="border-left"></div>
      </div>
      <span className="text"> hover me</span>
    </button>
  );
};

export default Demo;
