export default class Godzilla {
  constructor(arrayData, context = {}) {
    this.context = context;
    this.arrayData = arrayData;
    this.initFn = [({ data }) => data];
    this.outputFn = (v) => v;
    return this;
  }

  pipe(handle) {
    this.initFn.push(handle);
    return this;
  }

  init(data, index, arr) {
    let ln = this.initFn.length;
    let rezult = data;
    let n = 0;
    while (ln--) {
      const fn = this.initFn[n];
      const params = { data: rezult, context: this.context };
      rezult = fn(params);
      n++;
    }
    return rezult;
  }

  end(handle) {
    this.outputFn = handle;
    return this.start();
  }

  ouput(data, index, arr) {
    return this.outputFn({ data, index, context: this.context });
  }

  start() {
    return this.arrayData.map((data, index, arr) => {
      const _data = this.init(data, index, arr);
      return this.ouput(_data, index, arr);
    });
  }
}
