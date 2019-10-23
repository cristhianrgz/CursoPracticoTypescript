var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
console.log('Hello World');
//Types
var myString = 'Hello Refugio';
myString = 22 + "";
var myNumber = 334;
var myBool = true;
var myVar = "Hello";
myVar = false;
//Strings
var StringArray = ["item1", "item2", ""];
var NumberArray = [1, 2, 3, 4];
var BooleanArray = [true, false, true];
var AnyArray = [1, 2, true, "Hello", [], {}];
//Tuple
var strNumTuple;
strNumTuple = ["Hello", 22];
//strNumTuple = ["World", 245, "", 45];
//void, undefined, null
//let myVoid: void = undefined;
//let myNull: null = null;
//let myUndefined: undefined = undefined;
//Functions
function getSum(num1, num2) {
    return num1 + num2;
}
var mySum = function (num1, num2) {
    if (typeof (num1) === 'string') {
        num1 = parseInt(num1);
    }
    if (typeof (num2) === 'string') {
        num2 = parseInt(num2);
    }
    return num1 + num2;
};
function showTodo(todo) {
    console.log(todo.title + " - " + todo.text);
}
var myTodo = { title: 'Eat dinner', text: 'lorem' };
showTodo(myTodo);
//document.write()
//Clases
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered!");
    };
    User.prototype.showMeAge = function () {
        return this.age;
    };
    User.prototype.AgeInYears = function () {
        return this.age + ' years';
    };
    User.prototype.payInVoice = function () {
        console.log(this.name + " paide invoice");
    };
    return User;
}());
var uriel = new User('Uriel', 'crurrodriguezro@ittepic.edu.mx', 22);
console.log(uriel.AgeInYears());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.paideInvoice = function () {
        _super.prototype.payInVoice.call(this);
    };
    return Member;
}(User));
var cristhian = new Member(1, 'Cristhian', 'criss_uriel16@gamil.com', 22);
cristhian.payInVoice();
//document.write(getName("Cristhian","Rodriguez"));
