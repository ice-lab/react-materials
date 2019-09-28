import React from 'react';
import PropTypes from 'prop-types';
import IceContainer from '@icedesign/container';
import { Select } from '@alifd/next';
import styles from './index.module.scss';

const { Option } = Select;

export default function Card(props) {
  const { title, options } = props;
  return (
    <IceContainer>
      <div className={styles.cardHead}>
        <h4 className={styles.cardTitle}>{title}</h4>
        <Select size="large" defaultValue="day">
          {options.map((option, index) => {
            return (
              <Option key={index} value={option.value}>
                {option.label}
              </Option>
            );
          })}
        </Select>
      </div>
      {props.children}
    </IceContainer>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
  children: PropTypes.element.isRequired,
};

Card.defaultProps = {
  title: '标题',
  options: [],
};
