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

const oussama = new BankAccount("098765", "Oussama", 50);
const tim = new BankAccount("09876543", "Tim", 50);

console.log(oussama.deposit(5));
console.log(tim.withdraw(6));

console.log(oussama.transfer(tim, 9));