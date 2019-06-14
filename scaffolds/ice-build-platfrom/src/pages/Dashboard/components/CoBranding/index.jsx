import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default class CoBranding extends Component {
  static displayName = 'CoBranding';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data = [
      require('./images/TB14.LkieuSBuNjy1XcXXcYjFXa-226-78.png'),
      require('./images/TB1zdJliDtYBeNjy1XdXXXXyVXa-184-76.png'),
      require('./images/TB1fdJliDtYBeNjy1XdXXXXyVXa-208-78.png'),
      require('./images/TB1m7veieuSBuNjSsziXXbq8pXa-262-62.png'),
      require('./images/TB19a2XikyWBuNjy0FpXXassXXa-244-68.png'),
      require('./images/TB1SpDwiamWBuNjy1XaXXXCbXXa-242-46.png'),
    ];
    return (
      <IceContainer className={styles.container}>
        <h4 className={styles.cardTitle}>云构建提供技术支持</h4>
        <div className={styles.brandContent}>
          <Row gutter="10">
            {data.map((url, index) => {
              return (
                <Col l="4" key={index}>
                  <a href="#" className={styles.brandLink}>
                    <img src={url} className={styles.brandLogo} alt="" />
                  </a>
                </Col>
              );
            })}
          </Row>
        </div>
      </IceContainer>
    );
  }
}

