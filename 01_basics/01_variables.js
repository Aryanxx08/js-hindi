const accountId = 144553
let accountEmail = "aryan@google.com"
var accountPassword ="12345"
accountCity ="Jaipur"
let accountState;

// not to use var because of issue in block scope and functional scope


accountEmail = "deep@gmail.com"
accountPassword = "121212"
accountCity = "delhi"

console.table([accountId,accountEmail,accountPassword,accountPassword,accountState])