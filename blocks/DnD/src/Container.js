import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import SourceBox from './SourceBox';
import TargetBox from './TargetBox';
import styles from './index.module.scss';

function generateSource(component, dropback, index) {
  return (
    <SourceBox dropBack={dropback} index={index} key={index}>
      {component}
    </SourceBox>
  );
}

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listSource: [
        'Sucking at something is the first step towards being sorta good at',
        'People make mistakes. It’s a part of growing up Homies help homies. Always',
        'Sometimes life is scary and dark',
        'Dont you always call sweatpants give up on life pants, Jake?',
      ],
      listTarget: [
        "That's it! The answer was so simple, I was too smart to see it!",
      ],
    };
  }

  renderSource = () => {
    return this.state.listSource.map((item, index) =>
      generateSource(item, this.sourceToTarget, index)
    );
  };

  renderTarget = () => {
    return this.state.listTarget.map((item, index, self) => {
      if (self.length) {
        return generateSource(item, null, index);
      }
      return generateSource(item, this.sourceToTarget, index);
    });
  };

  sourceToTarget = (index) => {
    this.setState((prevState) => {
      return {
        listTarget: [...prevState.listTarget, prevState.listSource[index]],
        listSource: [].concat(
          prevState.listSource.splice(0, index),
          prevState.listSource.splice(index)
        ),
      };
    });
  };

  render() {
    return (
      <div className={styles.listContainer}>
        <div className={styles.list}>
          <div className={styles.listTitle}>List Source</div>
          <div className={styles.listNoe}>
            {this.renderSource()}
          </div>
        </div>
        <div className={styles.list}>
          <div className={styles.listTitle}>List Target</div>
          <TargetBox>{this.renderTarget()}</TargetBox>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Container);