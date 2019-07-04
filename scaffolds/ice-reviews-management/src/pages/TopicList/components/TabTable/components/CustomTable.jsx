import React from 'react';
import PropTypes from 'prop-types';
import { Table } from '@alifd/next';

export default function CustomTable(props) {
  const renderColumns = () => {
    const { columns } = props;
    return columns.map((item) => {
      if (typeof item.render === 'function') {
        return (
          <Table.Column
            key={item.key}
            title={item.title}
            cell={item.render}
            width={item.width}
          />
        );
      }

      return (
        <Table.Column
          key={item.key}
          title={item.title}
          dataIndex={item.dataIndex}
          width={item.width}
        />
      );
    });
  };
  return <Table {...props}>{renderColumns()}</Table>;
}

CustomTable.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dataSource: PropTypes.array,
  // eslint-disable-next-line react/forbid-prop-types
  columns: PropTypes.array.isRequired,
};

CustomTable.defaultProps = {
  dataSource: [],
};
