import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'yt-animation',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  description: '动画示例库',
  mode: 'site',
  navs: [
    // { title:'CSS动画',path:'/' },
    { title: 'JS动画', path: '/js' },
    // { title:'组件', path:'/components' },
    { title: 'CSS样式', path: '/style' },
  ],
  menus: {
    '/': [{ title: '首页', path: '/' }],
    '/js': [
      // { title:'循环播放一组图片', path:'/js/marquee' },
      { title: '鼠标点击出现小图片', path: '/js/click' },
      { title: '点赞收藏', path: '/js/like' },
    ],
    '/style': [
      { title: '灰度模式', path: '/style/gray' },
      { title: '暗黑模式', path: '/style/black' },
    ],
  },
  // more config: https://d.umijs.org/config
});
