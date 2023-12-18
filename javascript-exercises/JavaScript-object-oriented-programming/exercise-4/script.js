class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  deposit(num) {
    this.balance += num;
    console.log("you deposited : " + num);
  }
  withdraw(num) {
    if(num >= this.balance) {
      console.log("You can't withdraw this amount");
    } else {
      this.balance -= num;
      console.log("you withdrawed : " + num);
    }
  }
}

const person1 = new BankAccount("1234567788", 20);

console.log(person1.accountNumber);
console.log(person1.balance);
person1.deposit(5);
console.log(person1.balance);
person1.withdraw(30);
console.log(person1.balance);