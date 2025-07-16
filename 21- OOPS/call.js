//*************************Call Function************************* */

function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)
   
    this.email = email
    this.password = password
}

const programmer = new createUser("gordose", "gor@yt.com", "#gorde")
console.log(programmer);