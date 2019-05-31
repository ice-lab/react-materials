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
    this.renderField = null;
  }

  get pristine() {
    return isEqual(this.initialValues, this.values);
  }

  getRenderFieldLayout() {
    return this.renderField;
  }

  setRenderFieldLayout(layout) {
    this.renderField = layout;
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

  getFieldValue(name) {
    return this.values[name];
  }

  getValues() {
    return this.values;
  }

  async setFieldValue(name, value, store) {
    if (typeof name === 'string') {
      this.values[name] = value;
      this.notify(name);
      const result = await this.validate(name);
      if (result === 'success') {
        this.setFieldError(name, undefined);

        // linkage
        const linkage = this.linkages.find(item => item.field === name);
        if (linkage && store) {
          linkage.handler(store);
        }
      } else {
        this.setFieldError(name, result[0].message);
      }
    }
  }

  setValues(values) {
    if (Object.prototype.toString.call(values) !== '[object Object]') {
      throw new Error(
        'values should be an object for setValues(values)'
      );
    }
    Object.keys(values).forEach(key => this.setFieldValue(key, values[key]));
  }

  setFieldValueWithoutNotify(name, value) {
    this.values[name] = value;
  }

  getFieldError(name) {
    return this.errors[name];
  }

  getErrors() {
    return this.errors;
  }

  setFieldError(name, errorMsg, notify = true) {
    if (typeof name === 'string') {
      this.errors[name] = errorMsg;
      notify && this.notify(name);
    }
  }

  setErrors(errors) {
    if (Object.prototype.toString.call(errors) !== '[object Object]') {
      throw new Error(
        'errors should be an object for setErrors(errors)'
      );
    }
    Object.keys(errors).forEach(key => this.setFieldError(key, errors[key]));
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

    // 校验值导致的 error
    const hasAnyValidatingError = result.some(item => {
      return item !== 'success';
    });
    // setFieldError()，sometimes not included in validatingError
    const hasAnySettingError = Object.keys(this.errors).some(field => {
      const error = this.errors[field];
      return !!error;
    });

    if (!hasAnyValidatingError && !hasAnySettingError) {
      // result = ['success', 'success', 'success']
      this.onSubmit(this.getValues());
    } else {
      result.forEach(res => {
        if (res !== 'success') {
          const field = res[0].field;
          const errMsg = res[0].message;
          this.setFieldError(field, errMsg);
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

    const value = this.getFieldValue(name);

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
