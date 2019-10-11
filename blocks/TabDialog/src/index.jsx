import React, { useState } from 'react';
import { Dialog, Tab, Table, Button } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss';

const TabPane = Tab.Item;

const mockData = [
  {
    title: '十九大后，习近平对中国经济给出8大论断',
    id: '1212',
  },
  {
    title: '中驻美使馆:美《国家安全战略报告》自相矛盾',
    id: '231',
  },
  {
    title: '美发国安战略:坚持"一中政策" 继续对台军售',
    id: '2321',
  },
  {
    title: '又一"港独"组织濒于溃散:召集人潜逃 发言人退伙',
    id: '22331',
  },
];

export default function TabDialog(props) {
  const [visible, setVisible]= useState(false);
  const [selectedItems, setSelectedItems]= useState([]);

  const onItemSelect = (selectedItems) => {
    setSelectedItems(selectedItems);
  };

  const onTabChange = () => {
    // 清理掉缓存数据
    setSelectedItems([]);
  };

  const onDialogOk = () => {
    hideDialog();
  };

  const showDialog = () => {
    setVisible(true);
  };

  const hideDialog = () => {
    setVisible(false);
    setSelectedItems([]);
  };

  return (
    <IceContainer>
      <Dialog
        className={styles.dialog}
        autoFocus={false}
        isFullScreen
        title="选择信息"
        {...props}
        onOk={onDialogOk}
        onClose={hideDialog}
        onCancel={hideDialog}
        visible={visible}
      >
        <div>
          <Tab
            size="small"
            onChange={onTabChange}
          >
            <TabPane title="选择文章" key="post">
              <div className={styles.tabContent}>
                <Table
                  dataSource={mockData}
                  rowSelection={{
                    selectedRowKeys: selectedItems,
                    onChange: onItemSelect,
                  }}
                >
                  <Table.Column title="文章标题" dataIndex="title" />
                </Table>
              </div>
            </TabPane>
            <TabPane title="选择视频" key="video">
              <div className={styles.tabContent}>
                <Table
                  dataSource={mockData}
                  rowSelection={{
                    selectedRowKeys: selectedItems,
                    onChange: onItemSelect,
                  }}
                >
                  <Table.Column title="视频标题" dataIndex="title" />
                </Table>
              </div>
            </TabPane>
          </Tab>
        </div>
      </Dialog>
      <Button type="primary" onClick={showDialog}>
        显示 Dialog
      </Button>
    </IceContainer>
  );
}
