//**********Dates*********************************/

let date1 = new Date();
console.log(date1);             // Shows the current date and time in the output
console.log(typeof(date1));

let newDate = new Date()
console.log(newDate.toString());          // Convert the date into more readable format
console.log(newDate.toLocaleDateString()); // Gives only date
console.log(newDate.toLocaleString());     // Gives date and Time in a Concise manner
console.log(newDate.toTimeString());
console.log(newDate.toJSON());

let todayDate = new Date("01-18-2004")
console.log(todayDate.toLocaleString());


// ********************Time*******************//

let timestamp = Date.now()   
console.log(timestamp);
console.log(todayDate.getTime());    // Gives Time in Milli-second from January 1970 to present
console.log(Math.floor(todayDate.getTime()/1000));

let timing = new Date()
console.log(timing);
console.log(timing.getMonth() + 1);  // Since in Js month starts from 0 so we have to add 1
console.log(timing.getDay());
console.log(timing.getDate());
