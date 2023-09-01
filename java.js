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







