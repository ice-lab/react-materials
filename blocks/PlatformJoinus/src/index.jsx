import React, { Component } from "react";
import { Button } from "@alifd/next";
import styles from  "./index.module.scss";

export default class PlatformJoinUs extends Component {
  static displayName = "PlatformJoinUs";

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div>
          <div className={styles.titleWrapper}>
            <h2 className={styles.title}>现在就加入我们</h2>
            <p>
              在人工智能将替代一切的未来
              <br />
              唯有内容的创作无可替代
            </p>
          </div>
          <div className={styles.buttons}>
            <Button
              className={styles.secondaryButton}
              type="normal"
              component="a"
              href="your-url"
            >
              开通
            </Button>
            <Button
              className={styles.primaryButton}
              type="primary"
              component="a"
              href="your-url"
            >
              登录
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
