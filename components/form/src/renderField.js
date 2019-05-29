import React, { createElement } from 'react';

function renderField(props) {
  const { label, component, error, status, children, fieldLayout, ...rest } = props;

  if (status === 'hide') return null;

  let child;

  if (component) {
    child = createElement(component, { children, ...rest });
  } else if (children) {
    child = React.cloneElement(children, { ...rest });
  }

  if (fieldLayout) {
    return fieldLayout(label, child, error);
  }

  return (
    <div>
      <span>{label}</span>
      <span>{child}</span>
      <span>{error}</span>
    </div>
  );
}

export default renderField;
