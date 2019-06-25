import React from 'react';
import FormContext from './context';
import renderField from './renderField';
import getComponentProps from './getComponentProps';

class Field extends React.Component {
  constructor(props, context) {
    super(props, context);
    const store = context;

    const { name, rules, effects, value, defaultValue, setValueFormatter, getValueFormatter } = props;

    const componentProps = getComponentProps(props);
    store.setFieldProps(name, componentProps);
    !!rules && store.addRules(name, rules);
    !!effects && store.addEffects(name, effects);
    !!status && store.setStatus(name, status, false);
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
    const { valueName = 'value', name, component, onChange, children, fieldArrayName, fieldArrayKey } = this.props;
    const store = this.context;
    const state = this.state;
    let value = state.value || '';
    let error = state.error;
    if (fieldArrayName !== undefined) {
      value = store.getFieldValue(fieldArrayName)[fieldArrayKey];
      error = store.getFieldError(fieldArrayName);
    }
    let renderProps = {
      ...store.getFieldProps(name),
      renderFieldLayout: store.getRenderField(),
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

    return renderField(renderProps);
  }
}

Field.contextType = FormContext;

export default Field;
