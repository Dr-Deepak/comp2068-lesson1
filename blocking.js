//link to filesystem library
var fs = require('fs');

//OPEN & READ FOOD listen
var food  = fs.readFileSync('food.txt', 'utf8');

//print food listen
console.log('FOOD:');
console.log(food);

//OPEN & READ drinks listen
var drink  = fs.readFileSync('drinks.txt', 'utf8');
console.log('DRINKS:');
console.log(drink);
