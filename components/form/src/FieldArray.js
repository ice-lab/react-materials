import React from 'react';
import Field from './Field';

class FieldArray extends React.Component {
  render() {
    const { name, value = [], children, ...rest } = this.props;
    let key = 0;
    const childrenWithFieldArrayProps = React.Children.map(children, child => {
      if (child.type === Field) {
        return React.cloneElement(child, { fieldArrayName: name, fieldArrayKey: key++ });
      }
      return React.cloneElement(child);
    });

    return (
      <Field name={name} value={value} fieldType="fieldArray" {...rest}>
        {childrenWithFieldArrayProps}
      </Field>
    );
  }
}

export default FieldArray;
