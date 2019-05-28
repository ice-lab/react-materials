import React, {Component, useRef, useState, useEffect, useCallback} from 'react';
import FormContext from './context';
import renderComponent from './renderComponent';

class Field extends Component {
  constructor(props, context) {
    super(props, context);
    const store = context;

    const {name, rules, linkages, status, value, format} = props;

    this.format = format;

    !!rules && store.addRules(name, rules);
    !!linkages && store.addLinkages(name, linkages);
    !!status && store.setStatus(name, status, false);
    !!value && store.setValueWithoutNotify(name, value);

    this.state = {
      value: this.format? this.format(store.getValue(name)) : store.getValue(name),
      error: store.getError(name),
      status: store.getStatus(name),
    };
  }

  componentDidMount() {
    const store = this.context;
    const { name } = this.props;
    this.unsubscribe = store.subscribe(n => {
      const name = this.props.name;
      if (n === name || n === '*') {
        this.setState({
          value: this.format? this.format(store.getValue(name)) : store.getValue(name),
          error: store.getError(name),
          status: store.getStatus(name)
        })
      }
    })
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      // console.log('unsubscribe')
      this.unsubscribe();
    }
  }

  getValue(e) {
    const target = e.target,
          type = target.type,
          value = target.value,
          checked = target.checked;

    if (type === 'checkbox') {
      if (!value) {
        throw new Error('value prop is required for checkbox');
      }
      let currentValue = this.context.getValue(this.props.name);
      if (checked) {
        return Array.isArray(currentValue) ? currentValue.concat(value) : [value];
      } else {
        if (!Array.isArray(currentValue)) {
          return currentValue;
        }
        const index = currentValue.indexOf(value);
        if (index < 0) {
          return currentValue;
        } else {
          return currentValue.slice(0, index).concat(currentValue.slice(index + 1));
        }
      }
    } else {
      return value
    }
  }

  handleChange = e => {
    const store = this.context;
    const value = e && e.target
                    ? this.getValue(e)
                    : e;
    store.setValue(this.props.name, value, store);
  } 

  render() {
    const {name, label, component, children, status, linkages, rules, value, format, ...rest} = this.props;
    if (!name) {
      console.error(
        `Warning: Must specify a name prop to a Field.`
      )
      return null;
    }
    const renderField = this.context.getRenderField();
    let renderProps = {
      name,
      label,
      component,
      children,
      renderField,
      error: this.state.error,
      status: this.state.status,
      value: this.state.value || '',
      ...rest
    };
    if (component || (children && !children.props.onChange)) {
      renderProps = Object.assign({}, renderProps, { onChange: this.handleChange })
    }
    return renderComponent(renderProps);
  }
}

Field.contextType = FormContext;

export default Field;