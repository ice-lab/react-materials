import React, { useState, useEffect } from 'react';
import { Dialog, Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import { enquireScreen } from 'enquire-js';
import styles from './index.module.scss';

export default function SuccessDialog(props) {
  const [visible, setVisible] = useState(false);
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    enquireScreenRegister();
  }, []);

  const enquireScreenRegister = () => {
    const mediaCondition = 'only screen and (max-width: 720px)';

    enquireScreen((mobile) => {
      setMobile(mobile);
    }, mediaCondition);
  };

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
  };

  console.log(isMobile);
  return (
    <IceContainer>
      <Dialog
        className={`${styles.dialogStyle}  success-dialog`} 
        
        autoFocus={false}
        footer={false}
        title="认证申请已提交"
        {...props}
        onClose={hideDialog}
        visible={visible}
      >
        <div className={styles.dialogContent}>
          <img
            className={styles.icon}
            src="//img.alicdn.com/tfs/TB1GOHLXyqAXuNjy1XdXXaYcVXa-52-52.png"
            srcSet="//img.alicdn.com/tfs/TB1h_K_b4rI8KJjy0FpXXb5hVXa-104-104.png"
            alt="提示图标"
          />
          <p className={styles.text}>我们将在5-7个工作日内完成审核，请耐心等待</p>
        </div>
      </Dialog>
      <Button type="primary" onClick={showDialog}>
        显示 Dialog
      </Button>
    </IceContainer>
  );
}
