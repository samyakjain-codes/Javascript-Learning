//*************************Scopes in Js*********************** */         

//var c = 300                     // has a global scope inside or outside function....(aviod)
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "samyak"

    function two(){
        const website = "amazon"
        console.log(username);
    }
    // console.log(website);             // has a scope on the second function only

     two()                              // executes the two function 

}

// one()                                // gives output samyak as only that function has console log

if (true) {
    const username = "samyak"
    if (username === "samyak") {
        const website = " google"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(9))              // runs even if function is not declared before

function addone(num){
    return num + 1
}


                                 // does not run and throws an error
addTwo(5)
const addTwo = function(num){
    return num + 2
}