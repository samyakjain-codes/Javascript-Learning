//*******************Objects in JS**********************/

let mySym = Symbol("Pin1")

let myObj = {                                  // Creating a object (key value pair)
    name        : "Samyak",
  "full name"   : "Samyak Jain",               // Specifying that the key is the string
    email       : "samyakjain@google.com",
    state       : "Delhi",
    country     : "India",
    pin_code    :  110092,
    [mySym]     :  "myPin1",                    // To pass it as a symbol
}

console.log(myObj);                       // Gives all the key value pairs

console.log(myObj.name);            // Both are the methods of accessing data from objects
console.log(myObj["full name"]);

console.log([mySym]);            

myObj.email = "samyak@microsoft.com"
// Object.freeze(myObj)                    // To restrain any changes in object
myObj.email = "samyak@yahoo.com"
console.log(myObj);

//********************Functions************** */

myObj.greeting = function(){
    console.log ("Hello this is user"); 
    
}

myObj.greeting2 = function(){
    console.log (`Hello this is user, ${this.name}`); // to access the members of the object this pointer is used
    
}

console.log(myObj.greeting());
console.log(myObj.greeting2());



