const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] 

// const newNums = myNumbers.map((nums) => nums + 10)

const newNums = myNumbers
           .map((nums) => nums * 10)
           .map( (nums) => nums + 1)

console.log(newNums);