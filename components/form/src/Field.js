import React from 'react';
import FormContext from './context';
import renderField from './renderField';
import { getDynamicProps } from './utils';

class Field extends React.Component {
  constructor(props, context) {
    super(props, context);
    const store = context;

    const { name, rules, linkages, value, format } = props;

    const dynamicProps = getDynamicProps(props);
    store.setProps(name, dynamicProps);
    !!rules && store.addRules(name, rules);
    !!linkages && store.addLinkages(name, linkages);
    !!status && store.setStatus(name, status, false);

    const isCheckbox = props.type && props.type === 'checkbox';
    const isRadio = props.type && props.type === 'radio';
    if (isCheckbox || isRadio) {
      if (!value) {
        throw new Error("'value' prop is required for type='checkbox' and type='radio'.");
      }
    }
    if (value) {
      if (isCheckbox) {
        const currentValue = store.getValue(name) || [];
        if (props.checked) {
          currentValue.push(value);
        }
        store.setValueWithoutNotify(name, currentValue);
      } else if (isRadio) {
        if (props.checked) {
          store.setValueWithoutNotify(name, value);
        }
      } else {
        store.setValueWithoutNotify(name, value);
      }
    }

    this.state = {
      value: format ? format(store.getValue(name)) : store.getValue(name),
      error: store.getError(name),
      dynamicProps: store.getProps(name),
    };
  }

  componentDidMount() {
    const store = this.context;
    const { name, format } = this.props;
    this.unsubscribe = store.subscribe(n => {
      if (n === name || n === '*') {
        this.setState({
          value: format ? format(store.getValue(name)) : store.getValue(name),
          error: store.getError(name),
          dynamicProps: store.getProps(name),
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

  handleChange = e => {
    const store = this.context;
    const { name } = this.props;

    if (e && e.target && e.target.type === 'checkbox') {
      const checked = e.target.checked;
      const value = e.target.value;
      let currentValue = store.getValue(name) || [];
      if (checked) {
        currentValue.push(value);
      } else {
        const index = currentValue.indexOf(value);
        if (index !== -1) {
          currentValue = currentValue.slice(0, index).concat(currentValue.slice(index + 1));
        }
      }
      store.setValue(name, currentValue);
    } else {
      const value = e && e.target
        ? e.target.value
        : e;
      store.setValue(name, value, store);
    }
  }

  render() {
    const { name, value, type, component, onChange, children } = this.props;
    if (!name) {
      console.error(
        'Warning: Must specify a name prop to a Field.'
      );
      return null;
    }
    const isCheckbox = type && (type === 'checkbox');
    const isRadio = type && (type === 'radio');
    const store = this.context;
    const state = this.state;
    const fieldLayout = store.getFieldLayout();
    let renderProps = {
      ...state.dynamicProps,
      fieldLayout,
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
    if (component || (children && !children.props.onChange)) {
      if (onChange) {
        renderProps = Object.assign({}, renderProps, { onChange });
      } else {
        renderProps = Object.assign({}, renderProps, { onChange: this.handleChange });
      }
    }

    return renderField(renderProps);
  }
}

Field.contextType = FormContext;

export default Field;
