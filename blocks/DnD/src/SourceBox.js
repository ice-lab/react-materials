import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import styles from './index.module.scss';

const boxSource = {
  beginDrag() {
    return {};
  },
  endDrag(props, monitor, component) {
    if (monitor.didDrop()) {
      if (props.dropBack) {
        component.setState({
          show: false,
        });
        props.dropBack(props.index);
      }
    }
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

function SourceBox(props) {
  const [show] = useState(true);

  const {
    isDragging,
    connectDragSource,
    showCopyIcon,
    children,
  } = props;
  const opacity = isDragging ? 0.4 : 1;
  const dropEffect = showCopyIcon ? 'copy' : 'move';
  return show
    ? connectDragSource &&
        connectDragSource(
          <div style={{ opacity }} className={styles.SourceBox}>{children}</div>,
          { dropEffect }
        )
    : '';
}

SourceBox.propTypes = {
  isDragging: PropTypes.bool.isRequired,
  showCopyIcon: PropTypes.bool,
};

SourceBox.defaultProps = {
  showCopyIcon: true,
};

export default DragSource('box', boxSource, collect)(SourceBox);
