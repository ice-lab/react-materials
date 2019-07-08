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
      className={`${className} ${styles.singleItem}`}
      style={{
        ...style,
        width: '165px',
        height: '230px',
        cursor: 'pointer',
        borderRadius: '4px',
        margin: '0 auto',
        backgroundColor: active ? '#f4f4f4' : undefined,
      }}
    >
      <IceImg
        src={image}
        width={149}
        height={149}
        style={{ margin: '8px' }}
      />
      <div
        style={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          color: '#999',
          fontSize: '12px',
          lineHeight: '18px',
          margin: '0 14px',
        }}
      >
        {title}
      </div>
      <div
        style={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          color: '#999',
          lineHeight: '18px',
          fontSize: '12px',
          margin: '0 14px',
        }}
      >
        {price}
      </div>
      <div
        style={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          lineHeight: '18px',
          color: '#C0C0C0',
          fontSize: '12px',
          margin: '0 14px',
        }}
      >
        {extra}
      </div>
    </div>
  );
}
