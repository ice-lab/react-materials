import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Input, Button, Grid, Select, DatePicker } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const { RangePicker } = DatePicker;

function CustomForm(props) {
  const formEl = useRef(null);

  const formChange = (value) => {
    props.formChange(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formEl.current.validateAll((errors, values) => {
      props.handleSubmit(errors, values);
    });
  };

  const renderInput = (item) => {
    return (
      <Col l="8" key={item.label}>
        <div className={styles.formItem}>
          <span className={styles.formLabel}>{item.label}：</span>
          <IceFormBinder {...item.formBinderProps}>
            <Input {...item.componentProps} style={{ width: '100%' }} />
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
          <span className={styles.formLabel}>{item.label}：</span>
          <IceFormBinder {...item.formBinderProps}>
            <RangePicker {...item.componentProps} style={{ width: '100%' }} />
          </IceFormBinder>
        </div>
      </Col>
    );
  };

  const renderSelect = (item) => {
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

  const renderFromItem = (config) => {
    return config.map((item) => {
      let content = null;
      switch (item.component) {
        case 'Input':
          content = renderInput(item);
          break;
        case 'Checkbox':
          content = renderCheckbox(item);
          break;
        case 'Select':
          content = renderSelect(item);
          break;
        case 'RangePicker':
          content = renderDatePicker(item);
          break;
        default:
          break;
      }
      return content;
    });
  };

  const { value, config, extraContent, hasAdvance, handleReset } = props;

  return (
    <div className={styles.formContainer}>
      <IceFormBinderWrapper
        value={value}
        onChange={formChange}
        ref={formEl}
      >
        <div className={styles.formItems}>
          <Row wrap gutter={40}>
            {renderFromItem(config)}
          </Row>
          <div className={styles.buttons}>
            <Button
              type="primary"
              style={{ marginRight: '10px' }}
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
  // eslint-disable-next-line react/forbid-prop-types
  value: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
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
