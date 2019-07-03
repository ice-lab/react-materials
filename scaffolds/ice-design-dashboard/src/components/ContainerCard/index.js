import React from 'react';
import styles from './index.module.scss';

export default function ContainerCard(props) {
  const {
    title,
    extraContent,
    children,
    cardStyle,
    contentStyle,
  } = props;
  return (
    <div className={styles.containerCard} style={{ ...cardStyle }}>
      {title || extraContent ? (
        <div>
          <div className={styles.containerCardHead}>
            {title ? <h3 className={styles.containerCardTitle}>{title}</h3> : null}
            {extraContent}
          </div>
        </div>
      ) : null}

      <div className={styles.containerCardContent} style={{ ...contentStyle }}>
        {children}
      </div>
    </div>
  );
}
