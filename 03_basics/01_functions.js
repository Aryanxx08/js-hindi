function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//    console.log(number1 + number2);
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
 }

const result = addTwoNumbers(3, 5)

// console.log("Result:", result);

function loginUserMessage(username = "sam"){
    if(!username){
       console.log("please enter a username");
       return
    }
    return`${username} just logged in`
}

// console.log(loginUserMessage("hitesh"));

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 100, 300, 3000))

const user = {
    username: "hitesh",
    prices: 499
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
 handleObject({
    username: "sam",
    price : 499
 })

 const myNewUsername  = [100, 200, 300, 400]

 function returnSecondValue (getArray){
    return getArray[1]
 }
//  console.log(returnSecondValue(myNewUsername));
console.log(returnSecondValue([100, 200, 300, 400]));



