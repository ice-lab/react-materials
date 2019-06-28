import React from 'react';
import { withRouter } from 'react-router-dom';
import Table from './components/Table';
import PageHead from '../../components/PageHead';

function Reserve(props) {
  const handleClick = () => {
    props.history.push('add/reserve');
  };

  return (
    <div>
      <PageHead
        title="预约管理"
        buttonText="添加预约"
        onClick={handleClick}
      />
      <Table />
    </div>
  );
}

export default withRouter(Reserve);
