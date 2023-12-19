class Bank {
  constructor() {
    this.bankNames = "";
    this.branches = [];
  }
  addBranch(branch) {
    this.branches.push(branch)
    console.log("You added " + branch);
  }
  displayBranches() {
    for(let i = 0; i < this.branches.length; i++) {
      console.log(`This is the branch number ${i} and the name is ${this.branches[i]}`);
    }
  }
}

const santander = new Bank();
santander.addBranch("société générale");
santander.addBranch("Goldman Sachs");
santander.displayBranches();