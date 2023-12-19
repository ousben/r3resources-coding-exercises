class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }
  add(newDepartment) {
    this.departments.push(newDepartment);
    console.log("You added a new department : " + newDepartment);
  }
  remove(paramToRemove) {
    let result = this.departments.filter(item => {
      if(item != paramToRemove) {
        return item
      }
    })
    console.log("You removed a department : " + paramToRemove);
    this.departments = result;
  }
  display() {
    let result = this.departments.map(item => {
      return item;
    })
    return result;
  }
}

const harvard = new University("harvard");
harvard.add("computer science");
harvard.add("geology");
harvard.add("chemistry");
harvard.remove("computer science");
harvard.remove("chemistry");
console.log(harvard.display());