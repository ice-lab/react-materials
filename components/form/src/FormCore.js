import Schema from 'async-validator';
import isEqual from 'lodash.isequal';

export default class FormCore {
  constructor({ initialValues = {}, rules = {}, linkages = [], onSubmit }) {
    this.onSubmit = onSubmit;
    this.initialValues = { ...initialValues };
    this.values = { ...this.initialValues };
    this.errors = {};
    this.props = {};

    this.rules = rules;
    this.linkages = linkages;
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

  addLinkages(name, linkage) {
    if (this.linkages.find(item => item.field === name)) return;
    linkage.field = name;
    this.linkages.push(linkage);
  }

  getProps(name) {
    return this.props[name] || {};
  }

  setProps(name, prop) {
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

  async setValue(name, value, store) {
    if (typeof name === 'string') {
      this.values[name] = value;
      this.notify(name);
      const result = await this.validate(name);
      if (result === 'success') {
        this.setError(name, undefined);
      } else {
        this.setError(name, result[0].message);
      }

      // linkage
      const linkage = this.linkages.find(item => item.field === name);
      if (linkage && store) {
        linkage.handler(store);
      }
    } else if (Object.prototype.toString.call(name) === '[object Object]') {
      const values = name;
      Object.keys(values).forEach(key => this.setValue(key, values[key]));
    }
  }

  setValueWithoutNotify(name, value) {
    this.values[name] = value;
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

  async submit(event) {
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
    const result = await this.validate();
    const hasAnyError = result.some(item => {
      return item !== 'success';
    });
    if (!hasAnyError) {
      // result = ['success', 'success', 'success']
      this.onSubmit(this.getValue());
    } else {
      result.forEach(res => {
        if (res !== 'success') {
          const field = res[0].field;
          const errMsg = res[0].message;
          this.setError(field, errMsg);
        }
      });
    }
  }

  validate(name) {
    if (!name) {
      return Promise.all(
        Object.keys(this.rules).map(async field => {
          const res = await this.validate(field);
          return res;
        })
      );
    }

    // 不存在的 Field 不做检验
    if (this.props[name] && (this.props[name] === 'hide')) return new Promise(resolve => resolve('success'));

    // 没有 rules 的不需校验
    if (!this.rules[name]) return new Promise(resolve => resolve('success'));

    if (!this.validators[name]) {
      const descriptor = { [name]: this.rules[name] };
      const validator = new Schema(descriptor);
      this.validators[name] = validator;
    }

    const value = this.getValue(name);

    try {
      return this.validators[name].validate({ [name]: value }, () => {})
        .then(() => 'success')
        .catch(({ errors }) => {
          return errors;
        });
    } catch (e) {
      console.error(e);
    }
  }
}
