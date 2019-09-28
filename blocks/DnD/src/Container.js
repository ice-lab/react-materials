import React, { useState } from 'react';
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

function Container() {
  const [listSource, setListSource] = useState([
    'Sucking at something is the first step towards being sorta good at',
    'People make mistakes. It’s a part of growing up Homies help homies. Always',
    'Sometimes life is scary and dark',
    'Dont you always call sweatpants give up on life pants, Jake?',
  ]);
  const [listTarget, setListTarget] = useState([
    "That's it! The answer was so simple, I was too smart to see it!",
  ]);

  const renderSource = () => {
    return listSource.map((item, index) =>
      generateSource(item, sourceToTarget, index)
    );
  };

  const renderTarget = () => {
    return listTarget.map((item, index, self) => {
      if (self.length) {
        return generateSource(item, null, index);
      }
      return generateSource(item, sourceToTarget, index);
    });
  };

  const sourceToTarget = (index) => {
    setListSource([...listTarget, listSource[index]]);
    setListTarget([].concat(
      listSource.splice(0, index),
      listSource.splice(index)
    ));
  };

  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        <div className={styles.listTitle}>List Source</div>
        <div className={styles.listNoe}>
          {renderSource()}
        </div>
      </div>
      <div className={styles.list}>
        <div className={styles.listTitle}>List Target</div>
        <TargetBox>{renderTarget()}</TargetBox>
      </div>
    </div>
  );
}

export default DragDropContext(HTML5Backend)(Container);
