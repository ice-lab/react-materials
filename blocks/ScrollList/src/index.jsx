import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Loading } from '@alifd/next';
import ReactList from 'react-list';
import IceContainer from '@icedesign/container';
import dataSource from './list-data';
import styles from './index.module.scss';

export default function ScrollList() {
  const listRef = useRef(null);
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(20);
  const [isLoading, setLoaidng] = useState(false);
  const [pageSize] = useState(20);
  const [pageNo, setPageNo] = useState(0);

  const fetchDataMethod = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dataSource);
      }, 500);
    });
  };

  const fetchData = useCallback(() => {
    setLoaidng(true);
    fetchDataMethod().then((res) => {
      if (res.status === 'SUCCESS') {
        setList([...list, ...res.data.list]);
        setTotal(res.data.total);
        setPageNo(pageNo + 1);
        setLoaidng(false);
      }
    });
  });

  const renderItem = (index, key) => {
    return list[index] ? (
      <div key={key} className={styles.listItem}>
        <img src="https://img.alicdn.com/tfs/TB1SE6tdoD1gK0jSZFGXXbd3FXa-32-32.svg" className={styles.avatar} alt="" />
        <div className={styles.info}>
          <div className={styles.infoItem}>姓名：{list[index].name}</div>
          <div className={styles.desc}>第 {index + 1} 行：个人介绍，描述文字</div>
        </div>
        <a className={styles.detail} href="/">
          <span>查看详情</span>
          <img src="https://img.alicdn.com/tfs/TB13zDsdX67gK0jSZPfXXahhFXa-32-32.svg" alt="" />
        </a>
      </div>
    ) : (
      ''
    );
  };

  const handleScroll = () => {
    const lastVisibleIndex = listRef.current.getVisibleRange()[1];
    // 提前 5条 预加载
    if (
      lastVisibleIndex >= pageNo * pageSize - 5 &&
      !isLoading
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Loading
      color="#66AAFF"
      style={{ display: 'block' }}
      visible={isLoading}>
      <IceContainer
        className={styles.container}
        onScroll={handleScroll}
      >
        <h3 className={styles.title}>滚动加载列表</h3>
        <ReactList
          ref={listRef}
          itemRenderer={renderItem}
          length={total}
          pageSize={pageSize}
        />
      </IceContainer>
    </Loading>
  );
}
