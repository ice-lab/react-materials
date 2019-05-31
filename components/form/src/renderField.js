import React, { createElement, cloneElement } from 'react';

function renderField(props) {
  const { label, component, error, display, children, renderFieldLayout, ...rest } = props;

  if (display === 'hide') return null;

  let child;

  if (component) {
    child = createElement(component, { children, ...rest });
  } else if (children) {
    child = cloneElement(children, { ...rest });
  }

  if (renderFieldLayout) {
    return renderFieldLayout(label, child, error);
  }

  return (
    <div className="ice-field">
      <span className="ice-field-label">{label}</span>
      <span className="ice-field-content">{child}</span>
      <span className="ice-field-error">{error}</span>
    </div>
  );
}

export default renderField;
