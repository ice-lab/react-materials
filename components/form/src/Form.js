import React from 'react';
import FormContext from './context';
import FormCore from './FormCore';

class Form extends React.Component {
  constructor(props) {
    super(props)
    const {initialValues, rules, linkages, onSubmit} = props
    this.store = new FormCore({ initialValues, rules, linkages, onSubmit });

    // 自定义 Field 布局
    if (props.renderField) {
      this.store.setRenderField(props.renderField);
    }
  }

  handleSubmit = event => {
    if (event) {
      // sometimes not true, e.g. React Native
      if (typeof event.preventDefault === 'function') {
        event.preventDefault()
      }
      if (typeof event.stopPropagation === 'function') {
        // prevent any outer forms from receiving the event too
        event.stopPropagation()
      }
    }
    return this.store.submit();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.initialValues !== this.props.initialValues) {
      this.store.setValue(this.props.initialValues);
    }
  }

  render() {
    const {initialValues, onSubmit, children, rules, linkages, renderField, ...rest} = this.props;
    return (
      <FormContext.Provider value={this.store}>
        <form 
          onSubmit={this.handleSubmit}
          {...rest}
        >
          { typeof children === 'function' 
              ? children({...this.store, handleSubmit: this.handleSubmit})
              : children
          }
        </form>
      </FormContext.Provider>
    )
  }
}

export default Form;