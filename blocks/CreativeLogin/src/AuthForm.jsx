import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Grid } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
  FormError as IceFormError,
} from '@icedesign/form-binder';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import styles from './index.module.scss';

const { Row, Col } = Grid;

export default function AuthForm(props) {
  const { title, config, links } = props;

  const [value, setValue] = useState(props.initFields);
  const formRef = useRef(null);

  const formChange = async (value) => {
    await setValue(value);
    props.formChange(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formRef.current.validateAll((errors, values) => {
      props.handleSubmit(errors, values);
    });
  };

  const renderButton = (item) => {
    return (
      <Row
        className={`${styles.formItem} ${styles.submitButton}`}
        key={item.label}
      >
        <CustomButton
          {...item.componentProps}
          className={styles.buttonBorder}
          onClick={handleSubmit}
        >
          {item.label}
        </CustomButton>
      </Row>
    );
  };

  const renderInput = (item) => {
    return (
      <Row className={styles.formItem} key={item.label}>
        <Col className={styles.formItemCol}>
          <IceFormBinder {...item.formBinderProps}>
            <CustomInput {...item.componentProps} />
          </IceFormBinder>
        </Col>
        <Col>
          <IceFormError name={item.formBinderProps.name} />
        </Col>
      </Row>
    );
  };

  const renderCheckbox = (item) => {
    return (
      <Row className={styles.formItem} key={item.label}>
        <Col>
          <IceFormBinder {...item.formBinderProps}>
            <Checkbox {...item.componentProps}>{item.label}</Checkbox>
          </IceFormBinder>
        </Col>
      </Row>
    );
  };

  const renderFromItem = (config) => {
    return config.map((item) => {
      if (item.component === 'Input') {
        return renderInput(item);
      } else if (item.component === 'Checkbox') {
        return renderCheckbox(item);
      } else if (item.component === 'Button') {
        return renderButton(item);
      }
      return null;
    });
  };

  return (
    <div className={styles.formContainer}>
      <h4 className={styles.formTitle}>{title}</h4>
      <IceFormBinderWrapper
        value={value}
        onChange={formChange}
        ref={formRef}
      >
        <div className={styles.formItems}>
          {renderFromItem(config)}

          {Array.isArray(links) && links.length ? (
            <Row className={styles.footer}>
              {links.map((item, index) => {
                return (
                  <a key={index} href={item.to} className={styles.link}>
                    {item.text}
                  </a>
                );
              })}
            </Row>
          ) : null}
        </div>
      </IceFormBinderWrapper>
    </div>
  );
}

AuthForm.propTypes = {
  config: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  links: PropTypes.array,
  handleSubmit: PropTypes.func,
  formChange: PropTypes.func,
};

AuthForm.defaultProps = {
  links: [],
  handleSubmit: () => {},
  formChange: () => {},
};
