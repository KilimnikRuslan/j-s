// ----------------------------------------Factorial recursion------------------------------------------

const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

const number = 5; 
const result = factorial(number);
console.log(`Факторіал ${number} дорівнює ${result}`);

// -----------------------------------------------------Fibonacci recursion-------------------------------------

const fib = (length) => {
  if (length <= 0) {
    return [];
  } else if (length === 1) {
    return [1];
  } else if (length === 2) {
    return [1, 1];
  } else {
    const prevFib = fib(length - 1);
    const nextFib = prevFib[prevFib.length - 1] + prevFib[prevFib.length - 2];
    return [...prevFib, nextFib];
  }
};

const length = 10; 
const fibonacciSequence = fib(length);
console.log(`Послідовність Фібоначчі  ${length}:`, fibonacciSequence);

// ------------------------------------------------Read List-------------------------------------------------

const printTitles = (list) => {
  let current = list;

  while (current !== null) {
    console.log(current.title);
    current = current.next;
  }
};

const list = {
  title: "Lesson-1",
  next: {
    title: "lesson-2",
    next: {
      title: "lesson-3",
      next: {
        title: "lesson-4",
        next: {
          title: "lesson-5",
          next: null,
        },
      },
    },
  },
};

printTitles(list);

//--------------------------------------------Recursion-------------------------------------------------

const printTitles = (list) => {
  if (list === null) {
    return;
  }

  console.log(list.title);
  printTitles(list.next); 
};

const list = {
  title: "Lesson-1",
  next: {
    title: "lesson-2",
    next: {
      title: "lesson-3",
      next: {
        title: "lesson-4",
        next: {
          title: "lesson-5",
          next: null,
        },
      },
    },
  },
};

printTitles(list);