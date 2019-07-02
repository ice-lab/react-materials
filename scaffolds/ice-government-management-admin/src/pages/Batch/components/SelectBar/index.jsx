import React, { useState } from 'react';
import { Icon } from '@alifd/next';
import cx from 'classnames';
import styles from './index.module.scss';

const mockData = [
  {
    icon: 'success',
    title: '批量操作(首次分案)',
    instrument: '对一批待分案案件进行分案',
  },
  {
    icon: 'refresh',
    title: '批量操作(普通阶段分案)',
    instrument: '对一批待分案案件进行分案',
  },
  {
    icon: 'upload',
    title: '批量申请延期',
    instrument: '对一批办理案件进行批量申请延期',
  },
];

export default function SelectBar() {
  const [selectedCard, setSelectedCard] = useState(0);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <div className={styles.container}>
      {mockData.map((item, index) => {
        return (
          <div
            className={cx(
              styles.card,
              selectedCard === index
                ? styles.selectedCard
                : styles.unselectedCard
            )}
            key={index}
            onClick={() => handleCardClick(index)}
          >
            <h2
              className={
                selectedCard === index
                  ? styles.selectedIcon
                  : styles.icon
              }
            >
              <Icon type={item.icon} size="large" />
            </h2>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.instrument}>说明: {item.instrument}</p>
          </div>
        );
      })}
    </div>
  );
}
