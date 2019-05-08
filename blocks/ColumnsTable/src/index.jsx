import React, { Component } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Input, Table, Icon } from '@alifd/next';
import styles from './index.module.scss';
const { Row, Col } = Grid;

const mockData = {
  users: [
    {
      avatar: require('./images/TB1j159r21TBuNjy0FjXXajyXXa-499-498.png_80x80.jpg'),
      name: 'Susan Day',
      email: 'carol@example.com',
      access: 'vip',
    },
    {
      avatar: require('./images/TB1FGimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg'),
      name: 'Ryan Flores',
      email: 'smith@example.com',
      access: 'pro',
    },
    {
      avatar: require('./images/TB1FWimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg'),
      name: 'Jose Wagner',
      email: 'Jose@example.com',
      access: 'vip',
    },
    {
      avatar: require('./images/TB1FGimr1SSBuNjy0FlXXbBpVXa-499-498.png_80x80.jpg'),
      name: 'Lisa Jenkins',
      email: 'lori@example.com',
      access: 'vip',
    },
    {
      avatar: require('./images/TB1j159r21TBuNjy0FjXXajyXXa-499-498.png_80x80.jpg'),
      name: 'Ralph Murray',
      email: 'Jack@example.com',
      access: 'free',
    },
  ],
  purchases: [
    {
      product: 'iPhone X',
      date: 'today',
      state: 'pending',
      price: '$999.99',
    },
    {
      product: 'MacBook Pro',
      date: 'today',
      state: 'pending',
      price: '$2999.00',
    },
    {
      product: 'Echo Dot',
      date: 'today',
      state: 'pending',
      price: '$999.00',
    },
    {
      product: 'Playstation 4 Pro',
      date: 'yesterday',
      state: 'pending',
      price: '$999.99',
    },
    {
      product: 'Xbox One X',
      date: 'today',
      state: 'completed',
      price: '$39.99',
    },
    {
      product: 'MacBook Pro',
      date: 'today',
      state: 'completed',
      price: '$2999.00',
    },
    {
      product: 'Echo Dot',
      date: 'today',
      state: 'completed',
      price: '$999.00',
    },
    {
      product: 'iPhone X',
      date: 'today',
      state: 'cancelled',
      price: '$999.99',
    },
  ],
};

const accessColors = {
  vip: '#343A40',
  pro: '#ABABAB',
  free: '#83B451',
};

const stateColors = {
  pending: '#fdcb6e',
  completed: '#ff7675',
  cancelled: '#2ecc71',
};

export default class Index extends Component {
  static displayName = 'Index';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSearch = (value) => {
    console.log(value);
  };

  renderAvatar = (value) => {
    return <img src={value} alt="" className={styles.userAvatar} />;
  };

  renderUserInfo = (value, index, record) => {
    return (
      <div className={styles.userInfo}>
        <h6 className={styles.userName}>{record.name}</h6>
        <p className={styles.userEmail}>{record.email}</p>
      </div>
    );
  };

  renderAccess = (value) => {
    return (
      <span className={styles.userAccess} style={{background: accessColors[value] }}>
        {value}
      </span>
    );
  };

  renderOper = () => {
    return <Icon type="edit" className={styles.editIcon} />;
  };

  renderState = (value) => {
    return (
      <span className={styles.purchasesState} style={{color: stateColors[value] }}>
        {value}
      </span>
    );
  };
  render() {
    return (
      <div >
        <Row wrap gutter="20">
          <Col xxx="24" s="12">
            <IceContainer className={styles.containerPadding}>
              <h2 className={styles.title}>Users</h2>
              <div className={styles.searchInputCol}>
                <Input
                  className={styles.searchInput}
                  placeholder="Search Users ..."
                  hasClear
                  onChange={this.handleSearch}
                  size="large"
                />
              </div>
              <Table dataSource={mockData.users} hasBorder={false}>
                <Table.Column
                  title="AVATAR"
                  dataIndex="avatar"
                  cell={this.renderAvatar}
                />
                <Table.Column
                  title="NAME"
                  dataIndex="name"
                  cell={this.renderUserInfo}
                />
                <Table.Column
                  title="ACCESS"
                  dataIndex="access"
                  cell={this.renderAccess}
                />
                <Table.Column title="" cell={this.renderOper} />
              </Table>
            </IceContainer>
          </Col>
          <Col xxx="24" s="12">
            <IceContainer className={styles.containerPadding}>
              <h2 className={styles.title}>Purchases</h2>
              <div className={styles.searchInputCol}>
                <Input
                  className={styles.searchInput}
                  placeholder="Search Purchases ..."
                  hasClear
                  onChange={this.handleSearch}
                  size="large"
                />
              </div>
              <Table dataSource={mockData.purchases} hasBorder={false}>
                <Table.Column title="PRODUCT" dataIndex="product" />
                <Table.Column title="DATE" dataIndex="date" />
                <Table.Column
                  title="STATE"
                  dataIndex="state"
                  cell={this.renderState}
                />
                <Table.Column title="PRICE" dataIndex="price" />
                <Table.Column title="" cell={this.renderOper} />
              </Table>
            </IceContainer>
          </Col>
        </Row>
      </div>
    );
  }
}


