import React from 'react';
import PropTypes from 'prop-types';

import FormContext from './context';
import RenderField from './RenderField';
import getComponentProps from './getComponentProps';

class Field extends React.Component {
  constructor(props, context) {
    super(props, context);
    const store = context;

    const { name, rules, effects, value, defaultValue, setValueFormatter, getValueFormatter } = props;

    const componentProps = getComponentProps({ visible: true, ...props });
    store.setFieldProps(name, componentProps);
    !!rules && store.addRules(name, rules);
    !!effects && store.addEffects(name, effects);
    !!value && store.setFieldValueWithoutNotify(name, getValueFormatter ? getValueFormatter(value) : value);
    !!defaultValue && store.setFieldValueWithoutNotify(name, getValueFormatter ? getValueFormatter(defaultValue) : defaultValue);

    // with prop getValueFormatter, use renderValue to render
    this.renderValue = undefined;
    this.state = {
      value: setValueFormatter ? setValueFormatter(store.getFieldValue(name)) : store.getFieldValue(name),
      error: store.getFieldError(name),
    };
  }

  componentDidMount() {
    const store = this.context;
    const { name, setValueFormatter } = this.props;
    this.unsubscribe = store.subscribe(n => {
      if (n === name || n === '*') {
        const value = this.renderValue ? this.renderValue : store.getFieldValue(name);
        const error = store.getFieldError(name);
        this.setState({
          value: setValueFormatter ? setValueFormatter(value) : value,
          error,
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      // console.log('unsubscribe')
      this.unsubscribe();
    }
  }

  onChange = e => {
    const store = this.context;
    const { name, getValueFormatter, fieldArrayName, fieldArrayKey } = this.props;

    if (!name) {
      throw new Error(
        'Must specify a name prop to a Field whose value is changeable.'
      );
    }

    const getTargetValue = target => {
      const type = target.type;
      let value;
      switch (type) {
        case 'radio':
        case 'checkbox':
          value = target.checked;
          break;
        default:
          value = target.value;
      }
      return value;
    };

    let value = e && e.target
      ? getTargetValue(e.target)
      : e;

    if (getValueFormatter) {
      this.renderValue = value;
    }

    if (fieldArrayName !== undefined) {
      const fieldArrayValue = store.getFieldValue(fieldArrayName);
      fieldArrayValue[fieldArrayKey] = value;
      value = fieldArrayValue;

      const fieldArrayGetValueFormatter = store.getFieldProps(fieldArrayName).getValueFormatter;
      store.setFieldValueWithoutNotify(fieldArrayName, fieldArrayGetValueFormatter ? fieldArrayGetValueFormatter(value) : value, store);
      store.notify(name);
    } else {
      store.setFieldValue(name, getValueFormatter ? getValueFormatter(value) : value, store);
    }

    store.onChange(store.getValues(), { name, value });
  }

  render() {
    const { valueName, name, component, onChange, children, fieldArrayName, fieldArrayKey } = this.props;
    const store = this.context;
    const state = this.state;
    let { value, error } = state;
    if (fieldArrayName !== undefined) {
      value = store.getFieldValue(fieldArrayName)[fieldArrayKey];
      error = store.getFieldError(fieldArrayName);
    }
    let renderProps = {
      ...store.getFieldProps(name),
      renderField: store.getRenderField(),
      formLevelLayout: store.getLayout(),
      error,
      [valueName]: value,
    };

    if (component || (children && children.props && !children.props.onChange)) {
      if (onChange) {
        renderProps = Object.assign({}, renderProps, { onChange });
      } else {
        renderProps = Object.assign({}, renderProps, { onChange: this.onChange });
      }
    }

    return <RenderField {...renderProps} />;
  }
}

Field.contextType = FormContext;

Field.propTypes = {
  name: PropTypes.string,
  valueName: PropTypes.string,
  rules: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  effects: PropTypes.object,
  onChange: PropTypes.func,
  setValueFormatter: PropTypes.func,
  getValueFormatter: PropTypes.func,
};

Field.defaultProps = {
  name: null,
  valueName: 'value',
  rules: null,
  effects: null,
  onChange: null,
  setValueFormatter: null,
  getValueFormatter: null,
};

export default Field;
