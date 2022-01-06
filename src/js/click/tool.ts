function insertStyle() {
  const cssString = `
        @keyframes clickAnimation {
            0%,
            100% {
                opacity: 0;
            }

            5% {
                opacity: 1;
            }

            100% {
                transform: translateY(-50px);
            }
        }
    `;

  const doc = document;
  let style = doc.createElement('style');
  style.type = 'text/css';
  style.innerHTML = cssString;
  doc.getElementsByTagName('head')[0].appendChild(style);
}

export default function clickAnimation(
  event: React.MouseEvent,
  props: {
    parentId: string;
    imgs: string[];
    noAnimationDomId?: string;
  },
) {
  const { parentId, imgs = [], noAnimationDomId } = props;
  insertStyle();

  let index = Math.floor(Math.random() * imgs.length);
  let parent = document.getElementById(parentId) || document.body;
  let noClickDom = noAnimationDomId ? document.getElementById(noAnimationDomId) : null;
  let x = event.pageX,
    y = event.pageY;

  // 屏蔽区不显示动画
  if (
    noClickDom &&
    x > noClickDom.offsetLeft &&
    x < noClickDom.offsetLeft + noClickDom.offsetWidth &&
    y > noClickDom.offsetTop &&
    y < noClickDom.offsetTop + noClickDom.offsetHeight
  ) {
    return;
  }

  // 区域外不显示动画
  if (
    parent &&
    (x < parent.offsetLeft ||
      x > parent.offsetLeft + parent.offsetWidth ||
      y < parent.offsetTop ||
      y > parent.offsetTop + parent.offsetHeight)
  ) {
    return;
  }

  let newEle = document.createElement('img');
  newEle.style.width = '30px';
  newEle.style.height = '30px';
  newEle.style.userSelect = 'none';
  newEle.style.position = 'absolute';
  newEle.style.zIndex = '99';
  newEle.style.animation = 'clickAnimation 1s';
  newEle.src = imgs[index] || imgs[0];

  parent.appendChild(newEle);

  newEle.addEventListener('animationend', function () {
    parent.removeChild(newEle);
  });

  newEle.style.left = x - newEle.clientWidth / 2 + 'px';
  newEle.style.top = y - newEle.clientHeight + 'px';
}
