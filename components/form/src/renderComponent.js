import React, { createElement } from 'react';

function renderComponent(props) {
  const { label, component, error, status, children, renderField, ...rest} = props;

  if (status === 'hide') return null;

  let child;

  if (component) {
    child = createElement(component, {children, ...rest})
  } else if (children) {
    child = React.cloneElement(children, {...rest})
  }

  if (renderField) {
    return renderField(label, child, error);
  }

  return (
    <div>
      <div>{label}</div>
      <div>{child}</div>
      <div>{error}</div>
    </div>
  )
}

export default renderComponent;