import PropTypes from 'prop-types';
import React from 'react';
import { Grid, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import './InfiniteScrollCellMeasurer.scss';

const cache = new CellMeasurerCache({
  defaultWidth: 100,
  fixedHeight: true,
});

export default function DynamicWidthGrid(props) {
  const { getClassName, getContent, list, width } = props;
  const cellRenderer = ({ columnIndex, key, parent, rowIndex, style }) => {
    const datum = list[(rowIndex + columnIndex) % list.length];
    const classNames = getClassName({ columnIndex, rowIndex });
    const content = getContent({ index: columnIndex, datum, long: false });

    return (
      <CellMeasurer
        cache={cache}
        columnIndex={columnIndex}
        key={key}
        parent={parent}
        rowIndex={rowIndex}
      >
        <div
          className={classNames}
          style={{
            height: 35,
            whiteSpace: 'nowrap',
            ...style,
          }}
        >
          {content}
        </div>
      </CellMeasurer>
    );
  };

  return (
    <Grid
      className="body-grid"
      columnCount={1000}
      columnWidth={cache.columnWidth}
      deferredMeasurementCache={cache}
      height={400}
      overscanColumnCount={0}
      overscanRowCount={2}
      cellRenderer={cellRenderer}
      rowCount={50}
      rowHeight={35}
      width={width}
    />
  );
}

DynamicWidthGrid.propTypes = {
  getClassName: PropTypes.func.isRequired,
  getContent: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
};
