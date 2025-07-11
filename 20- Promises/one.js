//**********************Promises in JS***********************8 */

const promise1 = new Promise((resolve , reject) => {

    console.log("this request is pending");

    setTimeout(() => {
        console.log('this is after set timeout1'); 
        resolve("Thanks for visiting");  
    }, 3000);
     
})

const promise2 = new Promise((resolve , reject) => {

    console.log("this request is pending");

    setTimeout(() => {
        console.log('this is after set timeout2');
        reject("error expected");   
    }, 4000);
     
})

promise1.then((value) => {
    console.log(value);
    
})

promise2.catch((error) =>{
    console.log(error);
    
})