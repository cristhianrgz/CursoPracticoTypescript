console.log('Hello World');

//Types

var myString: string = 'Hello Refugio';
myString=22 + "";

var myNumber: number = 334;

var myBool: boolean = true;

var myVar: any = "Hello";
myVar = false;

//Strings
var StringArray: string[] = ["item1", "item2", ""];
var NumberArray: number[] = [1, 2, 3, 4];
var BooleanArray: boolean[] = [true, false, true];
var AnyArray: any[] = [1, 2, true, "Hello", [], {}];

//Tuple
var strNumTuple: [string, number];
strNumTuple = ["Hello",22];
//strNumTuple = ["World", 245, "", 45];

//void, undefined, null
//let myVoid: void = undefined;
//let myNull: null = null;
//let myUndefined: undefined = undefined;

//Functions
function getSum(num1: number, num2: number): number{
    return num1 + num2;
}

let mySum = function(num1: number | string,
                     num2: number | string ):number {
    if(typeof(num1)=== 'string'){
        num1 = parseInt(num1);
    }

    if(typeof(num2)=== 'string'){
        num2 = parseInt(num2);
    }
    return num1 + num2;
}
/*
function getName(firstName: string, lastName?: string): string{
    if(lastName == undefined){
        return firstName;                    
    }
    return `${firstName} ${lastName}`;
}
*/

/*
function myVoidFunction():void{
    return;
}
*/

//Interfaces
interface ITodo {
    title: string;
    text: string;
}

function showTodo (todo: ITodo){
    console.log(`${todo.title} - ${todo.text}`)

}

var myTodo : ITodo = { title: 'Eat dinner', text: 'lorem'}
showTodo(myTodo)

//document.write()

//Clases
class User {
    private name: string;
    public email: string;
    protected age: number;

    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    register(){
        console.log(`${this.name} is registered!`);
    }

    showMeAge(){
        return this.age;
    }

    public AgeInYears(){
        return this.age + ' years';
    }

    payInVoice(){
        console.log(`${this.name} paide invoice`);
    }
}

var uriel = new User('Uriel', 'crurrodriguezro@ittepic.edu.mx',22);
console.log(uriel.AgeInYears())

class Member extends User {
    id: number;

    constructor(id, name, email, age){
        super(name, email, age)
        this.id = id;
    }

    paideInvoice(){
        super.payInVoice();
    }

}

var cristhian = new Member(1,'Cristhian', 'criss_uriel16@gamil.com', 22);
cristhian.payInVoice()
//document.write(getName("Cristhian","Rodriguez"));