import cn from 'classnames';
import React, { useState } from 'react';

import './InfiniteScrollGrid.scss';
import { Grid, AutoSizer } from 'react-virtualized';
import IceContainer from '@icedesign/container';

const data = {
  list: [
    {
      name: 'Peter Brimer',
      color: 'rgb(244, 67, 54)',
      random: 'r:0, c:3',
    },
    {
      name: 'Tera Gaona',
      color: 'rgb(63, 81, 181)',
      random: 'r:0, c:3',
    },
    {
      name: 'Kandy Liston',
      color: 'rgb(76, 175, 80)',
      random: 'r:0, c:3',
    },
  ],
};

export default function Index() {
  const [columnCount] = useState(1000);
  const [height] = useState(300);
  const [overscanColumnCount] = useState(0);
  const [overscanRowCount] = useState(10);
  const [rowHeight] = useState(40);
  const [rowCount] = useState(1000);
  const [scrollToColumn] = useState(undefined);
  const [scrollToRow] = useState(undefined);

  const cellRenderer = ({ columnIndex, key, rowIndex, style }) => {
    if (columnIndex === 0) {
      return renderLeftSideCell({ columnIndex, key, rowIndex, style });
    } else {
      return renderBodyCell({ columnIndex, key, rowIndex, style });
    }
  };

  const getColumnWidth = ({ index }) => {
    switch (index) {
      case 0:
        return 50;
      case 1:
        return 100;
      case 2:
        return 300;
      default:
        return 80;
    }
  };

  const getDatum = (index) => {
    const { list } = data;

    return list[index % list.length];
  };

  const getRowClassName = (row) => {
    return row % 2 === 0 ? 'even-row' : 'odd-row';
  };

  const noContentRenderer = () => {
    return <div className="no-cells">No cells</div>;
  };

  const renderBodyCell = ({ columnIndex, key, rowIndex, style }) => {
    const rowClass = getRowClassName(rowIndex);
    const datum = getDatum(rowIndex);

    let content;

    switch (columnIndex) {
      case 1:
        content = datum.name;
        break;
      case 2:
        content = datum.random;
        break;
      default:
        content = `r:${rowIndex}, c:${columnIndex}`;
        break;
    }

    const classNames = cn(rowClass, 'cell', {
      'centered-cell': columnIndex > 2,
    });

    return (
      <div className={classNames} key={key} style={style}>
        {content}
      </div>
    );
  };

  const renderLeftSideCell = ({ key, rowIndex, style }) => {
    const datum = getDatum(rowIndex);

    const classNames = cn('cell', 'letter-cell');

    // Don't modify styles.
    // These are frozen by React now (as of 16.0.0).
    // Since Grid caches and re-uses them, they aren't safe to modify.
    style = {
      ...style,
      backgroundColor: datum.color,
    };

    return (
      <div className={classNames} key={key} style={style}>
        {datum.name.charAt(0)}
      </div>
    );
  };

  return (
    <IceContainer className="infinite-scroll-grid">
      <AutoSizer disableHeight>
        {({ width }) => (
          <Grid
            cellRenderer={cellRenderer}
            className="BodyGrid"
            columnWidth={getColumnWidth}
            columnCount={columnCount}
            height={height}
            noContentRenderer={noContentRenderer}
            overscanColumnCount={overscanColumnCount}
            overscanRowCount={overscanRowCount}
            rowHeight={rowHeight}
            rowCount={rowCount}
            scrollToColumn={scrollToColumn}
            scrollToRow={scrollToRow}
            width={width}
          />
        )}
      </AutoSizer>
    </IceContainer>
  );
}
