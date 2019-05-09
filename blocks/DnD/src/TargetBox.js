import React, { Component } from 'react';
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

class TargetBox extends Component {
  render() {
    const { connectDropTarget, children } = this.props;
    return (
      connectDropTarget &&
      connectDropTarget(<div className={styles.TargetBox}>{children}</div>)
    );
  }
}

export default DropTarget('box', boxTarget, collect)(TargetBox);
