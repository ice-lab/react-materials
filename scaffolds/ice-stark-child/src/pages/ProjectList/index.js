import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table } from '@alifd/next';

import request from '@/utils/request';
import { getProjectList } from '@/config/dataSource';

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await setLoading(true);

      const { data: resData } = await request({ ...getProjectList });
      await setData((resData && resData.data && resData.data.dataSource) || []);

      await setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h2>项目列表</h2>

      <Table loading={isLoading} dataSource={data}>
        <Table.Column dataIndex="id" />
        <Table.Column dataIndex="title" />
      </Table>

      <br />
      <Link to="/">首页</Link>
      <br />
      <Link to="/project/detail?id=344">项目详情</Link>
    </div>
  );
}
