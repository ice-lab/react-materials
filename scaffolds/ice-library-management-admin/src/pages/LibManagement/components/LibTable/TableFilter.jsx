import React, { useState } from 'react';
import { Grid, Input, Select } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const { Option } = Select;

export default function TableFilter(props) {
  /* eslint-disable */
  const [value, setValue] = useState({});
  /* eslint-enable */

  const formChange = (v) => {
    props.onChange(v);
  };

  const renderSelect = (item) => {
    return (
      <Col span="8">
        <div className={styles.formItem}>
          <span className={styles.formLabel}>
            {item.label}
：
          </span>
          <IceFormBinder {...item.formBinderProps}>
            <Select
              mode="multiple"
              size="large"
              className={styles.selectMin}
              {...item.componnetProps}
            >
              {item.options.map((option, index) => {
                return (
                  <Option key={index} value={option.value}>
                    {option.name}
                  </Option>
                );
              })}
            </Select>
          </IceFormBinder>
        </div>
      </Col>
    );
  };

  const renderInput = (item) => {
    return (
      <Col span="8" key={item.formBinderProps.name}>
        <div className={styles.formItem}>
          <span className={styles.formLabel}>
            {item.label}
：
          </span>
          <IceFormBinder {...item.formBinderProps}>
            <Input {...item.componnetProps} />
          </IceFormBinder>
        </div>
      </Col>
    );
  };

  const renderFormItem = (item) => {
    if (item.component === 'Input') {
      return renderInput(item);
    } if (item.component === 'Select') {
      return renderSelect(item);
    }
    return null;
  };

  const { config } = props;

  return (
    <IceFormBinderWrapper
      value={value}
      onChange={formChange}
    >
      <Row wrap gutter="20" className={styles.formRow}>
        {config.map(renderFormItem)}
      </Row>
    </IceFormBinderWrapper>
  );
}
