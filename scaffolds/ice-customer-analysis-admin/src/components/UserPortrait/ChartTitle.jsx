/* eslint no-mixed-operators:0 */
import React, { PureComponent } from 'react';
import styles from './index.module.scss';

class ChartTitle extends PureComponent {
  render() {
    return (
      <h5 style={{ ...this.props.style }} className={styles.title}>
        <span className={styles.dot} />
        {this.props.title}
      </h5>
    );
  }
}



export default ChartTitle;
