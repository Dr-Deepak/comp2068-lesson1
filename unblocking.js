// link to the filesystem
var fs = require('fs');

//load food asynchronusly
var food = fs.readFile('food.txt', 'utf8', function(err,food) {
  console.log(food + '\n');
  console.log('DRINKS: '); // putted here to controll the display with headings
});

console.log('FOOD');

//load drinks asynchronusly
var  drinks  = fs.readFile('drinks.txt', 'utf8', function(err,drinks) {
  console.log(drinks);
});
