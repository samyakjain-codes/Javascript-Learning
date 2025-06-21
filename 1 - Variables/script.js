// console.log("Hello this is samyak");

const fileId = 12344    // const values cannot be changed once declared
let fileType = "word"
var fileName = "Samyak" //avoid
fileMemory = "2MB"

let fileLocation;

/*
do not use var
var does not have proper functional scope
*/

//console.log(fileId);
console.table([fileId, fileType, fileName, fileMemory, fileLocation]);



//******************MEMORY IN JS **********************************8*/

// Stack(Primitive) and Heap (Non-Primitive)

let caller1 = "Robert"
let caller2 = caller1
caller2 = "Nolan"

console.log(caller1);
console.log(caller2);

let user1 = {
    id : 12345 , 
    username : "user1@google"
}

let user2 = user1

user1.id = 2121
user1.username = "user2@yahoo"

console.log(user1.id);
console.log(user1.username);
console.log(user2.id);
console.log(user2.username);


