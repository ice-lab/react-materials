import React, { useState, useEffect } from 'react';
import IceContainer from '@icedesign/container';
import { Radio } from '@alifd/next';
import CustomTable from '@/components/CustomTable';
import TableFilter from '../TableFilter';
import styles from './index.module.scss';

const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      id: index + 1,
      builder: `12022123${index}`,
      name: '淘小宝',
      description: '淘宝 Rax 项目构建器',
      createTime: `2018-06-${index + 1}`,
      executionTime: `2018-06-${index + 1}`,
      approvalData: `2018-06-${index + 1}`,
      officialVersion: `1.2.${index}`,
      grayVersion: `2.2.${index}`,
      state: '成功',
    };
  });
};

export default function BuilderTable() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    fetchData(10);
  }, []);

  function mockApi(len) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData(len));
      }, 600);
    });
  }

  async function fetchData(len) {
    await setIsLoading(true);
    const d = await mockApi(len);
    setData(d);
    setIsLoading(false);
  }

  function handleSubmit(len) {
    setActiveIndex(len);
    fetchData(len);
  }

  function renderState(value) {
    return (
      <div className={styles.state}>
        <span className={styles.circle} />
        <span className={styles.stateText}>{value}</span>
      </div>
    );
  }

  function renderOper() {
    return (
      <div className={styles.oper}>
        <a href="/">
          查看
        </a>
      </div>
    );
  }

  function columnsConfig() {
    return [
      {
        title: '构建对象',
        dataIndex: 'builder',
        key: 'builder',
      },
      {
        title: '描述',
        dataIndex: 'description',
        key: 'description',
      },
      {
        title: '责任人',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '创建时间',
        dataIndex: 'createTime',
        key: 'createTime',
      },
      {
        title: '最后执行时间',
        dataIndex: 'executionTime',
        key: 'executionTime',
      },
      {
        title: '正式版本',
        dataIndex: 'officialVersion',
        key: 'officialVersion',
      },
      {
        title: '灰度版本',
        dataIndex: 'grayVersion',
        key: 'grayVersion',
      },
      {
        title: '状态',
        dataIndex: 'state',
        key: 'state',
        cell: renderState,
      },
      {
        title: '详情',
        dataIndex: 'detail',
        key: 'detail',
        cell: renderOper,
      },
    ];
  }

  const buttonGroup = [
    {
      text: '已发布',
      lenght: '10',
    },
    {
      text: '开发中',
      lenght: '3',
    },
    {
      text: '我的',
      lenght: '8',
    },
  ];

  return (
    <IceContainer>
      <div className={styles.tableHead}>
        <div className={styles.tableTitle}>构建器</div>
        <Radio.Group
          shape="button"
          value={activeIndex}
          onChange={value => handleSubmit(value)}
        >
          {buttonGroup.map((item, index) => {
            return (
              <Radio
                type="secondary"
                key={`button-${index}`}
                value={item.lenght}
              >
                {item.text}
              </Radio>
            );
          })}
        </Radio.Group>
      </div>
      <TableFilter handleSubmit={() => handleSubmit(5)} />
      <CustomTable
        columns={columnsConfig()}
        dataSource={data}
        isLoading={isLoading}
        onChange={fetchData}
      />
    </IceContainer>
  );
}
