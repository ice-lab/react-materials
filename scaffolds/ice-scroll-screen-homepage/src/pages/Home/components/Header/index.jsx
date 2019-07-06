import React, { useEffect, useCallback } from 'react';
import ScrollAnim from 'rc-scroll-anim';
import Logo from '@/components/Logo';
import styles from './index.module.scss';

const Link = ScrollAnim.Link;
const EventListener = ScrollAnim.Event;
ScrollAnim.scrollScreen.init({ loop: true });

const NAVS = [
  {
    to: 'page1',
    name: '首页',
  },
  {
    to: 'page2',
    name: '极客派',
  },
  {
    to: 'page3',
    name: '极客活动',
  },
  {
    to: 'page4',
    name: '工作坊',
  },
  {
    to: 'page5',
    name: '赞助商',
  },
];

export default function Header() {
  useEffect(() => {
    // 添加改变窗口事件,可加setTimeout
    EventListener.addEventListener('resize.userResize', barAnimate);
  }, [barAnimate]);

  let dom;
  let barRef;

  const onFocus = (e) => {
    dom = e.target;
    barAnimate();
  };

  const barAnimate = useCallback(() => {
    if (!dom) {
      return;
    }
    const bar = barRef;
    bar.style.left = `${dom.getBoundingClientRect().left}px`;
  });

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Logo />
        <div className={styles.nav}>
          {NAVS.map((nav, index) => {
            return (
              <Link
                key={index}
                className={styles.navList}
                to={nav.to}
                showHeightActive="300"
                onFocus={onFocus}
              >
                {nav.name}
              </Link>
            );
          })}
          <div ref={bar => barRef = bar} className={styles.navBar} />
        </div>
      </div>
    </div>
  );
}
