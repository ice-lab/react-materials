import React from 'react';
import { withRouter } from 'react-router-dom';
import Table from './components/Table';
import PageHead from '@/components/PageHead';

function Goods(props) {
  const handleClick = () => {
    props.history.push('add/goods');
  };

  return (
    <div>
      <PageHead
        title="商品管理"
        buttonText="添加商品"
        onClick={handleClick}
      />
      <Table />
    </div>
  );
}

export default withRouter(Goods);
