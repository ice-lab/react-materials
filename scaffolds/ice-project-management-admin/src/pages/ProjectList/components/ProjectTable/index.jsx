import React from 'react';
import IceContainer from '@icedesign/container';
import { Table, Progress, Pagination, Dialog } from '@alifd/next';
import { withRouter } from 'react-router-dom';
import DATA from './data';

import styles from './index.module.scss';

const TopActiveChart = (props) => {
  // const renderProduct = (value, index, record) => {
  //   return (
  //     <div className={styles.product}>
  //       <p className={styles.prodyctTitle}>{record.title}</p>
  //     </div>
  //   );
  // };

  const handleRemove = () => {
    Dialog.confirm({
      title: '提示',
      content: '确认删除该项目吗？',
    });
  };

  const handleEdit = () => {
    props.history.push('/add/project');
  };

  const renderAction = () => {
    return (
      <div className={styles.product}>
        <a onClick={handleEdit} className={styles.btnl}>
          编辑
        </a>
        <a onClick={handleRemove} className={styles.btnr}>
          删除
        </a>
      </div>
    );
  };

  const renderLead = (value) => {
    return <img src={value} alt="" className={styles.img} />;
  };

  const renderStatus = (value, index, record) => {
    return (
      <span
        style={{
          // border: `1px solid ${record.color}`,
          color: record.color,
        }}
        className={styles.span}
      >
        {value}
      </span>
    );
  };

  const renderTeam = (value) => {
    return (
      <div>
        {value.map((item, index) => {
          return <img src={item} alt="" key={index} className={styles.imgg} />;
        })}
      </div>
    );
  };

  return (
    <IceContainer title="项目列表">
      <Table dataSource={DATA} hasBorder={false} style={{ width: '100%' }}>
        <Table.Column title="项目名称" dataIndex="name" />
        <Table.Column title="截止时间" dataIndex="endTime" />
        <Table.Column
          title="项目进度"
          dataIndex="percent"
          cell={(value, index, record) => (
            <Progress percent={record.percent} state={record.state} />
          )}
        />
        <Table.Column
          title="负责人"
          dataIndex="lead"
          cell={renderLead}
        />
        <Table.Column title="团队" dataIndex="team" cell={renderTeam} />
        <Table.Column
          title="状态"
          dataIndex="status"
          cell={renderStatus}
        />
        <Table.Column
          title="操作"
          dataIndex="action"
          cell={renderAction}
        />
      </Table>
      <Pagination current={1} total={10} className={styles.pagination} />
    </IceContainer>
  );
};

export default withRouter(TopActiveChart);
