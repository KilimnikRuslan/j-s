
// ------------------------------------------Create arr method-------------------------------------------------
const createArr = (obj) => {
  const start = obj.from;
  const end = obj.to;
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

const obj = {
  from: 1,
  to: 10,
};

obj.arr = createArr(obj);

console.log(obj.arr);


//---------------------2---------------------

const createArr = ({ from, to }) => {
  const arr = [];
  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
  return arr;
};

const obj = {
  from: 1,
  to: 10,
};

obj.arr = createArr(obj);

console.log(obj.arr);

// ----------------------3---------------------

const createArr = (start, end) => {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
};

const obj = {
  from: 1,
  to: 10,
};

obj.arr = createArr(obj.from, obj.to);

console.log(obj.arr);


// --------------------------------------------------------Calculator-----------------------------------------------

const calculator = {
  result: 0,

  sum(a) {
    this.result += a;
    return this;
  },
  sub(a) {
    this.result -= a;
    return this;
  },
  mul(a) {
    this.result *= a;
    return this;
  },
  div(a) {
    this.result /= a;
    return this;
  },
};

calculator
  .sum(2)
  .sum(2)
  .mul(4);

alert(calculator.result);