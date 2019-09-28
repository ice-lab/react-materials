import React, { useState } from 'react';
import { Button, Balloon } from '@alifd/next';
import PropTypes from 'prop-types';

export default function DeleteBalloon(props) {
  const [isVisible, setVisible] = useState(false);

  const handleHide = (visible, code) => {
    if (code === 1) {
      props.handleRemove();
    }
    setVisible(false);
  };

  const handleVisible = (visible) => {
    setVisible(visible);
  };

  const visibleTrigger = (
    <Button type="secondary" warning>
      删除
    </Button>
  );

  const content = (
    <div>
      <div style={styles.contentText}>确认删除？</div>
      <Button
        id="confirmBtn"
        type="normal"
        warning
        style={{ marginRight: '5px' }}
        onClick={visible => handleHide(visible, 1)}
      >
        确认
      </Button>
      <Button
        id="cancelBtn"
        onClick={visible => handleHide(visible, 0)}
      >
        关闭
      </Button>
    </div>
  );

  return (
    <Balloon
      trigger={visibleTrigger}
      triggerType="click"
      visible={isVisible}
      onVisibleChange={handleVisible}
    >
      {content}
    </Balloon>
  );
}

const styles = {
  contentText: {
    padding: '5px 0 15px',
  },
};

DeleteBalloon.propTypes = {
  handleRemove: PropTypes.func,
};

DeleteBalloon.defaultProps = {
  handleRemove: () => {},
};
