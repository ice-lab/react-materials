import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loading } from '@alifd/next';
import urlParse from 'url-parse';

import request from '@/utils/request';
import { getProjectDetail } from '@/config/dataSource';

export default function ProjectDetail() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    async function fetchData() {
      const { id = 0 } = urlParse(location.href, true).query;
      await setLoading(true);

      const { data: resData } = await request({
        ...getProjectDetail,
        params: { id },
      });
      await setData((resData && resData.data) || {});

      await setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>项目详情</h1>

      <Loading visible={isLoading}>
        <div>id: {data.id || ''}</div>
        <div>title: {data.title}</div>
      </Loading>

      <br />
      <Link to="/">首页</Link>
      <br />
      <Link to="/project/list">项目列表</Link>
    </div>
  );
}
