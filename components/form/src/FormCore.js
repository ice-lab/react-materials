import Schema from 'async-validator';
import find from 'lodash.find';
import isEqual from 'lodash.isequal';
import { getField, hasAnyError } from './utils';

export default class FormCore {
  constructor({ initialValues = {}, rules = {}, linkages = [], onSubmit }) {
    this.onSubmit = onSubmit;
    this.initialValues = Object.keys(initialValues).length > 0 ? { ...initialValues } : {};
    this.values = { ...this.initialValues };
    this.errors = {};
    this.status = {}; // field 显示/隐藏
    this.props = {};

    this.rules = rules;
    this.linkages = linkages;
    this.linkageField = getField(linkages); // 联动监听的 field 列表
    this.listeners = [];
    this.validators = {};
    this.fieldLayout = null;
  }

  get pristine() {
    return isEqual(this.initialValues, this.values);
  }

  getFieldLayout() {
    return this.fieldLayout;
  }

  setFieldLayout(layout) {
    this.fieldLayout = layout;
  }

  addRules(name, rules) {
    if (!this.rules[name]) {
      this.rules[name] = Array.isArray(rules) ? rules : [rules];
    } else {
      this.rules[name] = this.rules[name].concat(rules);
    }
  }

  addLinkages(name, linkages) {
    if (find(this.linkages, { field: name })) return;
    linkages.field = name;
    this.linkages.push(linkages);
  }

  setStatus(name, status, notify) {
    this.status[name] = status;
    if (notify !== false) {
      this.notify(name);
    }
  }

  getStatus(name) {
    return name && this.status[name];
  }

  getProps(name) {
    return name && (this.props[name] || {});
  }

  setProps(name, prop) {
    if (!this.props[name]) {
      this.props[name] = {};
    }
    this.props[name] = { ...this.props[name], ...prop };
    this.notify(name);
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index !== -1) this.listeners.splice(index, 1);
    };
  }

  notify(name) {
    this.listeners.forEach(listener => listener(name));
  }

  getValue(name) {
    return name ? this.values[name] : this.values;
  }

  setValue(name, value, store) {
    // set field value
    if (typeof name === 'string') {
      this.values[name] = value;
      this.validate(name);
      this.notify(name);

      // linkage
      const linkage = find(this.linkages, { field: name });
      if (linkage) {
        store && linkage.handler(store);
      }
    } else if (Object.prototype.toString.call(name) === '[object Object]') {
      const values = name;
      Object.keys(values).forEach(key => this.setValue(key, values[key]));
    }
  }

  setValueWithoutNotify(name, value) {
    name && (this.values[name] = value);
  }

  getError(name) {
    return name ? this.errors[name] : this.errors;
  }

  setError(name, errorMsg, notify) {
    // set field errorMsg
    if (typeof name === 'string') {
      this.errors[name] = errorMsg;
      !notify && this.notify(name);
    } else if (Object.prototype.toString.call(name) === '[object Object]') {
      const errors = name;
      Object.keys(errors).forEach(key => this.setError(key, errors[key]));
    }
  }

  reset(event) {
    if (event) {
      if (typeof event.preventDefault === 'function') {
        event.preventDefault();
      }
      if (typeof event.stopPropagation === 'function') {
        event.stopPropagation();
      }
    }
    this.values = Object.assign({}, this.initialValues);
    this.errors = {};
    this.notify('*');
  }

  submit(event) {
    if (event) {
      // sometimes not true, e.g. React Native
      if (typeof event.preventDefault === 'function') {
        event.preventDefault();
      }
      if (typeof event.stopPropagation === 'function') {
        // prevent any outer forms from receiving the event too
        event.stopPropagation();
      }
    }
    const values = this.getValue();
    this.validate();
    const errors = this.getError();
    if (!hasAnyError(errors)) return this.onSubmit(values);
  }

  validate(name) {
    if (!name) {
      Object.keys(this.rules).forEach(field => this.validate(field));
      this.notify('*');
      return;
    }

    // 不存在的 Field 不做检验
    if (this.status[name] === 'hide') return;

    // 没有 rules 的不需校验
    if (!this.rules[name]) return;

    if (!this.validators[name]) {
      const descriptor = { [name]: this.rules[name] };
      const validator = new Schema(descriptor);
      this.validators[name] = validator;
    }

    const value = this.getValue(name);

    try {
      this.validators[name].validate({ [name]: value }, (errors, fields) => {
        if (errors) {
          // validation failed, errors is an array of all errors
          // fields is an object keyed by field name with an array of
          // errors per field
          // console.error(errors, fields);
          this.setError(name, fields[name][0].message);
        } else {
          // validation passed
          this.setError(name, undefined);
        }
      });
    } catch (e) {
      // validation failed
      console.error(e);
    }
  }
}
