import React, { useState } from 'react';
import Container from '@icedesign/container';
import { Button, Dialog, Input } from '@alifd/next';
import {
  FormBinderWrapper,
  FormBinder,
  FormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

export default function Index() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({});

  const handleOpenEditPanel = () => {
    setOpen(true);
  };

  const handleCloseEditPanel = () => {
    setOpen(false);
  };

  const submitEdit = () => {
    setOpen(false);
  };

  const formChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <div className={styles.header}>
        <h2 className={styles.title}>账号信息</h2>
        <div>
          <Button onClick={handleOpenEditPanel} type="primary">
              修改
          </Button>
        </div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>账号类型</div>
        <div className={styles.infoDetail}>微淘号·商家</div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>账号名称</div>
        <div className={styles.infoDetail}>好名字都起不到啦</div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>账号头像</div>
        <div className={styles.infoDetail}>
          <img
            src={require('./images/avatar.jpg')}
            className={styles.img}
            alt=""
          />
        </div>
      </div>
      <div className={styles.infoRow}>
        <div className={styles.infoLabel}>账号简介</div>
        <div className={styles.infoDetail}>这个家伙很懒什么都没有留下</div>
      </div>
      <Dialog
        visible={open}
        onOk={submitEdit}
        onClose={handleCloseEditPanel}
        onCancel={handleCloseEditPanel}
        title="修改账户信息"
      >
        <FormBinderWrapper
          value={value}
          onChange={formChange}
        >
          <div>
            <div className={styles.fromItem}>
              <span>账号名称：</span>
              <FormBinder name="name" required max={10} message="不能为空">
                <Input className={styles.input} />
              </FormBinder>
            </div>
            <FormError className={styles.marginLeft} name="name" />
            <div className={styles.fromItem}>
              <span>账号头像：</span>
              <FormBinder name="avatar" required max={10} message="不能为空">
                <Input className={styles.input} />
              </FormBinder>
            </div>
            <FormError className={styles.marginLeft} name="avatar" />
            <div className={styles.fromItem}>
              <span>账号简介：</span>
              <FormBinder name="desc" required max={200} message="不能为空">
                <Input.TextArea
                  hasLimitHint
                  maxLength={200}
                  className={styles.input}
                />
              </FormBinder>
            </div>
            <FormError className={styles.marginLeft} name="desc" />
          </div>
        </FormBinderWrapper>
      </Dialog>
    </Container>
  );
}
