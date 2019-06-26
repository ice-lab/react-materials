export default class Godzilla {
  constructor(arrayData, context = {}) {
    this.context = context;
    this.arrayData = arrayData;
    this.plumbers = [];
    this.outputFn = (v) => v;
    return this;
  }

  pipe(handle) {
    this.plumbers.push(handle);
    return this;
  }

  init(data) {
    let ln = this.plumbers.length;
    let rezult = data;
    let n = 0;
    while (ln) {
      ln -= 1;
      const fn = this.plumbers[n];
      const params = { data: rezult, context: this.context };
      rezult = fn(params);
      n += 1;
    }
    return rezult;
  }

  end(handle) {
    this.outputFn = handle;
    return this.start();
  }

  ouput(data, index) {
    return this.outputFn({ data, index, context: this.context });
  }

  start() {
    return this.arrayData.map((data, index, arr) => {
      const dataResult = this.init(data, index, arr);
      return this.ouput(dataResult, index, arr);
    });
  }
}
