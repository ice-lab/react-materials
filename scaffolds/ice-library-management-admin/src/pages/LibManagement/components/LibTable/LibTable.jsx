import React, { useState, useEffect } from 'react';
import { Message, Button } from '@alifd/next';
import TableFilter from './TableFilter';
import CustomTable from './CustomTable';
import styles from './LibTable.module.scss';
import styless from './index.module.scss';
// MOCK 数据，实际业务按需进行替换
const getData = () => {
  return Array.from({ length: 20 }).map((item, index) => {
    return {
      isbn: `0000${index}`,
      bookName: '软件工程导论',
      cate: '计算机',
      authName: '淘小宝',
      publisher: '某出版社',
      date: '2018-10-01',
      total: '1000',
      instore: '300',
      price: '22.0',
    };
  });
};

export default function LibTable() {
  const [isLoading, setIsloading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const mockApi = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData());
      }, 600);
    });
  };

  const fetchData = async () => {
    await setIsloading(true);
    mockApi().then((data) => {
      setDataSource(data);
      setIsloading(false);
    });
  };

  const handlePaginationChange = (current) => {
    fetchData(current);
  };

  const handleBorrowClick = () => {
    Message.success('借阅成功');
  };

  const handleDetailClick = () => {
    Message.success('暂无详细信息');
  };

  const handleFilter = () => {
    fetchData();
  };

  const renderOper = () => {
    return (
      <div>
        <Button className={styless.marginRight} onClick={handleDetailClick}>
          查看
        </Button>
        <Button
          type="primary"
          className={styles.borrowButton}
          onClick={handleBorrowClick}
        >
          借阅
        </Button>
      </div>
    );
  };

  const columns = [
    {
      title: 'ISBN 号',
      dataIndex: 'isbn',
    },
    {
      title: '图书类型',
      dataIndex: 'cate',
    },
    {
      title: '图书名称',
      dataIndex: 'bookName',
      width: 150,
    },
    {
      title: '作者名称',
      dataIndex: 'authName',
    },
    {
      title: '出版社',
      dataIndex: 'publisher',
    },
    {
      title: '日期',
      dataIndex: 'date',
    },
    {
      title: '总数量',
      dataIndex: 'total',
    },
    {
      title: '在馆数量',
      dataIndex: 'instore',
    },
    {
      title: '价格',
      dataIndex: 'price',
    },
    {
      title: '操作',
      dataIndex: 'oper',
      cell: renderOper,
      width: 150,
    },
  ];
  const config = [
    {
      label: '图书名称',
      component: 'Input',
      componnetProps: {
        placeholder: '请输入',
      },
      formBinderProps: {
        name: 'bookName',
        triggerType: 'onBlur',
      },
    },
    {
      label: '作者名称',
      component: 'Input',
      componnetProps: {
        placeholder: '请输入',
      },
      formBinderProps: {
        name: 'authorName',
        triggerType: 'onBlur',
      },
    },
    {
      label: 'ISBN 号',
      component: 'Input',
      componnetProps: {
        placeholder: '请输入',
      },
      formBinderProps: {
        name: 'isbn',
        triggerType: 'onBlur',
      },
    },
    {
      label: '图书分类',
      component: 'Input',
      componnetProps: {
        placeholder: '请选择',
        options: [
          {
            lable: '技术领域',
            value: 'technology',
          },
          {
            lable: '专业领域',
            value: 'professional',
          },
          {
            lable: '管理沟通',
            value: 'management',
          },
          {
            lable: '其他',
            value: 'other',
          },
        ],
      },
      formBinderProps: {
        name: 'cate',
        triggerType: 'onBlur',
      },
    },
    {
      label: '出版社',
      component: 'Input',
      componnetProps: {
        placeholder: '请输入',
      },
      formBinderProps: {
        name: 'publisher',
        triggerType: 'onBlur',
      },
    },
  ];

  return (
    <div>
      <TableFilter config={config} onChange={handleFilter} />
      <CustomTable
        isLoading={isLoading}
        dataSource={dataSource}
        columns={columns}
        paginationChange={handlePaginationChange}
      />
    </div>
  );
}
