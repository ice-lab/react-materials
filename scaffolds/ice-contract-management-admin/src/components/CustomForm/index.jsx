/* eslint react/no-string-refs:0, array-callback-return:0, react/forbid-prop-types:0 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Checkbox,
  Input,
  Button,
  Grid,
  Select,
  DatePicker,
} from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';

import styles from './index.module.scss'

const { Row, Col } = Grid;
const { RangePicker } = DatePicker;
let formRef;

function CustomForm(props) {
  const { value, config, extraContent, handleReset } = props;

  function formChange(value) {
    props.formChange(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    formRef.validateAll((errors, values) => {
      props.handleSubmit(errors, values);
    });
  }

  function renderInput(item) {
    return (
      <Col l="8" key={item.label}>
        <div className={styles.formItem}>
          <span className={styles.formLabel}>{item.label}：</span>
          <IceFormBinder {...item.formBinderProps}>
            <Input {...item.componentProps} className={styles.inputw}/>
          </IceFormBinder>
          <div className={styles.formError}>
            <IceFormError name={item.formBinderProps.name} />
          </div>
        </div>
      </Col>
    );
  };

  function renderCheckbox(item) {
    return (
      <Col l="8" key={item.label}>
        <div className={styles.formItem}>
          <IceFormBinder {...item.formBinderProps}>
            <Checkbox {...item.componentProps}>{item.label}</Checkbox>
          </IceFormBinder>
        </div>
      </Col>
    );
  };

  function renderDatePicker(item) {
    return (
      <Col l="8" key={item.label}>
        <div className={styles.formItem}>
          <span className={styles.formLabel}>{item.label}：</span>
          <IceFormBinder {...item.formBinderProps}>
            <RangePicker {...item.componentProps} className={styles.inputw}/>
          </IceFormBinder>
        </div>
      </Col>
    );
  };

  function renderSelect(item) {
    return (
      <Col l="8" key={item.label}>
        <div className={styles.formItem}>
          <span className={styles.formLabel}>{item.label}：</span>
          <IceFormBinder {...item.formBinderProps}>
            <Select {...item.componentProps} style={{ width: '100%' }} />
          </IceFormBinder>
        </div>
      </Col>
    );
  };

  function renderFromItem(config) {
    return config.map((item) => {
      if (item.component === 'Input') {
        return renderInput(item);
      } else if (item.component === 'Checkbox') {
        return renderCheckbox(item);
      } else if (item.component === 'Select') {
        return renderSelect(item);
      } else if (item.component === 'RangePicker') {
        return renderDatePicker(item);
      }
    });
  };

  return (
    <div className={styles.formContainer}>
      <IceFormBinderWrapper
        value={value}
        onChange={formChange}
        ref={(ref) => formRef = ref}
      >
        <div className={styles.formItems}>
          <Row wrap gutter={40}>
            {renderFromItem(config)}
          </Row>
          <div className={styles.buttons}>
            <Button
              type="primary"
              onClick={handleSubmit}
              className={styles.leftbtn}
            >
              搜 索
            </Button>
            <Button type="normal" onClick={handleReset}>
              重 置
            </Button>
          </div>
          {extraContent}
        </div>
      </IceFormBinderWrapper>
    </div>
  );
}

CustomForm.propTypes = {
  value: PropTypes.object.isRequired,
  config: PropTypes.array.isRequired,
  handleSubmit: PropTypes.func,
  formChange: PropTypes.func,
  handleReset: PropTypes.func,
  extraContent: PropTypes.element,
};

CustomForm.defaultProps = {
  extraContent: null,
  handleReset: () => {},
  handleSubmit: () => {},
  formChange: () => {},
};

export default CustomForm;
