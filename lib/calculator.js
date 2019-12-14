const calculator = () => {
  const validate = (args) => args.reduce((accum, curVal) => typeof curVal === 'number' && Boolean(accum), true);
  const badInput = new Error('BadInput: Only numbers are allowed as input');
  return {
    currentValue: 0,
    add(...args) {
      if (!validate(args)) throw badInput;
      this.currentValue = args.reduce(
        (accum, currVal) => accum + currVal,
        this.currentValue,
      );
      return this;
    },
    subtract(...args) {
      if (!validate(args)) throw badInput;
      this.currentValue = args.reduce(
        (accum, currVal) => accum - currVal,
        this.currentValue,
      );
      return this;
    },
    divide(...args) {
      if (!validate(args)) throw badInput;
      const divideOutput = args.reduce((accum, currVal) => accum / currVal);
      this.currentValue = this.currentValue
        ? this.currentValue / divideOutput
        : divideOutput;
      return this;
    },
    multiply(...args) {
      if (!validate(args)) throw badInput;
      this.currentValue = args.reduce(
        (accum, currVal) => accum * currVal,
        this.currentValue || 1,
      );
      return this;
    },
  };
};

export default calculator;