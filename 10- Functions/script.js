//**************************FUNCTIONS*****************************//

function myname(){                                   // basic syntax of a function
    console.log("Samyak");
    
}

// myname()                                          // promotes code reusablity

function sum1(num1 , num2){                            

    // return num1 + num2;
    let add = num1 + num2;                           // can be returned directly or can be stored in a variable
    return add;
    
}

function sum2(num1 , num2){

    if (num1=== undefined || num2 === undefined){       // if given a blank input 
        console.log("Please enter a valid number"); 
        return;  
    }

    let value = num1 + num2;
    return value;                                    // returns the value corresponding to a function
}

// console.log(sum1(2,3));


function loggedin(username){

    if (!username){           // if username is undefined (which ic sonsider as false) , ! reverse the given argumeny
        return ("Please provide a valid ussername");
        
    }

    return `The user ${username} has logged in `
}

console.log(loggedin("samyak"));
    console.log(loggedin());
    
    // ************Merging of unkonown no. of aruguments
    
function shopping1(num1){
        return num1;
}

function shopping2(add1, add2, ...num1){        // ... merges all the aruguments into an array
        return num1;
}
console.log(shopping1(200,300,1111));
console.log(shopping2(200,300,1111,1000));


// ******************** functions using objects 

const client = {
    name : "Rahul",
    age  : "20",
    state: "Delhi",
}

function clientinfo(anyclient){

    return `The client name is ${anyclient.name} and his age is ${anyclient.age} `
}

console.log(clientinfo(client));
