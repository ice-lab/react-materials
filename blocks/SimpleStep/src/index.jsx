import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Step, Button } from '@alifd/next';
import styles from './index.module.scss';

const { Item: StepItem } = Step;
const { Group: ButtonGroup } = Button;

export default function SimpleStep() {
  const [currentStep, setCurrentStep] = useState(3);

  const next = () => {
    setCurrentStep(currentStep + 1 > 6 ? 6 : currentStep + 1);
  };

  const prev = () => {
    setCurrentStep(currentStep - 1 < 0 ? 0 : currentStep - 1);
  };

  const onClick = (currentStep) => {
    console.log(currentStep);
    setCurrentStep(currentStep);
  };

  return (
    <IceContainer title="步骤条">
      <Step current={currentStep}>
        <StepItem title="步骤1" onClick={onClick} />
        <StepItem title="步骤2" onClick={onClick} />
        <StepItem title="步骤3" onClick={onClick} />
        <StepItem title="步骤4" onClick={onClick} />
        <StepItem title="步骤5" onClick={onClick} />
        <StepItem title="步骤6" onClick={onClick} />
      </Step>
      <div className={styles.buttonGroup}>
        <ButtonGroup>
          <Button
            onClick={prev}
            type="primary"
            disabled={currentStep === 0}
          >
            上一步
          </Button>
          <Button
            onClick={next}
            type="primary"
            disabled={currentStep === 5}
          >
            下一步
          </Button>
        </ButtonGroup>
      </div>
    </IceContainer>
  );
}
