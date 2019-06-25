import React, { useState } from 'react';
import { Button, Balloon } from '@alifd/next';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

export default function DeleteBalloon(props) {
  const [balloonVisible, setVisible] = useState(false);

  function handleHide(visible, code) {
    if (code === 1) {
      props.handleRemove();
    }
    setVisible(false);
  }

  function handleVisible(visible) {
    setVisible(visible);
  }
  const visibleTrigger = (
    <Button type="secondary" warning>
      <FormattedMessage id="app.base.table.btn.delete" />
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
        onClick={(visible) => handleHide(visible, 1)}
      >
        确认
      </Button>
      <Button
        id="cancelBtn"
        onClick={(visible) => handleHide(visible, 0)}
      >
        关闭
      </Button>
    </div>
  );

  return (
    <Balloon
      trigger={visibleTrigger}
      triggerType="click"
      visible={balloonVisible}
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

const styles = {
  contentText: {
    padding: '5px 0 15px',
  },
};
