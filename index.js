const express = require("express");
const { isPrimitive } = require("util");
const app = express();
const port = 3000;

// prime-numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function filterPrimeNumbers(num) {
  return isPrime(num);
}

app.get("/prime-numbers", (req, res) => {
  let result = numbers.filter(num => filterPrimeNumbers(num));
  res.json(result);
});


// positive-numbers
let positiveNumber =  [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function filterPositiveNumbers(num){
  return num > 0;
}

app.get('/positive-numbers',(req,res)=>{
  let result = positiveNumber.filter(num => filterPositiveNumbers(num))
  res.json(result)
})

// negative-numbers
let negativeNumber =  [-10, -5, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function filterNegativeNumbers(num){
  return num < 0;
}

app.get('/negative-numbers',(req,res)=>{
  let result = negativeNumber.filter(num => filterNegativeNumbers(num))
  res.json(result)
})


// odd-numbers
let oddNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
function filterOddNumbers(num){
  return num % 2 !== 0
}
app.get('/odd-numbers',(req,res)=>{
  let result = oddNumber.filter(num => filterOddNumbers(num))
  res.json(result)
})

// numbers-greater-than
let numbersGreaterThan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
function filterNumbersGreaterThan(num,value){
  return num > value
}
app.get('/numbers-greater-than',(req,res)=>{
  let value = req.query.value
  let result = numbersGreaterThan.filter(num => filterNumbersGreaterThan(num,value))
  res.json(result)
})

// numbers-less-than
let numberLessThan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
function filterNumbersLessThan(num,value){
  return num < value
}
app.get('/numbers-less-than', (req, res)=>{
  let value = req.query.value
  let result = numberLessThan.filter(num => filterNumbersLessThan(num,value))
  res.json(result)
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
