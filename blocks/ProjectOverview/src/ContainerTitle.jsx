import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@alifd/next';

const ContainerTitle = ({ title, style, ...props }) => {
  return (
    <div style={{ ...style }} className="stylescontainer">
      <h3 className="stylestitle">{title}</h3>
      {props.buttonText ? (
        <Button type="primary" size="large">
          {props.buttonText}
        </Button>
      ) : null}
    </div>
  );
};

ContainerTitle.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
};

ContainerTitle.defaultProps = {
  buttonText: '',
};

export default ContainerTitle;
