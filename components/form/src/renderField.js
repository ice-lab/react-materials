import React, { createElement } from 'react';

function renderField(props) {
  const { label, component, error, display, children, renderFieldLayout, ...rest } = props;

  if (display === 'hide') return null;

  let child;

  if (component) {
    child = createElement(component, { children, ...rest });
  } else if (children) {
    child = React.cloneElement(children, { ...rest });
  }

  if (renderFieldLayout) {
    return renderFieldLayout(label, child, error);
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
