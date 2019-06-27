import React, { createElement, cloneElement } from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

function RenderField(props) {
  const {
    label,
    component,
    error,
    visible,
    children,
    renderField,
    errorRender,
    formLevelLayout,
    layout,
    tips,
    fieldType,
    className,
    style,
    ...rest
  } = props;

  if (!visible) return null;

  let child;

  if (fieldType === 'fieldArray') {
    child = children;
  } else if (component) {
    child = createElement(component, { children, ...rest, className: (error && !errorRender) ? 'next-error' : null });
  } else if (children) {
    if (React.Children.toArray(children).length > 1) {
      child = children;
    } else {
      child = cloneElement(children, { ...rest });
    }
  }

  if (renderField) {
    return renderField({ label, component: child, error });
  }

  // layout
  const {
    labelAlign = 'left',
    labelTextAlign = 'right',
    labelCol = 2,
    wrapperCol = 6,
  } = { ...formLevelLayout, ...layout };

  const fieldLabelClass = cs({
    'ice-field-label-text-right': labelTextAlign === 'right',
    [`ice-col-${labelCol}`]: true,
    'ice-field-label-top': labelAlign === 'top',
    'ice-field-label': true,
  });

  const fieldControlClass = cs({
    [`ice-col-${wrapperCol}`]: true,
    'ice-field-control': true,
  });

  return (
    <div className={className ? `ice-field ${className}` : 'ice-field'} style={style}>
      { (label !== null) && <div className={fieldLabelClass}>{label}</div> }
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

RenderField.propTypes = {
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  name: PropTypes.string,
  visible: PropTypes.bool,
  renderField: PropTypes.func,
  errorRender: PropTypes.func,
  formLevelLayout: PropTypes.object,
  layout: PropTypes.object,
  tips: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  fieldType: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

RenderField.defaultProps = {
  label: null,
  error: null,
  name: null,
  visible: true,
  renderField: null,
  errorRender: null,
  formLevelLayout: {},
  layout: {},
  tips: null,
  fieldType: '',
  className: '',
  style: {},
};

export default RenderField;
