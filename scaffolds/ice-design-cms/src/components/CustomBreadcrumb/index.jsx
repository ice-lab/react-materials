import React from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb } from '@alifd/next';
import IceContainer from '@icedesign/container';

export default function CustomBreadcrumb(props) {
  const { dataSource } = props;
  return (
    <IceContainer>
      <Breadcrumb style={{ margin: 0 }}>
        {dataSource.map((item, index) => {
          return (
            <Breadcrumb.Item link={item.link} key={index}>
              {item.text}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </IceContainer>
  );
}

CustomBreadcrumb.propTypes = {
  dataSource: PropTypes.array,
};
CustomBreadcrumb.defaultProps = {
  dataSource: [],
};
