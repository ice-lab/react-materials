import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IceContainer from '@icedesign/container';
import { Select } from '@alifd/next';
import styles from './index.module.scss';

const { Option } = Select;

export default class Card extends Component {
  static displayName = 'Card';

  static propTypes = {
    title: PropTypes.string,
    options: PropTypes.array,
    children: PropTypes.element.isRequired,
  };

  static defaultProps = {
    title: '标题',
    options: [],
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, options } = this.props;
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
        {this.props.children}
      </IceContainer>
    );
  }
}
