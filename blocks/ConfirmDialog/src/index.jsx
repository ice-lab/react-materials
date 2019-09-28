import React, { useState, useEffect } from 'react';
import { Dialog, Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import { enquireScreen } from 'enquire-js';
import styles from './index.module.scss';

export default function Index(props) {
  const [visible, setVisble] = useState(false);
  const [isMobile, setMobile] = useState(false);

  const enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      setMobile(mobile);
    }, mediaCondition);
  };

  useEffect(() => {
    enquireScreenRegister();
  }, []);


  const showDialog = () => {
    setVisble(true);
  };

  const hideDialog = () => {
    setVisble(false);
  };

  const dialogStyle = {
    width: isMobile ? '320px' : '640px',
    height: isMobile ? 'auto' : '340px',
  };

  return (
    <IceContainer>
      <Dialog
        className="confirm-dialog"
        style={{ ...dialogStyle }}
        autoFocus={false}
        footerAlign="center"
        title="删除提示"
        onOk={hideDialog}
        onCancel={hideDialog}
        onClose={hideDialog}
        {...props}
        visible={visible}
      >
        <div className={styles.dialogContent}>
          <img
            className={styles.icon}
            src="//img.alicdn.com/tfs/TB1PTrfb_nI8KJjy0FfXXcdoVXa-52-52.png"
            srcSet="//img.alicdn.com/tfs/TB1c5feb46I8KJjy0FgXXXXzVXa-104-104.png"
            alt=""
          />
          <p className={styles.text}>
            {props.text ? props.text : '你确定要删除此条内容吗？'}
          </p>
        </div>
      </Dialog>
      <Button type="primary" onClick={showDialog}>
        显示 Dialog
      </Button>
    </IceContainer>
  );
}
