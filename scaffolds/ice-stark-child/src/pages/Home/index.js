import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div>
      <h2>Home</h2>
      <Link to="/project/list">项目列表</Link>
      <br />
      <Link to="/project/detail?id=233">项目详情</Link>
    </div>
  );
};
