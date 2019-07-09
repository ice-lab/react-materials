import React, { useState, useEffect, useCallback } from 'react';
import { Table, Icon, Pagination, Balloon } from '@alifd/next';
import Ellipsis from '@icedesign/ellipsis';
import styles from './index.module.scss';

const getData = () => {
  return Array.from({ length: 10 }).map((item, index) => {
    return {
      id: index + 1,
      name: { zh: '生活大爆炸', en: 'The Big Bang Theory' },
      origin: {
        director: '马克·森卓斯基',
        actor: '吉姆·帕森斯',
        company: '哥伦比亚广播公司',
      },
      type: '喜剧 / 爱情',
      dayReturns: {
        returns: '888.8万',
        ratio: '10%',
      },
      accReturns: '9.99亿',
      date: '2017-09-25',
      score: '9.5',
    };
  });
};

export default function Schedule() {
  const [current, setCurrent] = useState(1);
  const [isLoading, setIsloading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const mockApi = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData());
      }, 600);
    });
  };

  const fetchData = useCallback(async () => {
    await setIsloading(true);
    mockApi().then((data) => {
      setDataSource(data);
      setIsloading(false);
    });
  });

  /**
   * 页码发生改变时的回调函数
   */
  const handleChange = async (crt) => {
    await setCurrent(crt);
    fetchData();
  };

  const renderId = (value, index) => {
    const ranking = {
      1: { color: 'red' },
      2: { color: 'rgba(255, 0, 0, 0.8)' },
      3: { color: 'rgba(255, 0, 0, 0.6)' },
    };
    return (
      <div className={styles.ranking} style={ranking[index + 1]}>
        NO.
        {value}
      </div>
    );
  };

  const renderName = (value) => {
    return (
      <div className={styles.name}>
        <div className={styles.zh}>{value.zh}</div>
        <div className={styles.en}>{value.en}</div>
      </div>
    );
  };

  const renderDayReturns = (value) => {
    return (
      <div className={styles.dayReturns}>
        <div className={styles.returns}>{value.returns}</div>
        <div className={styles.ratio}>
          <Icon type="arrow-up-filling" size="xs" className={styles.arrowUpIcon} />
          上涨
          {value.ratio}
        </div>
      </div>
    );
  };

  const renderOrigin = (value) => {
    const Info = (ellipsis = false) => {
      return (
        <div className={styles.origin}>
          <div className={styles.director}>
            导演：
            {value.director}
          </div>
          <div className={styles.actor}>
            主演：
            {value.actor}
          </div>
          <div className={styles.company}>
            {ellipsis ? (
              <Ellipsis
                showTooltip={false}
                lineLimit={1}
                text={`发行公司：${value.company}`}
              />
            ) : (
              `发行公司：${value.company}`
            )}
          </div>
        </div>
      );
    };
    return (
      <Balloon
        trigger={Info(true)}
        align="r"
        alignEdge
        triggerType="click"
        closable={false}
        style={{ width: 300 }}
      >
        <div className={styles.balloonContent}>
          <h3 className={styles.balloonTitle}>详细信息</h3>
          {Info()}
        </div>
      </Balloon>
    );
  };

  const renderScore = (value) => {
    return <div className={styles.score}>{value}</div>;
  };

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3 className={styles.title}>2018年10月01日票房</h3>
        <p className={styles.desc}>更新时间：2018年10月01日 12：00</p>
      </div>
      <div className={styles.summary}>全国单日总票房：100 亿</div>
      <Table
        dataSource={dataSource}
        loading={isLoading}
        className={styles.customTable}
        style={{ minHeight: '400px' }}
      >
        <Table.Column
          align="center"
          title="排名"
          dataIndex="id"
          cell={renderId}
        />
        <Table.Column
          align="center"
          title="影片名称"
          dataIndex="name"
          cell={renderName}
        />
        <Table.Column
          align="center"
          title="影片出品"
          dataIndex="origin"
          cell={renderOrigin}
        />
        <Table.Column align="center" title="影片类型" dataIndex="type" />
        <Table.Column
          align="center"
          title="日票房"
          dataIndex="dayReturns"
          cell={renderDayReturns}
        />
        <Table.Column
          align="center"
          title="累计票房"
          dataIndex="accReturns"
        />
        <Table.Column align="center" title="上映日期" dataIndex="date" />
        <Table.Column
          align="center"
          title="评分"
          dataIndex="score"
          cell={renderScore}
        />
      </Table>
      <Pagination
        className={styles.pagination}
        current={current}
        onChange={handleChange}
      />
    </div>
  );
}
