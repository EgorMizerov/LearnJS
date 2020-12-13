let user = {
    name: "John",
    surname: "Smith",
  
    get fullName() {
        return `${this.name} ${this.surname}`;
    },
    set fullname(value) {
        [this.name, this.surname] = value.split(" ");
    }
};