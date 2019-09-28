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
import styles from './index.module.scss';

const { Row, Col } = Grid;
const { RangePicker } = DatePicker;

let form;
function CustomForm(props) {
  const { value, config, extraContent, hasAdvance, handleReset } = props;

  const formChange = (formValue) => {
    props.formChange(formValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateAll((errors, values) => {
      props.handleSubmit(errors, values);
    });
  };

  const renderInput = (item) => {
    return (
      <Col l="8" key={item.label}>
        <div className={styles.formItem}>
          <span className={styles.formLabel}>
            {item.label}
：
          </span>
          <IceFormBinder {...item.formBinderProps}>
            <Input {...item.componentProps} className={styles.inputProp} />
          </IceFormBinder>
          <div className={styles.formError}>
            <IceFormError name={item.formBinderProps.name} />
          </div>
        </div>
      </Col>
    );
  };

  const renderCheckbox = (item) => {
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

  const renderDatePicker = (item) => {
    return (
      <Col l="8" key={item.label}>
        <div className={styles.formItem}>
          <span className={styles.formLabel}>
            {item.label}
：
          </span>
          <IceFormBinder {...item.formBinderProps}>
            <RangePicker {...item.componentProps} className={styles.inputProp} />
          </IceFormBinder>
        </div>
      </Col>
    );
  };

  const renderSelect = (item) => {
    return (
      <Col l="8" key={item.label}>
        <div className={styles.formItem}>
          <span className={styles.formLabel}>
            {item.label}
：
          </span>
          <IceFormBinder {...item.formBinderProps}>
            <Select {...item.componentProps} className={styles.inputProp} />
          </IceFormBinder>
        </div>
      </Col>
    );
  };

  const renderFromItem = (formConfig) => {
    return formConfig.map((item) => {
      if (item.component === 'Input') {
        return renderInput(item);
      } if (item.component === 'Checkbox') {
        return renderCheckbox(item);
      } if (item.component === 'Select') {
        return renderSelect(item);
      } if (item.component === 'RangePicker') {
        return renderDatePicker(item);
      }
      return null;
    });
  };

  return (
    <div className={styles.formContainer}>
      <IceFormBinderWrapper
        value={value}
        onChange={formChange}
        ref={formRef => form = formRef}
      >
        <div className={styles.formItems}>
          <Row wrap gutter={40}>
            {renderFromItem(config)}
          </Row>
          <div className={styles.buttons}>
            <Button
              type="primary"
              className={styles.primaryBtn}
              onClick={handleSubmit}
            >
              搜 索
            </Button>
            <Button type="normal" onClick={handleReset}>
              重 置
            </Button>
          </div>
          {hasAdvance ? extraContent : null}
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
