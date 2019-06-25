import React from 'react';
import IceContainer from '@icedesign/container';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Table, Progress, Pagination, Dialog } from '@alifd/next';
import { withRouter } from 'react-router-dom';
import DATA from './data';
import styles from './index.module.scss';

function handleRemove() {
  Dialog.confirm({
    title: '提示',
    content: '确认删除该项目吗？',
  });
}

function handleEdit() {
  Dialog.confirm({
    title: '提示',
    content: '暂不支持编辑',
  });
}

function renderAction() {
  return (
    <div className={styles.product}>
      <a
        onClick={handleEdit}
        className={styles.hb}
      >
        <FormattedMessage id="app.btn.edit" />
      </a>
      <a
        onClick={handleRemove}
        className={styles.hb2}
      >
        <FormattedMessage id="app.btn.delete" />
      </a>
    </div>
  );
}

function renderLead(value) {
  return (
    <img
      src={value}
      alt=""
      className={styles.lead}
    />
  );
}

function renderStatus(value, index, record) {
  return (
    <span
      style={{
        // border: `1px solid ${record.color}`,
        color: record.color,
        borderRadius: '4px',
        width: '78px',
        height: '24px',
        lineHeight: '24px',
        fontSize: '12px',
        fontWeight: '500',
        textAlign: 'center',
        display: 'inline-block',
      }}
    >
      {value}
    </span>
  );
}

function renderTeam(value) {
  return (
    <div>
      {value.map((item, index) => {
        return (
          <img
            src={item}
            alt=""
            key={index}
            className={styles.team}
          />
        );
      })}
    </div>
  );
}

export default withRouter(injectIntl((props) => {
  const {
    intl: { formatMessage },
  } = props;
  return (
    <IceContainer
      title={formatMessage({ id: 'app.list.project.table.title' })}
    >
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
}));
