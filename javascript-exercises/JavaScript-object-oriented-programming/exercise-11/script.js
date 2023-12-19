class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`${this.accountHolderName} deposited ${amount}`);
    return this.balance;
  }
  withdraw(amount) {
    if(amount > this.balance) {
      throw "You can't withdraw this amount money";
    } else {
      this.balance -= amount;
      console.log(`${this.accountHolderName} withdrew ${amount}`);
      return this.balance;
    }
  }
  transfer(recipient, amount) {
    this.withdraw(amount);
    recipient.deposit(amount);
    return {
      sender : this.balance,
      recipient : recipient.balance
    }
  }
}

const john = new BankAccount("098765", "John", 50);
const james = new BankAccount("09876543", "James", 50);

console.log(john.deposit(5));
console.log(james.withdraw(6));

console.log(john.transfer(james, 9));