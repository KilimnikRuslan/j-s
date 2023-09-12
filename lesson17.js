//------------------------------------------- Pythagorean theorem--------------------------------------------

const pythagorean = (a, b) => {
  const c = Math.sqrt(a ** 2 + b ** 2);
  return c;
};

const inputA = parseFloat(prompt('Введите значение a:'));
const inputB = parseFloat(prompt('Введите значение b:'));

if (!isNaN(inputA) && !isNaN(inputB)) {
  const result = Math.round(pythagorean(inputA, inputB));
  alert(`= ${result}`);

// -----------------------------------------------Format number in spaces-----------------------------------------------

const formatNumberWithSign = (number) => {
  const sign = number < 0 ? '-' : '+';
  const absoluteNumber = Math.abs(number).toString();
  const formattedNumber = absoluteNumber.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  return sign + formattedNumber;
};

const inputNumber = parseFloat(prompt('Введите число для форматирования:'));

if (!isNaN(inputNumber)) {
  const formattedNumber = formatNumberWithSign(inputNumber);
  alert(formattedNumber);
}

// -----------------------------------Write a password generator with length n----------------------------------------

const generatePassword = (length) => {
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
};

const passwordLength = parseInt(prompt('Введіть довжину пароля:'), 10);

if (!isNaN(passwordLength) && passwordLength > 0) {
  const newPassword = generatePassword(passwordLength);
  alert(newPassword);
}

// ----------------------------------Get integer part of number and decimal---------------------------------

const userInput = parseFloat(prompt('Введіть число:'));

if (!isNaN(userInput)) {
  const integerPart = Math.floor(userInput); 
  const decimalPart = userInput - integerPart;  

  alert(`Ціле число: ${integerPart}, Десятична частина числа: ${decimalPart}`);
}

// ----------------------------------------------Check if prime-------------------------------------------------

const isPrime = (number) => {
  if (number <= 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
};

const userInput = parseInt(prompt('Введіть число:'));

if (!isNaN(userInput)) {
  alert(isPrime(userInput));
}

// -------------------------------------------------Show number in money format----------------------------------

const formatMoney = (number) => {
  const sign = number < 0 ? '-' : '+';

  const absoluteNumber = Math.abs(number).toFixed(2);

  const parts = absoluteNumber.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return sign + parts.join('.');
};

const inputNumber = parseFloat(prompt('Показати номер у грошовому форматі:'));

if (!isNaN(inputNumber)) {
  const formattedMoney = formatMoney(inputNumber);
  alert(formattedMoney);
}