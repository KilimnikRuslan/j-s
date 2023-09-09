const filter = (arr, from, to) => {
  return arr.filter(number => number >= from && number <= to);
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const filtered = filter(numbers, 3, 7);

alert(filtered);
// -------------------------------------------------------------------------------------------------------------------

const sortArrayAscending = (arr) => {
  return arr.sort((a, b) => a - b);
};

const numbers = [56, 18, 28, 42, 14, 4, 11, 15, -24, 3, 10, 8, 13, 6];
const sortedNumbers = sortArrayAscending(numbers);

alert(sortedNumbers);

// -----------------------------------------------------------------------------------------------------------------

const sortByLength = (arr) => {
  return arr.sort((a, b) => a.length - b.length);
};

let strings = ["22", "23456", "2222", "333", "2", "234567777", "3456723456"];
let sortedStrings = sortByLength(strings);

alert(sortedStrings);

// -----------------------------------------------------------------------------------------------------------------

const arr = [
    { name: "John", age: 25 },
    { name: "Pete", age: 54 },
    { name: "Mary", age: 39 },
    { name: "Taras", age: 25 },
    { name: "Kate", age: 34 },
    { name: "Chris", age: 19 },
    { name: "Alan", age: 12 },
    { name: "Boris", age: 55 },
    { name: "Elizabeth", age: 48 },
  ];
  
  const filteredUsers = arr.filter(user => user.age > 12 && user.age < 55);
  
  const sumOfAges = filteredUsers.reduce((sum, user) => sum + user.age, 0);
  
  const averageAge = Math.floor(sumOfAges / filteredUsers.length);
  
  alert("Середній вік користувачів: " + averageAge);

// -----------------------------------------------------------------------------------------------------------------



const arr = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 29 },
  { name: "Taras", age: 25 },
  { name: "Kate", age: 74 },
  { name: "Chris", age: 14 },
  { name: "Alan", age: 5 },
  { name: "Boris", age: 55 },
  { name: "Elizabeth", age: 48 },
];

const findMinMax = (arr) =>
  arr.reduce(
    (acc, curr) => ({
      min: acc.min === undefined || curr.age < acc.min ? curr.age : acc.min,
      max: acc.max === undefined || curr.age > acc.max ? curr.age : acc.max,
    }),
    { min: undefined, max: undefined }
  );

const result = findMinMax(arr);

alert(`Мінімальний вік: ${result.min}, Максимальний вік: ${result.max}`);