//***************Immediately Invoked Function Expression********************* */

function name1(user){                                      // normal function
    console.log(`Hello ${user}, welcome to the software`)
}

name1("samyak");

(function code(){                                      // IIFE code
    console.log("Hello user this is your code");
    
});                      // ; is must after every IIFE , otherwise when writing two IIFE codes the system shows error


(   (variable) => {                      // unnamed-name iffi
    console.log("Function Executed");
    }  )  ("samyak")