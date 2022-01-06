# 一行代码全站进入暗黑模式

```tsx | pure
html {
    filter: invert(1) hue-rotate(180deg);
}

```

- invert()：反相，反向输出图像着色，值为 0%则无变化，值为 0~100%则是线性乘子效果，值为 100%则完全反转。简单理解就是黑变白，白变黑，黑白颠倒。
- hue-rotate()：色相旋转，减弱图像着色，处理非黑白的颜色，值为 0deg 则无变化，值为 0~360deg 则逐渐减弱，值超过 360deg 则相当绕 N 圈再计算剩余的值。简单理解就是冲淡颜色。为了确保主题色调不会改变，将色相旋转声明为 180deg 比较合理。

为了使过渡效果更平滑，可以设置 transition: all 300ms;

## 注意

按照设计原则来说，换肤只针对组件，像一些媒体类型的元素，例如背景、图片、视频等，都是不能直接处理的，需保持其原样。

```tsx | pure
img,
video {
    filter: invert(1) hue-rotate(180deg);
}
```

一些有设置 background 也需要保持不变，可以给有背景的元素加上一个特定类名

```tsx | pure
.exclude {
    	filter: invert(1) hue-rotate(180deg);
}
```

## demo

```tsx
import React from 'react';
import './index.less';

export default () => (
  <div>
    <p>点击开关切换暗黑模式</p>
    <input class="yt-btn yt-ios-switch" type="checkbox" />
    <div class="yt-black-mode">
      <p>我是一个小方块，我是一个小方块，我是一个小方块，我是一个小方块</p>
      <img
        width="200px"
        src="https://cdn.stocksnap.io/img-thumbs/960w/snow-winter_KJIHHX3U7X.jpg"
      />
    </div>
  </div>
);
```
