/**
 * 点击鼠标出现小图片
 */
import React, { useEffect } from 'react';
import clickAnimation from './tool';

interface IProps {
  imgs: string[];
  children: React.ReactDOM;
}

export default (props: IProps) => {
  const { imgs = [], children } = props;

  const animation = (event: any) =>
    clickAnimation(event, { parentId: 'my-click-animation-container', imgs });

  useEffect(() => {
    document.documentElement.addEventListener('click', animation);

    return () => {
      document.documentElement.removeEventListener('click', animation);
    };
  }, []);

  return <div id="my-click-animation-container">{children}</div>;
};
