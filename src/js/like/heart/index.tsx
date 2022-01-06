import React, { useState, useEffect } from 'react';
import './index.less';

interface IProps {
  /**
   * 默认值
   * @default false
   */
  defaultValue?: boolean;
  /**
   * 值
   * @default false
   */
  value?: boolean;
  /**
   * 状态变化时的回调函数
   * @default false
   */
  onChange?: Function;
  className?: string;
}
const Heart = (props: IProps) => {
  const { defaultValue = false, value = false, onChange, className = '', ...res } = props;
  const [current, setCurrent] = useState(defaultValue);
  const [defclass, setDefclass] = useState(defaultValue ? 'my-heart-active' : '');
  const [load, setLoad] = useState(false); // 正在操作

  useEffect(() => {
    setCurrent(value);
  }, [value]);

  const onClick = () => {
    if (load) return;
    setLoad(true);

    // 调用业务接口
    setTimeout(() => {
      setLoad(false);
    }, 1000);

    // 调用业务接口成功后
    setDefclass(current ? '' : 'my-heart-animation');
    onChange && onChange(!current);
    setCurrent(!current);
  };

  return (
    <span className="my-heart">
      <span
        title="喜欢"
        className={`${defclass} my-heart-heart ${className}`}
        {...res}
        onClick={onClick}
      ></span>
    </span>
  );
};
export default Heart;
