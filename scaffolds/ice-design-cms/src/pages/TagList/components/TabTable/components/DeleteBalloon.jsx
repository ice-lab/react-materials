import React, { useState } from 'react';
import { Button, Balloon } from '@alifd/next';
import PropTypes from 'prop-types';
import styles from './index.module.scss';

export default function DeleteBalloon(props) {
  const [visible, setVisible] = useState(false);

  function handleHide(code) {
    if (code === 1) {
      props.handleRemove();
    }
    setVisible(false);
  }

  function handleVisible(visibleStatus) {
    setVisible(visibleStatus);
  }

  const visibleTrigger = (
    <Button type="secondary" warning>
      删除
    </Button>
  );

  const content = (
    <div>
      <div className={styles.contentText}>确认删除？</div>
      <Button
        id="confirmBtn"
        type="normal"
        warning
        className={styles.mr}
        onClick={() => handleHide(1)}
      >
        确认
      </Button>
      <Button
        id="cancelBtn"
        onClick={() => handleHide(0)}
      >
        关闭
      </Button>
    </div>
  );

  return (
    <Balloon
      trigger={visibleTrigger}
      triggerType="click"
      visible={visible}
      onVisibleChange={handleVisible}
    >
      {content}
    </Balloon>
  );
}


DeleteBalloon.propTypes = {
  handleRemove: PropTypes.func,
};
DeleteBalloon.defaultProps = {
  handleRemove: () => {},
};
