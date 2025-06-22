//*******************ABOUT STRINGS****************************** *//

let myName = "Samyak"
let language1 = "English"
let language2 = "Hindi"

// console.log(myName + " "+  language1 +" " + language2);
// console.log(`Hello my name is ${myName} and I speak two languages that is ${language1} and ${language2}`);

//***************String methods********************** */

const client1 = new String("Vivek-anand-kumar")
 console.log(client1[5]);

const clientMail = "client123@gmail.com"

console.log(clientMail.length);            // String Basic Methods
console.log(clientMail.toUpperCase());
console.log(clientMail.charAt(7));
console.log(clientMail.indexOf("k"));

const newClient = client1.substring(3,9)   // Sub String
console.log(newClient);

const anotherClient = client1.slice(-17,9)  // Slice (Can include negative values as well)
console.log(anotherClient);

const oldClient = "    Vishnu     "         // Trim - Used to remove empty white spaces from object
console.log(oldClient.trim());

const url = "https://vishnukumar@google.com/vishu%20kumar"
console.log(url.includes("vishnu"));                       
console.log(url.replace("%20" , "-"));    // Some methods used to deal with url or links
console.log(client1.split("-"));


