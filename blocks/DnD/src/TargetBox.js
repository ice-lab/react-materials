import React from 'react';
import { DropTarget } from 'react-dnd';
import styles from './index.module.scss';

const boxTarget = {
  drop() {
    //
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

function TargetBox({ connectDropTarget, children }) {
  return (
    connectDropTarget &&
    connectDropTarget(<div className={styles.TargetBox}>{children}</div>)
  );
}

export default DropTarget('box', boxTarget, collect)(TargetBox);
