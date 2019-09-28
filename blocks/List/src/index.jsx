import React, { useState, useEffect } from 'react';
import { Grid, Pagination, Loading } from '@alifd/next';
import styles from './index.module.scss';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
const { Row, Col } = Grid;

export default function Lists() {
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async (pageNo) => {
    setLoading(true);
    await sleep(500);
    const data = Array.from({ length: 10 }).map((item, index) => {
      return {
        title: `${(pageNo - 1) * 10 + (index +1)}. 这里是试卷名称这里是试卷名称这里是试卷名称`,
        time: `2018-06-1${index}`,
        citation: index + 1,
        score: index + 90,
        subject: '自然语言',
        count: 20,
      };
    });
    setLoading(false);
    setData(data);
  }

  useEffect(() => {
    fetchData(current);
  }, [current]);

  const handlePaginationChange = (crt) => {
    setCurrent(crt);
  };

  return (
    <div>
      <Loading visible={loading} tip="加载中..." style={{width: '100%'}}>
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
                    </div>
                  </Col>
                </Row>
              </div>
            );
          })}
        </div>
      </Loading>
      <Pagination
        className={styles.pagination}
        current={current}
        onChange={handlePaginationChange}
      />
    </div>
  );
}


