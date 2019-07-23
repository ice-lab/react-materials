import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Input, Button, Grid, Select, DatePicker } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import { FormattedMessage } from 'react-intl';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const { RangePicker } = DatePicker;

export default function CustomForm(props) {
  const { value, config, extraContent, handleReset } = props;
  let form;

  function handleSubmit(e) {
    e.preventDefault();
    form.validateAll((errors, values) => {
      props.handleSubmit(errors, values);
    });
  }

  function renderInput(item) {
    return (
      <Col xs="12" l="8" key={item.label}>
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
  }

  function renderCheckbox(item) {
    return (
      <Col xs="12" l="8" key={item.label}>
        <div className={styles.formItem}>
          <IceFormBinder {...item.formBinderProps}>
            <Checkbox {...item.componentProps}>{item.label}</Checkbox>
          </IceFormBinder>
        </div>
      </Col>
    );
  }

  function renderDatePicker(item) {
    return (
      <Col xs="12" l="8" key={item.label}>
        <div className={styles.formItem}>
          <span className={styles.formLabel}>{item.label}：</span>
          <IceFormBinder {...item.formBinderProps}>
            <RangePicker {...item.componentProps} style={{ width: '100%' }} />
          </IceFormBinder>
        </div>
      </Col>
    );
  }

  function renderSelect(item) {
    return (
      <Col xs="12" l="8" key={item.label}>
        <div className={styles.formItem}>
          <span className={styles.formLabel}>{item.label}：</span>
          <IceFormBinder {...item.formBinderProps}>
            <Select {...item.componentProps} style={{ width: '100%' }} />
          </IceFormBinder>
        </div>
      </Col>
    );
  }

  function renderFromItem(dataConfig) {
    return dataConfig.map((item) => {
      if (item.component === 'Input') {
        return renderInput(item);
      } else if (item.component === 'Checkbox') {
        return renderCheckbox(item);
      } else if (item.component === 'Select') {
        return renderSelect(item);
      } else if (item.component === 'RangePicker') {
        return renderDatePicker(item);
      }
      return null;
    });
  }

  return (
    <div className={styles.formContainer}>
      <IceFormBinderWrapper value={value} ref={formRef => (form = formRef)}>
        <div className={styles.formItems}>
          <Row wrap>
            {renderFromItem(config)}
          </Row>
          <div className={styles.buttons}>
            <Button
              type="primary"
              style={{ marginRight: '10px' }}
              onClick={handleSubmit}
            >
              <FormattedMessage id="app.general.table.btn.search" />
            </Button>
            <Button type="normal" onClick={handleReset}>
              <FormattedMessage id="app.general.table.btn.reset" />
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
  handleReset: PropTypes.func,
  extraContent: PropTypes.element,
};
CustomForm.defaultProps = {
  extraContent: null,
  handleReset: () => {},
  handleSubmit: () => {},
};
