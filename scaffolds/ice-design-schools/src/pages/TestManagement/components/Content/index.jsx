import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Icon, Pagination } from '@alifd/next';
import styles from './index.module.scss';

const { Row, Col } = Grid;

const getData = () => {
  return Array.from({ length: 10 }).map((item, index) => {
    return {
      title: `${index + 1}. 这里是试卷名称这里是试卷名称这里是试卷名称`,
      time: `2018-06-1${index}`,
      citation: index + 1,
      score: index + 90,
      subject: '自然语言',
      count: 20,
    };
  });
};

export default class Content extends Component {
  static displayName = 'Content';

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
    };
  }

  handlePaginationChange = (current) => {
    this.setState({
      current,
    });
  };

  render() {
    const data = getData();
    return (
      <IceContainer>
        <h4 className={styles.cardTitle}>试卷列表</h4>
        <div className={styles.contentList}>
          {data.map((item, index) => {
            return (
              <div className={styles.item} key={index}>
                <h6 className={styles.title}>{item.title}</h6>
                <Row>
                  <Col l="16">
                    <div className={styles.metaWrap}>
                      <div className={styles.meta}>
                        <span>阅卷方式: </span>
                        <span>人工</span>
                      </div>
                      <div className={styles.meta}>
                        <span>时间: </span>
                        <span>{item.time}</span>
                      </div>
                      <div className={styles.meta}>
                        <span>引用次数: </span>
                        <span>{item.citation}</span>
                      </div>
                      <div className={styles.meta}>
                        <span>分值: </span>
                        <span>{item.score}</span>
                      </div>
                      <div className={styles.meta}>
                        <span>技术方向: </span>
                        <span>{item.subject}</span>
                      </div>
                      <div className={styles.meta}>
                        <span>题目: </span>
                        <span>{item.count}</span>
                      </div>
                    </div>
                  </Col>
                  <Col l="8">
                    <div className={styles.operWrap}>
                      <div className={styles.oper}>
                        <Icon size="xs" type="edit" className={styles.operIcon} />
                        <span className={styles.operText}>编辑</span>
                      </div>
                      <div className={styles.oper}>
                        <Icon size="xs" type="ashbin" className={styles.operIcon} />
                        <span className={styles.operText}>删除</span>
                      </div>
                      <div className={styles.oper}>
                        <Icon
                          size="xs"
                          type="success"
                          className={styles.operIcon}
                        />
                        <span className={styles.operText}>归档</span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
        <Pagination
          className={styles.pagination}
          current={this.state.current}
          onChange={this.handlePaginationChange}
        />
      </IceContainer>
    );
  }
}
