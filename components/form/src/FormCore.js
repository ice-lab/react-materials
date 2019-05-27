import schema from 'async-validator';
import find from 'lodash.find';

const hasAnyError = function hasAnyError(errors) {
  return Object.keys(errors).some(function (key) {
    var value = errors[key];

    if (value && typeof value === 'object') {
      return hasAnyError(value);
    }

    return typeof value !== 'undefined';
  });
};
export default class FormCore {
  constructor({initialValues = {}, rules = {}, linkages = [], onSubmit}) {
    this.onSubmit = onSubmit;
    this.initialValues = Object.keys(initialValues).length > 0 ? {...initialValues} : {};
    this.values = {...this.initialValues};
    this.errors = {};
    this.status = {}; // field 显示/隐藏

    this.rules = rules;
    this.linkages = linkages;
    this.linkageField = this._getField(linkages); // 联动监听的 field 列表
    this.listeners = [];
    this.validators = {};
    this.renderField = null;
  }

  getRenderField() {
    return this.renderField;
  }

  setRenderField(layout) {
    this.renderField = layout;
  }

  _getField(linkages) {
    if (linkages.length === 0) return [];
    let fields = [];
    linkages.forEach(item => {
      fields.push(item.field);
    });
    return fields;
  }

  addRules(name, rules) {
    if (!this.rules[name]) {
      this.rules[name] = rules;
    } else {
      this.rules[name] = this.rules[name].concat(rules)
    }
  }

  addLinkages(name, linkages) {
    if (!!find(this.linkages, { field: name })) return;
    linkages.field = name;
    this.linkages.push(linkages)
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

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      const index = this.listeners.indexOf(listener);
      if (index !== -1) this.listeners.splice(index, 1);
    }
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
      const linkage = find(this.linkages, { field: name })
      if (!!linkage) {
        store && linkage.handler(store);
      }
    } 
    // set form values
    else if (Object.prototype.toString.call(name) === '[object Object]') {
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
      notify && this.notify(name);
    } 
    // set form values
    else if (Object.prototype.toString.call(name) === '[object Object]') {
      const errors = name;
      Object.keys(errors).forEach(key => this.setError(key, errors[key]));
    }
  }

  reset() {
    this.values = Object.assign({}, this.initialValues);
    this.errors = {};
    this.notify('*');
  }

  submit() {
    const values = this.getValue();
    this.validate();
    const errors = this.getError();
    if (!hasAnyError(errors)) return this.onSubmit(values);
  }

  validate(name) {
    if (!name) {
      Object.keys(this.rules).forEach(name => this.validate(name));
      this.notify('*');
    }

    // 不存在的 Field 不做检验
    if (this.status[name] === 'hide') return;

    if (!this.validators[name]) {
      const descriptor = { [name]: this.rules[name] };
      const validator = new schema(descriptor);
      this.validators[name] = validator;
    }

    const value = this.getValue(name);

    try { 
      this.validators[name].validate({[name]: value}, (errors, fields) => {
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
      })
    } catch (e) {
      // validation failed
      console.error(e);
    }
  }
}