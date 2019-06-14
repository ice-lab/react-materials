import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { injectIntl, FormattedMessage } from 'react-intl';
import { Table, Progress, Pagination, Dialog } from '@alifd/next';
import { withRouter } from 'react-router-dom';
import DATA from './data';
import styles from './index.module.scss';

@withRouter
@injectIntl
export default class TopActiveChart extends Component {
  renderProduct = (value, index, record) => {
    return (
      <div style={styles.product}>
        <p style={styles.prodyctTitle}>{record.title}</p>
      </div>
    );
  };

  handleRemove = () => {
    Dialog.confirm({
      title: '提示',
      content: '确认删除该项目吗？',
    });
  };

  handleEdit = () => {
    Dialog.confirm({
      title: '提示',
      content: '暂不支持编辑',
    });
  };

  renderAction = () => {
    return (
      <div className={styles.product}>
        <a
          onClick={this.handleEdit}
          className={styles.hb}
        >
          <FormattedMessage id="app.btn.edit" />
        </a>
        <a
          onClick={this.handleRemove}
          className={styles.hb2}
        >
          <FormattedMessage id="app.btn.delete" />
        </a>
      </div>
    );
  };

  renderLead = (value) => {
    return (
      <img
        src={value}
        alt=""
        className={styles.lead}
      />
    );
  };

  renderStatus = (value, index, record) => {
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
  };

  renderTeam = (value) => {
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
  };

  render() {
    const {
      intl: { formatMessage },
    } = this.props;
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
            cell={this.renderLead}
          />
          <Table.Column title="团队" dataIndex="team" cell={this.renderTeam} />
          <Table.Column
            title="状态"
            dataIndex="status"
            cell={this.renderStatus}
          />
          <Table.Column
            title="操作"
            dataIndex="action"
            cell={this.renderAction}
          />
        </Table>
        <Pagination current={1} total={10} className={styles.pagination} />
      </IceContainer>
    );
  }
}
