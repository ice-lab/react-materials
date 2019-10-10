import React, { useState } from 'react';
import { SketchPicker } from 'react-color';
import PropTypes from 'prop-types';
import styles from  './index.module.scss';

export default function ColorPicker(props) {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState(props.defaultColor);

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = async (color) => {
    await setColor(color.hex);
    props.onChange(color);
  };

  return (
    <div>
      <div className={styles.swatch} onClick={handleClick}>
        <div style={{ background: `${color}` }}  className={styles.color}/>
      </div>
      {displayColorPicker ? (
        <div className={styles.popover}>
          <div className={styles.cover} onClick={handleClose} />
          <SketchPicker
            color={color}
            onChange={handleChange}
          />
        </div>
      ) : null}
    </div>
  );
}

ColorPicker.propTypes = {
  onChange: PropTypes.func,
};

ColorPicker.defaultProps = {
  onChange: () => {},
};
