import React, { Component } from 'react';
import { Button, Balloon } from '@alifd/next';
import PropTypes from 'prop-types';
import styles from  '../index.module.scss'

export default class DeleteBalloon extends Component {
  static propTypes = {
    handleRemove: PropTypes.func,
  };

  static defaultProps = {
    handleRemove: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handleHide = (visible, code) => {
    if (code === 1) {
      this.props.handleRemove();
    }
    this.setState({
      visible: false,
    });
  };

  handleVisible = (visible) => {
    this.setState({ visible });
  };

  render() {
    const visibleTrigger = (
      <Button size="small" type="secondary" warning>
        删除
      </Button>
    );

    const content = (
      <div>
        <div className={styles.contentText}>确认删除？</div>
        <Button
          id="confirmBtn"
          size="small"
          type="normal"
          warning
          className={styles.delbtn}
          onClick={(visible) => this.handleHide(visible, 1)}
        >
          确认
        </Button>
        <Button
          id="cancelBtn"
          size="small"
          onClick={(visible) => this.handleHide(visible, 0)}
        >
          关闭
        </Button>
      </div>
    );

    return (
      <Balloon
        trigger={visibleTrigger}
        triggerType="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisible}
      >
        {content}
      </Balloon>
    );
  }
}
