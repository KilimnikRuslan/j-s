// ----------------------------------------------Encapsulation----------------------------------------------------------

class BankAccount {
  constructor(initialBalance, accountHolder) {
    this._balance = initialBalance; 
    this._accountHolder = accountHolder; 
  }

  get balance() {
    return this._balance;
  }

  get accountHolder() {
    return this._accountHolder;
  }
}

const myAccount = new BankAccount(1000, "Иван Иванов");

console.log(myAccount.accountHolder); 
console.log(myAccount.balance); 

