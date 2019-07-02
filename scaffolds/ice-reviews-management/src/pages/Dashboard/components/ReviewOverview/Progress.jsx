import React from 'react';
import PropTypes from 'prop-types';

export default function Progress({ percent, extra, color, style }) {
  const customStyles = {
    width: `${percent}%`,
    backgroundColor: color,
  };

  return (
    <div style={styles.progressWrapper}>
      <span style={{ ...styles.progress, ...customStyles, ...style }} />
      {extra ? <span style={styles.extra}>{extra}</span> : null}
    </div>
  );
}

Progress.propTypes = {
  percent: PropTypes.number,
  extra: PropTypes.string,
  color: PropTypes.string,
};

Progress.defaultProps = {
  percent: 100,
  extra: '',
  color: '#5485f7',
};

const styles = {
  progressWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  progress: {
    display: 'inline-block',
    height: 5,
    marginRight: 5,
  },
};
