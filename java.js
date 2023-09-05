/*----------------------------------------------Quadratic equation-----------------------------------------------------------------*/

function quadraticEquation() {
    let a = prompt('Введіть a'); 
    let b = prompt('Введіть b'); 
    let c = prompt('Введіть c'); 
     
    let discriminant = b * b - 4 * a * c;
    
    if (discriminant > 0) {
       let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
       let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
       alert("x1 = " + x1);
       alert("x2 = " + x2);
    }
    else { 
       let x = -b / (2 * a);
       alert("x = " + x);
    }   
  }
  quadraticEquation();
  
  /*-----------------------------------------Factorial---------------------------------------------------------------------*/
  
  function factorial() {
    let n = parseInt(prompt('Введіть число'));
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
    let n = parseInt(prompt('Введіть число яке буде перетворене в послідовність фібаначче'));
    
    if (isNaN(n) || n < 1) {
        alert('');
        return;
    }
  
    let fibonacci = [1];
    if (n > 1) {
        fibonacci.push(1);
    }
  
    for (let i = 2; i < n; i++) {
        let nextNumber = fibonacci[i - 1] + fibonacci[i - 2];
        fibonacci.push(nextNumber);
    }
  
    let result = 'Послідовність Фібоначчі: ' + fibonacci.join(', ');
    alert(result);
  }
  
  Fibonacci();

/*--------------------------------------------------------------------------------------------------------------------------*/
/*------------------------------------------------Reverse str---------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------------*/

  function reverseStr(inputString) {
    return inputString.split('').reverse().join('');
  }
  

  let originalStr = prompt('Введіть текст');
  let reversedStr = reverseStr(originalStr);
  
  alert(reversedStr);  


 /*------------------------------------------------Count words---------------------------------------------------------------*/

 function countWords() {
    let userInput= prompt('Введіть речення:');
    
  
    let words = userInput.split(/\s+/).filter(word => word.length > 0);
    let wordCount = words.length;
    
    alert(`Кількість слів в реченні: ${wordCount}`);
  }
  
  countWords();


/*------------------------------------------------Max length---------------------------------------------------------------*/

function truncateString(inputText, maxLen) {
    if (inputText.length > maxLen) {
      return inputText.slice(0, maxLen) + '...';
    }
    return inputText;
  }
  
  let userSentence = prompt('Введіть речення:');
  let maxLength = 10;

  let truncatedSentence = truncateString(userSentence, maxLength);
  alert(truncatedSentence);


/*------------------------------------------------Palindrome---------------------------------------------------------------*/

function palindrome(word) {
    word = word.replace(/\s/g, '').toLowerCase();
    
    let reversedWord = word.split('').reverse().join('');
    
    return word === reversedWord;
  }
  
  let inputWord = prompt('Введіть слово для перевірки');
  
  if (palindrome(inputWord)) {
    alert('true');
  } else {
    alert('false');
  }