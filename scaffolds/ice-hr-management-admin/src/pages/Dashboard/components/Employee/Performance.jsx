import React, { Component } from "react";
import IceContainer from "@icedesign/container";
import { Table, Progress } from "@alifd/next";
import { withRouter } from "react-router-dom";
import DATA from "./data";

import styles from "./index.module.scss";

@withRouter
export default class TopActiveChart extends Component {
  renderProduct = (value, index, record) => {
    return (
      <div className={styles.product}>
        <p className={styles.prodyctTitle}>{record.title}</p>
      </div>
    );
  };

  renderLead = value => {
    return <img src={value} alt="" className={styles.renderLead} />;
  };

  renderStatus = (value, index, record) => {
    return (
      <span
        style={{
          color: record.color
        }}
        className={styles.renderStatus}
      >
        {value}
      </span>
    );
  };

  renderTeam = value => {
    return (
      <div>
        {value.map((item, index) => {
          return (
            <img src={item} alt="" key={index} className={styles.renderTeam} />
          );
        })}
      </div>
    );
  };

  render() {
    return (
      <IceContainer title="项目列表">
        <Table dataSource={DATA} hasBorder={false} style={{ width: "100%" }}>
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
        </Table>
      </IceContainer>
    );
  }
}
