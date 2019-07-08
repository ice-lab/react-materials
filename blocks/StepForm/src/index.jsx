import React, { useState } from 'react';
import IceContainer from '@icedesign/container';
import { Grid, Step, Icon } from '@alifd/next';

import ItemForm from './ItemForm';
import DeliveryForm from './DeliveryForm';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function StepForm() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
  };

  const renderStep = (step) => {
    if (step === 0) {
      return <ItemForm onSubmit={nextStep} />;
    }

    if (step === 1) {
      return <DeliveryForm onSubmit={nextStep} />;
    }

    if (step === 2) {
      return (
        <div className={styles.content}>
          <h2>
            <Icon type="success" className={styles.icon} size="xl" />
            完成发布
          </h2>
        </div>
      );
    }
  };

  return (
    <div className="step-form">
      <IceContainer>
        <Row wrap>
          <Col xxs="24" s="5" l="5" className={styles.formLabel}>
            <Step
              current={step}
              direction="ver"
              shape="dot"
              animation={false}
              className={styles.step}
            >
              <Step.Item title="步骤1" content="录入商品信息" />
              <Step.Item title="步骤2" content="录入物流信息" />
              <Step.Item title="步骤3" content="完成发布" />
            </Step>
          </Col>
          <Col xxs="24" s="18" l="18">
            {renderStep(step)}
          </Col>
        </Row>
      </IceContainer>
    </div>
  );
}
