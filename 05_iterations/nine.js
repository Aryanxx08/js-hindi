const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval ${curval}`);
//     return acc + curval
// }, 0)

const myTotal = myNums.reduce( (acc, curval) => acc+curval, 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },
    {
        itemName : "python",
        price : 4500
    },
    {
        itemName : "mobile dev course",
        price : 5000
    },
    {
        itemName : "data scientist",
        price : 11990
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);``