import React from 'react';
import IceImg from '@icedesign/img';
import styles from './index.module.scss';

export default function SingleItem(props) {
  const {
    style,
    className = '',
    active,
    title,
    image,
    price,
    extra,
  } = props;
  return (
    <div
      className={`${className} singleItem`}
      style={{
        height: '230px',
        cursor: 'pointer',
        borderRadius: '4px',
        backgroundColor: active ? '#f4f4f4' : undefined,
        ...style,
      }}
    >
      <div className={styles.sty4}>
        <IceImg
          src={image}
          width={149}
          height={149}
          style={{ margin: '8px' }}
        />
      </div>
      <div className={styles.sty1}>
        {title}
      </div>
      <div className={styles.sty2}>
        {price}
      </div>
      <div className={styles.sty3}>
        {extra}
      </div>
    </div>
  );
}
