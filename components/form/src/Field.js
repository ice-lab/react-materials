import React from 'react';
import FormContext from './context';
import renderField from './renderField';
import getComponentProps from './getComponentProps';

class Field extends React.Component {
  constructor(props, context) {
    super(props, context);
    const store = context;

    const { name, rules, effects, value, defaultValue, format } = props;

    const componentProps = getComponentProps(props);
    store.setFieldProps(name, componentProps);
    !!rules && store.addRules(name, rules);
    !!effects && store.addEffects(name, effects);
    !!status && store.setStatus(name, status, false);

    const isCheckbox = props.type && props.type === 'checkbox';
    const isRadio = props.type && props.type === 'radio';
    if (isCheckbox || isRadio && !value) {
      throw new Error("'value' prop is required for type='checkbox' and type='radio'.");
    }
    if (value) {
      if (isCheckbox) {
        const currentValue = store.getFieldValue(name) || [];
        if (props.checked) {
          currentValue.push(value);
        }
        store.setFieldValueWithoutNotify(name, currentValue);
      } else if (isRadio) {
        if (props.checked) {
          store.setFieldValueWithoutNotify(name, value);
        }
      } else {
        store.setFieldValueWithoutNotify(name, value);
      }
    }
    if (defaultValue) {
      store.setFieldValueWithoutNotify(name, defaultValue);
    }

    this.state = {
      value: format ? format(store.getFieldValue(name)) : store.getFieldValue(name),
      error: store.getFieldError(name),
      componentProps: store.getFieldProps(name),
    };
  }

  componentDidMount() {
    const store = this.context;
    const { name, format } = this.props;
    this.unsubscribe = store.subscribe(n => {
      if (n === name || n === '*') {
        this.setState({
          value: format ? format(store.getFieldValue(name)) : store.getFieldValue(name),
          error: store.getFieldError(name),
          componentProps: store.getFieldProps(name),
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
    const { name } = this.props;

    if (!name) {
      throw new Error(
        'Must specify a name prop to a Field whose value is changeable.'
      );
    }

    let value;

    if (e && e.target && e.target.type === 'checkbox') {
      const checked = e.target.checked;
      value = e.target.value;
      let currentValue = store.getFieldValue(name) || [];
      if (checked) {
        currentValue.push(value);
      } else {
        const index = currentValue.indexOf(value);
        if (index !== -1) {
          currentValue = currentValue.slice(0, index).concat(currentValue.slice(index + 1));
        }
      }
      store.setFieldValue(name, currentValue, store);
    } else {
      value = e && e.target
        ? e.target.value
        : e;
      store.setFieldValue(name, value, store);
    }
    store.onChange(store.getValues(), { name, value });
  }

  render() {
    const { value, type, component, onChange, children } = this.props;
    const isCheckbox = type && (type === 'checkbox');
    const isRadio = type && (type === 'radio');
    const store = this.context;
    const state = this.state;
    const renderFieldLayout = store.getRenderField();
    const layout = store.getLayout();
    let renderProps = {
      ...state.componentProps,
      renderFieldLayout,
      formLevelLayout: layout,
      error: state.error,
      value: (isCheckbox || isRadio) ? value : (state.value || ''),
    };
    if (isCheckbox) {
      const index = state.value.indexOf(value);
      if (index < 0) {
        renderProps = { ...renderProps, checked: false };
      } else {
        renderProps = { ...renderProps, checked: true };
      }
    }
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
