import React, { createElement, cloneElement } from 'react';
import cs from 'classnames';

function renderField(props) {
  const { label, component, error, display, children, renderFieldLayout, errorRender, formLayout, fieldLayout, tips, ...rest } = props;

  if (display === 'hide') return null;

  let child;

  if (component) {
    child = createElement(component, { children, ...rest, className: (error && !errorRender) ? 'next-error' : null });
  } else if (children) {
    child = cloneElement(children, { ...rest });
  }

  if (renderFieldLayout) {
    return renderFieldLayout(label, child, error);
  }

  // layout
  const {
    labelAlign = 'left',
    labelTextAlign = 'right',
    labelCol = 1,
    wrapperCol = 3,
  } = { ...formLayout, ...fieldLayout };

  const fieldLabelClass = cs({
    'ice-field-label': true,
    'ice-field-label-top': labelAlign === 'top',
    'ice-field-label-text-right': labelTextAlign === 'right',
    [`ice-col-${labelCol}`]: true,
  });

  const fieldControlClass = cs({
    'ice-field-control': true,
    [`ice-col-${wrapperCol}`]: true,
  });

  return (
    <div className="ice-field">
      <div className={fieldLabelClass}>{label}</div>
      <div className={fieldControlClass}>
        <div>{child}</div>
        { tips && <div className="ice-field-tips">{tips}</div> }
        { error
          && (
            <div className="ice-field-error">
              {errorRender ? errorRender(error) : error}
            </div>
          )
        }
      </div>
    </div>
  );
}

export default renderField;
