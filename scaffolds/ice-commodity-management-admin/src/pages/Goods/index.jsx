import React from 'react';
import { withRouter } from 'react-router-dom';
import PageHead from '@/components/PageHead';
import Table from './components/Table';

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
