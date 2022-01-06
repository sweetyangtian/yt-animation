/**
 * 循环跑马灯
 * @param {Object} params 跑马灯配置参数
 *      @param {Number} speed 滚动速度（每间隔内平移的像素px）
 *      @param {Number} delay 时间间隔（单位: ms）
 *      @param {string[]} imgList
 *
 * @return
 *  @param {ReactElement} MarqueeWrapper 跑马灯最外层div
 */

import React, { useRef, useEffect, useCallback } from 'react';

const _move = (dom: any, order: number, { speed, offset }: { speed: number; offset: number }) => {
  const width = dom.clientWidth; // 每一组的宽度
  // 计算该节点translateX坐标
  // @ts-ignore
  const coord = document.defaultView.getComputedStyle(dom, null).transform.split(',');
  const x = coord[coord.length - 2] || 0;
  const newX = x <= -width * (order + 1) ? -width * (order - 1) : x;
  // 设置该节点的translateX坐标
  // @ts-ignore
  dom.style.transform = `translate(${newX - speed - offset}px, 0)`;
};

function useMarquee({ speed = 1, delay = 10, imgList = [] } = {}) {
  let timer = useRef(); // 计时器
  const WrapperRef = useRef(); // 跑马灯的最外层div的ref

  const startTimer = () => (timer.current = setInterval(() => move(), delay));

  const stopTimer = () => {
    clearInterval(timer.current);
    timer.current = null;
  };

  // 平移前后两组dom节点
  const move = useCallback(
    (offset = 0) => {
      if (WrapperRef.current === null) return;
      // @ts-ignore
      const domPrev = WrapperRef.current.firstChild;
      // @ts-ignore
      const domNext = WrapperRef.current.lastChild;
      _move(domPrev, 0, { speed, offset });
      _move(domNext, 1, { speed, offset });
    },
    [speed],
  );

  // 开始转动
  useEffect(() => {
    startTimer();

    return () => {
      stopTimer();
    };
  }, []);

  // 跑马灯的最外层div
  const MarqueeWrapper = (props: any) => {
    const { className, style } = props;
    return (
      // @ts-ignore

      <div
        style={{ display: 'flex', width: '100%', height: '100%', overflow: 'hidden', ...style }}
        ref={(dom) => (WrapperRef.current = dom)}
        className={className}
      >
        <div style={{ flexShrink: 0, width: '100%', height: '100%', display: 'flex' }}>
          {(imgList || []).map((item, index) => (
            <div
              style={{
                backgroundImage: `url(${item})`,
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
              }}
              key={index}
            />
          ))}
        </div>
        <div style={{ flexShrink: 0, width: '100%', height: '100%', display: 'flex' }}>
          {(imgList || []).map((item, index) => (
            <div
              style={{
                backgroundImage: `url(${item})`,
                backgroundSize: 'cover',
                width: '100%',
                height: '100%',
              }}
              key={index}
            />
          ))}
        </div>
      </div>
    );
  };

  return { MarqueeWrapper };
}

export default useMarquee;
