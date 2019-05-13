import React, { Component } from 'react';
import TextLoop from 'react-text-loop';
import Title from './Title';
import styles from './index.module.scss';

export default class TopList extends Component {
  static displayName = 'TopList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ height: '33%' }}>
        <Title data={this.props.title} />
        <ul className={styles.list}>
          {this.props.data.map((data, index) => {
            return (
              <TextLoop key={index}>
                <li className={styles.item}>
                  <span className={styles.idx}>No.{index + 1}</span>
                  <span className={styles.name}>{data.name}</span>
                </li>
              </TextLoop>
            );
          })}
        </ul>
      </div>
    );
  }
}

