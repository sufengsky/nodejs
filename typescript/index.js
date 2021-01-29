var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = lastName + " " + firstName;
    }
    return Student;
}());
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
function greeter(person) {
    return "hello " + person.firstName + " " + person.lastName;
}
var user = new Student("su", "feng");
document.body.innerHTML = greeter(user);
