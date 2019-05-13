import React, { Component } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.scss';

import MOCK_DATA from './data';

export default class GuestSlider extends Component {
  static displayName = 'GuestSlider';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const settings = {
      className: 'guest-slider',
      autoplay: false,
      centerMode: true,
      infinite: true,
      centerPadding: '0',
      slidesToShow: 7,
      speed: 500,
    };
    return (
      <div className="container">
        <div className="content">
          <Slider {...settings}>
            {MOCK_DATA.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="itemBox">
                    <img src={item.avatar} alt="" className="img" />
                    <div className="info">
                      <h4 className="name">{item.name}</h4>
                      <p className="job">{item.job}</p>
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
}