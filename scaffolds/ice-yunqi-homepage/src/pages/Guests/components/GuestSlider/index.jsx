import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.scss';

import MOCK_DATA from './data';

export default function GuestSlider() {
  const settings = {
    className: styles.guestSlider,
    autoplay: false,
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 7,
    speed: 500,
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Slider {...settings}>
          {MOCK_DATA.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <div className={styles.itemBox}>
                  <img src={item.avatar} alt="" className={styles.img} />
                  <div className={styles.info}>
                    <h4 className={styles.name}>{item.name}</h4>
                    <p className={styles.job}>{item.job}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

GuestSlider.displayName = 'GuestSlider';
