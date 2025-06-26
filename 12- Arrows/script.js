//***************About arrow and this function************************/

const website = {
        username : "Sammy",
        password : "abc",

     loginMessage : function(){
        console.log(`hey, ${this.username} you have logged in`);
        console.log(this);                                          // helps in accesing the methods present in the object
        
        
     }
}
// website.loginMessage();
// website.username = "Robert";
// website.loginMessage();

const work = function(name){
    // console.log("Hey this is your work" , name );
    
}
work("sam")

const working = (name) =>{                           // arrow function
    // console.log("Hey this is your work" , name );
    
}

working("arya")

const coding = (num1,num2) => {                    // Explict arrow function
    return num1 + num2; 
}

const code = (num1,num2) => num1 + num2;          // implicit arrrow function


console.log(coding(2,5));
console.log(code(2,5));
