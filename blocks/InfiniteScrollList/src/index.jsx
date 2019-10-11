import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { List, AutoSizer } from 'react-virtualized';
import './InfiniteScrollList.scss';
import data from './data';

export default function Index() {
  const [listHeight] = useState(300);
  const [listRowHeight] = useState(50);
  const [overscanRowCount] = useState(10);
  const [rowCount] = useState(data.list.length);
  const [scrollToIndex] = useState(undefined);
  const [showScrollingPlaceholder] = useState(false);

  const getDatum = (index) => {
    const { list } = data;
    return list[index % list.length];
  };

  const noRowsRenderer = () => {
    return <div className="no-rows">No rows</div>;
  };

  const rowRenderer = ({ index, isScrolling, key, style }) => {
    if (showScrollingPlaceholder && isScrolling) {
      return (
        <div className="row is-scrolling-placeholder" key={key} style={style}>
          Scrolling...
        </div>
      );
    }

    const datum = getDatum(index);

    return (
      <div className="row" key={key} style={style}>
        <div
          className="letter"
          style={{
            backgroundColor: datum.color,
          }}
        >
          {datum.name.charAt(0)}
        </div>
        <div>
          <div className="name">{datum.name}</div>
          <div className="index">This is row {index}</div>
        </div>
      </div>
    );
  };

  return (
    <IceContainer className="infinite-scroll-list">
      <AutoSizer disableHeight>
        {({ width }) => (
          <List
            className="list"
            height={listHeight}
            overscanRowCount={overscanRowCount}
            noRowsRenderer={noRowsRenderer}
            rowCount={rowCount}
            rowHeight={listRowHeight}
            rowRenderer={rowRenderer}
            scrollToIndex={scrollToIndex}
            width={width}
          />
        )}
      </AutoSizer>
    </IceContainer>
  );
}
