const calculator = () => ({
  currentValue: 0,
  add(...args) {
    this.currentValue = args.reduce(((accum, currVal) => accum + currVal), this.currentValue);
    return this;
  },
  subtract(...args) {
    this.currentValue = args.reduce(((accum, currVal) => accum - currVal), this.currentValue);
    return this;
  },
  divide(...args) {
    const divideOutput = args.reduce(((accum, currVal) => accum / currVal));
    this.currentValue = this.currentValue ? this.currentValue / divideOutput : divideOutput;
    return this;
  },
  multiply(...args) {
    this.currentValue = args.reduce(((accum, currVal) => accum * currVal), this.currentValue || 1);
    return this;
  },
});

export default calculator;
