/* eslint react/no-string-refs:0 */
import React, { Component } from 'react';
import { Grid, Input, Select } from '@alifd/next';
import {
  FormBinderWrapper as IceFormBinderWrapper,
  FormBinder as IceFormBinder,
} from '@icedesign/form-binder';
import styles from './index.module.scss';

const { Row, Col } = Grid;
const { Option } = Select;

export default class TableFilter extends Component {
  static displayName = 'TableFilter';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {
      value: {},
    };
  }

  formChange = (value) => {
    this.props.onChange(value);
  };

  renderSelect = (item) => {
    return (
      <Col span="8">
        <div className={styles.formItem}>
          <span className={styles.formLabel}>{item.label}：</span>
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

  renderInput = (item) => {
    return (
      <Col span="8" key={item.formBinderProps.name}>
        <div className={styles.formItem}>
          <span className={styles.formLabel}>{item.label}：</span>
          <IceFormBinder {...item.formBinderProps}>
            <Input {...item.componnetProps} />
          </IceFormBinder>
        </div>
      </Col>
    );
  };

  renderFormItem = (item) => {
    if (item.component === 'Input') {
      return this.renderInput(item);
    } else if (item.component === 'Select') {
      return this.renderSelect(item);
    }
    return null;
  };

  render() {
    const { config } = this.props;

    return (
      <IceFormBinderWrapper
        value={this.state.value}
        onChange={this.formChange}
        ref="form"
      >
        <Row wrap gutter="20" className={styles.formRow}>
          {config.map(this.renderFormItem)}
        </Row>
      </IceFormBinderWrapper>
    );
  }
}


