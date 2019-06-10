/* eslint react/no-string-refs:0, array-callback-return:0, react/forbid-prop-types:0 */
import React, { Component } from 'react';
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

class AuthForm extends Component {
  static displayName = 'AuthForm';

  static propTypes = {
    config: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    links: PropTypes.array,
    handleSubmit: PropTypes.func,
    formChange: PropTypes.func,
  };

  static defaultProps = {
    links: [],
    handleSubmit: () => {},
    formChange: () => {},
  };

  constructor(props) {
    super(props);
    this.state = {
      value: props.initFields,
    };
  }

  formChange = (value) => {
    this.setState(
      {
        value,
      },
      () => {
        this.props.formChange(value);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.refs.form.validateAll((errors, values) => {
      this.props.handleSubmit(errors, values);
    });
  };

  renderButton = (item) => {
    return (
      <Row
        className={`${styles.formItem} ${styles.submitButton}`}
        key={item.label}
      >
        <CustomButton
          {...item.componentProps}
          className={styles.buttonBorder}
          onClick={this.handleSubmit}
        >
          {item.label}
        </CustomButton>
      </Row>
    );
  };

  renderInput = (item) => {
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

  renderCheckbox = (item) => {
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

  renderFromItem = (config) => {
    return config.map((item) => {
      if (item.component === 'Input') {
        return this.renderInput(item);
      } else if (item.component === 'Checkbox') {
        return this.renderCheckbox(item);
      } else if (item.component === 'Button') {
        return this.renderButton(item);
      }
    });
  };

  render() {
    const { title, config, links } = this.props;
    const { value } = this.state;

    return (
      <div className={styles.formContainer}>
        <h4 className={styles.formTitle}>{title}</h4>
        <IceFormBinderWrapper
          value={value}
          onChange={this.formChange}
          ref="form"
        >
          <div className={styles.formItems}>
            {this.renderFromItem(config)}

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
}


export default AuthForm;
