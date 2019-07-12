import React, { useState, useEffect, useCallback } from 'react';
import { Table, Pagination, Icon, Message } from '@alifd/next';
import IceContainer from '@icedesign/container';
import IceImg from '@icedesign/img';
import IceLabel from '@icedesign/label';
import styles from './index.module.scss';
import EditorInfoDialog from './EditorInfoDialog';

function mockList() {
  function random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  return Array.from({ length: 10 }).map((i, index) => {
    return {
      id: index + 1,
      cover: random([
        '//img.alicdn.com/bao/uploaded/i3/120976213/TB2O4nSnblmpuFjSZFlXXbdQXXa_!!120976213.jpg_240x240.jpg',
        '//img.alicdn.com/bao/uploaded/i4/TB1GiPSinJ_SKJjSZPiYXH3LpXa_M2.SS2_100x100.jpg',
        '//img.alicdn.com/bao/uploaded/i7/TB1QpMvk3n.PuJjSZFkYXI_lpXa_M2.SS2_100x100.jpg',
      ]),
      title: random([
        '于momo2017秋冬新款背带裙复古格子连衣裙清新背心裙a字裙短裙子',
        '日式天然玉米皮草编碗垫锅垫隔热垫茶垫加厚餐垫GD-29',
        '日碗垫锅垫隔热垫茶垫加厚',
      ]),
      url: 'https://item.taobao.com/item.htm?id=558559528377',
      type: random(['清单', '帖子', '搭配']),
      publishTime: '17-04-28 20:29:20',
      publishStatus: random(['已发布', '未发布']),
      pushStatus: '已推送至订阅号',
      operation: {
        edit: true,
      },
    };
  });
}

export default function Index() {
  const [tableData, setTableData] = useState({
    total: 100,
    pageSize: 10,
    currentPage: 1,
    list: [],
    loading: true,
  });

  useEffect(() => {
    fetchData({
      page: 1,
    });
  }, []);

  const fetchData = useCallback(async ({ page }) => {
    tableData.currentPage = page;
    tableData.loading = true;

    await setTableData(tableData);
    // 模拟请求 500 毫秒的效果，实际使用中只需要在请求完成后设置值即可
    setTimeout(() => {
      tableData.loading = false;
      tableData.list = mockList();
      setTableData(tableData);
    }, 500);
  });

  const renderTitle = (value, index, record) => {
    return (
      <div className={styles.titleCol}>
        <div>
          <IceImg src={record.cover} width={48} height={48} />
        </div>
        <span className={styles.titleText}>{record.title}</span>
      </div>
    );
  };

  const editItem = (record, e) => {
    e.preventDefault();
    EditorInfoDialog.show({
      value: record,
      onOk: (value) => {
        // 更新数据
        console.log(value);
        Message.success('更新成功');
        EditorInfoDialog.hide();
      },
      onClose: () => {
        EditorInfoDialog.hide();
      },
      onCancel: () => {
        EditorInfoDialog.hide();
      },
    });
  };

  const renderOperations = (value, index, record) => {
    return (
      <div className={`${styles.operationTable} operation-table-operation`}>
        <span
          onClick={(e) => editItem(record, e)}
          title="编辑"
          className={styles.operBtn}
        >
          <Icon size="xs" type="edit" />
        </span>
        <span title="删除" className={styles.operBtn}>
          <Icon size="xs" type="close" />
        </span>
        <span title="收藏" className={styles.operBtn}>
          <Icon size="xs" type="favorites-filling" />
        </span>
      </div>
    );
  };

  const renderStatus = (value) => {
    return (
      <IceLabel inverse={false} status="default">
        {value}
      </IceLabel>
    );
  };

  const changePage = (currentPage) => {
    fetchData({ page: currentPage });
  };


  return (
    <div className="operation-table">
      <IceContainer className={styles.cardContainer}>
        <Table
          dataSource={tableData.list}
          loading={tableData.loading}
          // className="basic-table"
          className={`${styles.basicTable} basic-table`}
          hasBorder={false}
        >
          <Table.Column
            title="问题描述"
            cell={renderTitle}
            width={320}
          />
          <Table.Column title="问题分类" dataIndex="type" width={85} />
          <Table.Column
            title="发布时间"
            dataIndex="publishTime"
            width={150}
          />
          <Table.Column
            title="状态"
            dataIndex="publishStatus"
            width={85}
            cell={renderStatus}
          />
          <Table.Column
            title="操作"
            dataIndex="operation"
            width={150}
            cell={renderOperations}
          />
        </Table>
        <div className={styles.paginationContainer}>
          <Pagination
            current={tableData.currentPage}
            pageSize={tableData.pageSize}
            total={tableData.total}
            onChange={changePage}
          />
        </div>
      </IceContainer>
    </div>
  );
}
