import React from 'react';
import { Link } from 'react-router-dom';
import IceContainer from '@icedesign/container';
import PageTitle from '@/components/PageTitle';

export default () => {
  return (
    <IceContainer>
      <PageTitle title="欢迎进入商家平台" />
      <Link to="/list">商家列表</Link>
      <br />
      <Link to="/detail">商家详情</Link>
    </IceContainer>
  );
};
