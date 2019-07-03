import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Button, Dialog, Message } from '@alifd/next';
import ContractTable from '../../components/ContractTable';
import CustomNotice from './components/CustomNotice';
import CreateContractForm from './components/CreateContractForm';
import styles from './index.module.scss';

export default function MyContract() {
  const [createFormVisible, setCreateFormVisible] = useState(false);

  function showCreateForm() {
    setCreateFormVisible(true);
  }

  function hideCreateForm() {
    setCreateFormVisible(false);
  }

  function onCreateSubmitSuccess() {
    Message.success('新建成功');
    hideCreateForm();
    // 根据需求确定是否要重新加载 list 数据
  }

  function onCreateSubmitCancel() {
    hideCreateForm();
  }

  return (
    <IceContainer>
      <CustomNotice />
      <Button
        type="primary"
        className={styles.newContractButton}
        onClick={showCreateForm}
      >
        新建合同
      </Button>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>我的合同</div>
      </div>
      <ContractTable enableFilter={false} />

      <Dialog
        title="新建合同"
        visible={createFormVisible}
        footer={false}
        onClose={hideCreateForm}
      >
        <CreateContractForm
          onSubmitSuccess={onCreateSubmitSuccess}
          onSubmitCancel={onCreateSubmitCancel}
        />
      </Dialog>
    </IceContainer>
  );
}
