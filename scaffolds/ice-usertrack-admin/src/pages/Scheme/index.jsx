import React, { useState, useEffect } from 'react';

import CustomBreadcrumb from '@/components/CustomBreadcrumb';
import Filter from './Components/Filter';
import CardList from './Components/CardList';

const getData = (length = 10) => {
  return Array.from({ length }).map((item, index) => {
    return {
      title: `淘宝首页-P${index}`,
      desc: `产品方案 - 共 ${index} 个埋点`,
      creator: '张明',
      leader: '淘小宝',
      time: '2017-06-05 14:03',
    };
  });
};

export default function Scheme() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  function fetchData(len, callback) {
    setLoading(true);

    setTimeout(() => {
      setDataSource(getData(len));
      setLoading(false);
      callback && callback();
    }, 1 * 1000);
  }

  function handleFilterChange() {
    fetchData(5);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const breadcrumb = [
    {
      link: '/#/maintain/scheme',
      text: '埋点维护',
    },
    {
      link: '',
      text: '方案管理',
    },
  ];
  return (
    <div>
      <CustomBreadcrumb items={breadcrumb} title="方案管理" />
      <Filter onChange={handleFilterChange} />
      <CardList loading={loading} dataSource={dataSource} />
    </div>
  );
}
