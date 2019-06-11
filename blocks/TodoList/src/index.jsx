import React, { Component } from 'react';
import { Grid, Checkbox, Icon } from '@alifd/next';
import IceContainer from '@icedesign/container';
import styles from './index.module.scss'

const avatarImg = require('./images/avatar.jpg');

const { Row, Col } = Grid;
const mockData = {
  accounts: [
    {
      avatar: avatarImg,
      username: 'David',
      position: 'UI/UX Designer',
      time: '2018-06-10',
    },
    {
      avatar: avatarImg,
      username: 'Edward Fletcher',
      position: 'Business Development',
      time: '2018-06-02',
    },
    {
      avatar: avatarImg,
      username: 'Allen Donald',
      position: 'SEO Expert',
      time: '2018-06-10',
    },
  ],
  todos: [
    {
      title: '参加2018国际体验设计师大会',
      time: '2018-06-11 15:00',
      tags: ['designer', 'AWD'],
    },
    {
      title: '参加2018国际体验设计师大会',
      time: '2018-06-11 15:00',
      tags: ['designer', 'AWD'],
    },
    {
      title: '参加2018国际体验设计师大会',
      time: '2018-06-11 15:00',
      tags: ['designer', 'AWD'],
    },
  ],
};

export default class TodoList extends Component {
  static displayName = 'TodoList';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Row wrap guttter="20">
        <Col xxs="12" l="10">
          <IceContainer title="新增用户" className={styles.container}>
            {mockData.accounts.map((item, index) => {
              return (
                <div className={styles.userItem} key={index}>
                  <img src={item.avatar} alt="" className={styles.avatar} />
                  <div className={styles.userInfo}>
                    <h3 className={styles.userName}>{item.username}</h3>
                    <p className={styles.userPosition}>{item.position}</p>
                  </div>
                  <div className={styles.createTime}>{item.time}</div>
                </div>
              );
            })}
          </IceContainer>
        </Col>
        <Col xxs="12" l="14">
          <IceContainer title="任务列表" className={styles.container}>
            {mockData.todos.map((item, index) => {
              return (
                <div className={styles.taskList} key={index}>
                  <Checkbox id="pear" />
                  <div className={styles.taskBody}>
                    <h6 className={styles.taskTitle}>{item.title}</h6>
                    <p className={styles.taskTime}>{item.time}</p>
                    <div className={styles.taskTags}>
                      {item.tags.map((tag, idx) => {
                        return (
                          <span className={styles.taskTags} key={idx}>
                            # {tag}{' '}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className={styles.taskOper}>
                    <Icon type="ellipsis" />
                  </div>
                </div>
              );
            })}
          </IceContainer>
        </Col>
      </Row>
    );
  }
}
