import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IceContainer from '@icedesign/container';
import ReactJson from 'react-json-view';

const JsonConfig = {
  type: 'front end',
  items: [
    { name: 'react', url: 'https://reactjs.org' },
    { name: 'vue', url: 'http://vuejs.org' },
    { name: 'angular', url: 'https://angular.io' },
  ],
};

export default function JsonView({ JsonConfig }) {
  const [src, setSrc] = useState('');
  const onEdit = (e) => {
    setSrc(e.updated_src);
  };

  const onDelete = (e) => {
    setSrc(e.updated_src);
  };

  console.log(src);
  return (
    <IceContainer>
      <ReactJson
        src={JsonConfig}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </IceContainer>
  );
}

JsonView.propTypes = {
  JsonConfig: PropTypes.object,
};

JsonView.defaultProps = {
  JsonConfig,
};
