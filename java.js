/*----------------------------------------------Quadratic equation-----------------------------------------------------------------*/

function quadraticEquation() {
    const a = prompt('Введіть a'); 
    const b = prompt('Введіть b'); 
    const c = prompt('Введіть c'); 
     
    const discriminant = b * b - 4 * a * c;
    
    if (discriminant > 0) {
       const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
       const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
       alert("x1 = " + x1);
       alert("x2 = " + x2);
    }
    else { 
       const x = -b / (2 * a);
       alert("x = " + x);
    }   
  }
  quadraticEquation();
  
  /*-----------------------------------------Factorial---------------------------------------------------------------------*/
  
  function factorial() {
    const n = parseInt(prompt('Введіть число'));
    let result = 1;
  
    if (n < 0) {
        alert('');
    } else if (n === 0) {
        alert('');
    } else {
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        alert(`факторіал числа  ${n} = ${result}`);
    }
  }
  factorial();
  
  /*------------------------------------------------Fibonacci---------------------------------------------------------------*/
  
  function Fibonacci() {
    const n = parseInt(prompt('Введіть число яке буде перетворене в послідовність фібаначче'));
    
    if (isNaN(n) || n < 1) {
        alert('');
        return;
    }
  
    const fibonacci = [1];
    if (n > 1) {
        fibonacci.push(1);
    }
  
    for (let i = 2; i < n; i++) {
        let nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(nextNumber);
    }
  
    const result = 'Послідовність Фібоначчі: ' + fibonacci.join(', ');
    alert(result);
  }
  
  Fibonacci();
/*------------------------------------------------Reverse str---------------------------------------------------------------*/

function reverseStr(inputString) {
    let reversed = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversed += inputString[i];
    }
    return reversed;
  }
  
  const originalStr = prompt('Введіть текст');
  const reversedStr = reverseStr(originalStr);
  
  alert(reversedStr);


 /*------------------------------------------------Count words---------------------------------------------------------------*/

 function countWords() {
    const userInput= prompt('Введіть речення:');
    
  
    const words = userInput.split(/\s+/).filter(word => word.length > 0);
    const wordCount = words.length;
    
    alert(`Кількість слів в реченні: ${wordCount}`);
  }
  
  countWords();


/*------------------------------------------------Max length---------------------------------------------------------------*/

function truncateString(inputText, maxLen) {
    let   truncatedText = inputText;
    if (inputText.length > maxLen) {
      truncatedText = inputText.slice(0, maxLen) + '...';
    }
    return truncatedText;
  }
  
  const userSentence = prompt('Введіть речення:');
  const maxLength = 10;
  
  const truncatedSentence = truncateString(userSentence, maxLength);
  alert(truncatedSentence);


/*------------------------------------------------Palindrome---------------------------------------------------------------*/

function palindrome(word) {
    word = word.replace(/\s/g, '').toLowerCase();
    
    const reversedWord = word.split('').reverse().join('');
    
    return word === reversedWord;
  }
  
  const inputWord = prompt('Введіть слово для перевірки');
  
  if (palindrome(inputWord)) {
    alert('true');
  } else {
    alert('false');
  }