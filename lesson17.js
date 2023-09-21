
// ------------------------------------------Create arr method-------------------------------------------------

const obj = {
  from: 1,
  to: 10,
};

function createArr() {
  const arr = [];

  for (let i = this.from; i < this.to; i++) {
    arr.push(i);
  }

  this.arr = arr;
}

obj.createArr = createArr;
obj.createArr();

const createArrBind = createArr.bind(obj);
createArrBind();

createArr.apply(obj);

console.log(obj);


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