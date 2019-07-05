import React from 'react';
import IceContainer from '@icedesign/container';
import FoundationSymbol from '@icedesign/foundation-symbol';
import styles from './index.module.scss';

export default function Card(props) {
  const { data = [] } = props;
  return (
    <IceContainer className={styles.container}>
      {data.map((item, index) => {
        const hasBorder = index !== data.length - 1 ? styles.border : '';
        return (
          <div className={`${styles.body} ${hasBorder}`} key={index}>
            <FoundationSymbol type={item.icon} className={styles.icon} />
            <div className={styles.info}>
              <p className={styles.label}>{item.label}</p>
              <h4 className={styles.value}>{item.value}</h4>
            </div>
          </div>
        );
      })}
    </IceContainer>
  );
}
