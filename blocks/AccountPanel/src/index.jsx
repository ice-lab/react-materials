import React, { Component } from 'react';
import Container from '@icedesign/container';
import { Button, Dialog, Input, Upload } from '@alifd/next';
import styles from './index.module.scss';
import {
  FormBinderWrapper,
  FormBinder,
  FormError,
} from '@icedesign/form-binder';

export default class Index extends Component {
  static displayName = 'Index';

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleOpenEditPanel = () => {
    this.setState({ open: true });
  };

  handleCloseEditPanel = () => {
    this.setState({ open: false });
  };

  formChange = (value) => {
    console.log(value);
  };

  render() {
    return (
      <Container>
        <div className={styles.header}>
          <h2 className={styles.title}>账号信息</h2>
          <div>
            <Button onClick={this.handleOpenEditPanel} type="primary">
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
            <img src={require('./images/avatar.jpg')} className={styles.headImg} />
          </div>
        </div>
        <div className={styles.infoRow}>
          <div className={styles.infoLabel}>账号简介</div>
          <div className={styles.infoDetail}>这个家伙很懒什么都没有留下</div>
        </div>
        <Dialog
          visible={this.state.open}
          onOk={this.submitEdit}
          onClose={this.handleCloseEditPanel}
          onCancel={this.handleCloseEditPanel}
          title="修改账户信息"
        >
          <FormBinderWrapper
            value={this.state.value}
            onChange={this.formChange}
          >
            <div>
              <div className={styles.fromItem}>
                <span>账号名称：</span>
                <FormBinder name="name" required max={10} message="不能为空">
                  <Input className={styles.nameInput} />
                </FormBinder>
              </div>
              <FormError className={styles.formError}  name="name" />
              <div className={styles.fromItem}>
                <span>账号头像：</span>
                <FormBinder name="avatar" required max={10} message="不能为空">
                  <Input className={styles.nameInput} />
                </FormBinder>
              </div>
              <FormError className={styles.formError}  name="avatar" />
              <div className={styles.fromItem}>
                <span>账号简介：</span>
                <FormBinder name="desc" required max={200} message="不能为空">
                  <Input.TextArea
                    hasLimitHint
                    maxLength={200}
                    className={styles.nameInput}
                  />
                </FormBinder>
              </div>
              <FormError className={styles.formError}  name="desc" />
            </div>
          </FormBinderWrapper>
        </Dialog>
      </Container>
    );
  }
}

