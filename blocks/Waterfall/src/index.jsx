import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import IceContainer from '@icedesign/container';
import AutoResponsive from 'autoresponsive-react';
import data from './data';
import './index.scss';

export default function Waterfall(props) {
  const [containerWidth, setContainerWidth] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => {
        setContainerWidth(containerRef.current.clientWidth);
      },
      false
    );
  }, []);

  const getAutoResponsiveProps = () => {
    return {
      itemMargin: 10,
      containerWidth: containerWidth || document.body.clientWidth,
      itemClassName: 'item',
      gridWidth: 100,
      transitionDuration: '.5',
    };
  };

  return (
    <IceContainer>
      <div className="waterfall-panel">
        <AutoResponsive ref={containerRef} {...getAutoResponsiveProps()}>
          {props.data.map((i, index) => {
            const style = {
              width: i.w === 'w1' ? 190 : 390,
              height: i.w === 'w1' ? 240 : 490,
            };
            return (
              <a
                key={index}
                href="#"
                className={`${i.w} album item`}
                style={style}
              >
                <img
                  className="a-cont"
                  src={require('./images/subjectc10585.jpg')}
                  alt="cont"
                />
                <img className="a-cover" src={i.src} alt="cover" />
                <p className="a-layer">
                  <span className="al-brand">{i.brand}</span>
                  <span className="al-title">{i.title}</span>
                  <span className="al-count">{i.count}件商品</span>
                </p>
              </a>
            );
          })}
        </AutoResponsive>
      </div>
    </IceContainer>
  );
}

Waterfall.propTypes = {
  data: PropTypes.array,
};

Waterfall.defaultProps = {
  data,
};
