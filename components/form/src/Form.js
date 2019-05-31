import React from 'react';
import FormContext from './context';
import FormCore from './FormCore';

class Form extends React.Component {
  constructor(props) {
    super(props);
    const { initialValues, rules, linkages, onSubmit } = props;
    this.store = new FormCore({ initialValues, rules, linkages, onSubmit });

    this.state = {
      renderField: undefined,
      store: this.store,
    };
  }

  onSubmit = event => this.store.submit(event);

  static getDerivedStateFromProps(nextProps, prevState) {
    // set renderField before render
    if (nextProps.renderField !== prevState.renderField) {
      prevState.store.setConfig('renderField', nextProps.renderField);
      return { renderField: nextProps.someValue };
    }
    return null;
  }

  componentDidUpdate(prevProps) {
    const { initialValues, rules, linkages, onSubmit } = this.props;
    if (prevProps.rules !== rules) {
      this.store.setConfig('rules', rules);
    }
    if (prevProps.linkages !== linkages) {
      this.store.setConfig('linkages', linkages);
    }
    if (prevProps.onSubmit !== onSubmit) {
      this.store.setConfig('onSubmit', onSubmit);
    }
    if (prevProps.initialValues !== initialValues) {
      this.store.setValues(initialValues);
    }
  }

  render() {
    const { initialValues, onSubmit, children, rules, linkages, renderField, ...rest } = this.props;
    return (
      <FormContext.Provider value={this.store}>
        <form
          onSubmit={this.onSubmit}
          {...rest}
        >
          { typeof children === 'function'
            ? children(this.store)
            : children
          }
        </form>
      </FormContext.Provider>
    );
  }
}

export default Form;
