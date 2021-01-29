class Student {
  fullName: string;
  constructor(public firstName: string, public lastName: string) {
    this.fullName = lastName + " " + firstName;
  }
}
interface Person {
  firstName: string;
  lastName: string;
}

enum Color {Red, Green, Blue}

function greeter(person: Person) {
  return `hello ${person.firstName} ${person.lastName}`;
}

let user = new Student("su", "feng");

document.body.innerHTML = greeter(user);
