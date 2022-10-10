let database_username = "abc@gmail.com";
let database_pass = "abc123";

let username = "abc@gmail.com";
let pass = "abc123";

if (database_username == username) {
  if (database_pass == pass) {
    console.log("Login Successfully")
  }
  else {
    console.log("Wrong Password");
  }
}
else {
    console.log("Wrong Credentials");
  }