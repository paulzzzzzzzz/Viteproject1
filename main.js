import './style.css'
/*
var stoudlyCapVAr; 
var properCamelCase;
var TitleCaseOver; 
//Assignments 
stoudlyCapVAr = 10; 
properCamelCase = "A String";
TitleCaseOver = 9000; 

console.log(stoudlyCapVAr);
*/

var a = 1; 
var b = 3; 
var c = 5;

a = a + 1; 
b = b + 5; 
/*c = c + "Croissants please:)";*/
console.log(a); 

var sum =  10 + 10; 
console.log(sum); 

var myVar = 10; 
console.log(myVar --); 

var product = 2.0 * 2.5; 
console.log(product);
 
var remainder; 
remainder = 9 % 3; 
console.log(remainder);

var a = 11; 
a *= 10;
console.log(a);

var firstName =  "Paula" ;
var lastName = "Simen" ; 
console.log(firstName + " A. " +lastName); 

// this is a comment// 

var Subject = "Elias"; 
var Verb =  " hat"; 
var Object = " Schnupfen"; 
var lastPart = " ohnoo"

console.log(Subject + Verb + Object + lastPart );

var firstNameLength = 0; 
firstNameLength = firstName.length; 
console.log(firstNameLength)

var favColour = "yellow" ;
var firstLetterOffavColour = ""; 
firstLetterOffavColour = favColour[0];
console.log(firstLetterOffavColour);

var favColour = "yellow" ;
var thirdLetterOffavColour = ""; 
thirdLetterOffavColour = favColour[2];
console.log(thirdLetterOffavColour);

var favColour = "yellow" ;
var lastLetterOffavColour = "";
lastLetterOffavColour = favColour[-1];
console.log(lastLetterOffavColour);

//That doesn´t work
var MyName = "Jaula"; 
//MyName[0] = "P"; 
console.log(MyName); 

function wordBlanks(myNoun, myAdjective, myVerb){
var result = "";
result = "The" + myAdjective +myNoun + myVerb + "to the store"; 
return result;
}
console.log(wordBlanks(" big", " dog", " ran"));

var myArray = ["Hitch something", " StarWars","Dune"," Gravity", " Interstellar"]; 
var myData = myArray[4]; 
console.log(myData);


var myArray = ["hii", "Dune", "Interstellar"]; 
myArray[0] = "Forest Gump";
var myData = myArray[0]; 
console.log(myData);

var myArray = [[1,2,3], [4,5,6], [7,8,9], [10,11,12], 13, 14]; 
var myData = myArray[2][1];
console.log(myData); 

var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
console.log(ourArray);

var myArray = ["Stimpson", "J", "cat"];

var removedFromMyArray = myArray.pop(1);
console.log(myArray);

var ourArray = ["Stimpson", "J", "cat"];
var removedFromOurArray = myArray.shift(1);
var myArray = ["Paula", [25], ["Kirchheim"]];
myArray.push["Matrix"];
var removedFromMyArray; 

console.log(myArray);

let x = 1 ; 
console.log(Boolean(x) );


let age = 16 ; 
let text = ""; 
if (age<18) {
    text = "You cant buy it"
} else if (age > 15 && age < 18) {
    text = "hey you know some bigger kids, ask them to get one for you!"
}
else {
    text = "You can buy alcohol"
} ;



let new_text = (age<18) ? "Cant buy alcohol" : "Can buy alcohol" ; 
console.log(new_text); 

let number = 4;
let text_2 = ""; 

switch(number){
    case 0 :
        text = "Sunday"; 
    break; 
case 1 :
    text = "Monday";
    break; 
case 2 : 
text = "Wednesday"
break; 
default: 
text_2 = "Oh no it´s another day!" ; 
break; 
}; 
console.log(text); 


for (let i = 0 ; i <= 16 ; i+=2) {
    console.log(i); 
} ; 

 const numbers = [45, 4, 9, 16, 25];
let txt = "" ; 
for (let x in numbers) {
    txt += numbers[x]; 
    txt +=  " "; 
}
console.log(txt)



let txt2 = "" ; 
numbers.forEach(myFunction);

function myFunction(value, index, array) {
    txt2 += value;
    txt2 += "_";
}
console.log(txt2)

var b = 0 ; 
var text4 = " "

while (b < 10) {
    text4 += "The number is " + b + "!" ; 
    b++; 
}
console.log(text4); 

for (let i = 0; i< 10 ; i++) {
    if (i === 10) {break; } 
    console.log("The number is " +i)
}

const myObject = {
    name :  "Paula" ,
    age : "22",
    speak : function() {
        console.log("Hi I am " + this.name); 
    }
}; 
console.log(myObject);
myObject.speak();


function createPerson(_name, _age) {
    return{
        name:_name, 
        age:_age, 
        speak:function(){
            console.log("Hi I am " +  this.name + ", " + this.age); 
        }
    }
};

let son_1 = createPerson(" Jaden", 7); 
son_1.speak(); 
let son_2 = createPerson(" Zac", 1); 
son_2.speak(); 

for (let i = 0;  i<5; i++) {
    let son = createPerson ("son " + i, i+2); 
    son.speak(); 
}

class Anfrage {
    constructor(start, end){
        this.start = start; 
        this.end = end; 
    }
    
    Slushies (){
        for(let i = this.start; i <= this.end; i++) {
            if (i % 2 === 0) {
                console.log("Ich hatte " + i + " Slushies zuviel!"); 
            }
        }
    }
 }
    const printer = new Anfrage (1, 10); 
    printer.Slushies(); 



    class Animal1 {
    constructor(name){
        this.name = name; 
    }
    speak () {
        console.log(this.name + " makes a sound"); 
    }
    }
    class Dog extends Animal1 {
        speak() {
            console.log(this.name + " barks"); 
        }
    }
const dog = new Dog('Buddy'); 
dog.speak(); 



class Calculator {
    add (a, b, c) {
        return a + b + c; 
    }
    
    add (a, b) {
        return a + b ; 
    }
  
}

const calculator = new Calculator() ; 
console.log(calculator.add(2, 3, 4)); 
console.log(calculator.add(2, 3)); 


