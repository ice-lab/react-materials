import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Loading } from '@alifd/next';
import ReactList from 'react-list';
import IceContainer from '@icedesign/container';
import dataSource from './list-data';
import avatar from './images/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png';
import styles from './index.module.scss';

export default function ScrollList(props) {
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
        <img src={avatar} className={styles.avatar} alt="" />
        <div className={styles.info}>
          <div className={styles.infoItem}>{list[index].name}</div>
          <div>This is the {index + 1} row</div>
        </div>
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
        style={{ height: props.height, overflow: 'auto' }}
        onScroll={handleScroll}
      >
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

ScrollList.defaultProps = {
  height: '300px',
};
