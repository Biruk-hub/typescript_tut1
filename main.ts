export {}
let message = "Welcome back to typescript";
console.log(message);

let age: number = 20;
let name: string = "Biruk";
let isBeginner: boolean = false;

const introduction = `hello, my name is ${name} and I am ${age} years old, i am ${isBeginner ? "beginner " : "senior "}for type script`
console.log(introduction)

// defining undefine or null value
let n : null = null;
let u : undefined = undefined;

// defining list of array
/**
 * array can be defined by using type[] || Array<type>
 */
let listOfAge : number[] = [12, 12,14,17];
let listOfName : Array<string> = ["Biruk", "Endris", "Aman"]

// defining the array that contain different data type
/**
 * on this case what we define as an array should follow the same structure for example 
 * variableName: [string, number] = [<mustBeString>, <mustBeNumber>]
 */
let person1: [string, number] = ["Biruk", 32]


// working with enum 
// not sure the use case but it's worth to keep it
enum Color {Red, Green, Blue}
let c : Color = Color.Blue
console.log(c)

// working with any data type which store any types of data

let anyType: any = null;
anyType = "Biruk";
anyType = 23;

// multiType declaration

let multiType: boolean | number;
multiType = true;
multiType = 21;

// function in typescript
/**
 * function(var:<type>, var:<type>):<returnType> { ...doSomething }
 */

function add(num1:number, num2:number): number {
    return num1 + num2;
}

add(1, 3); 

