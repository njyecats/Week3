var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var res = ages [ages.length-1]-ages[0];
console.log (res);
ages.push (40);
res = ages [ages.length-1]-ages[0];
console.log (res);
var total = 0;
for(let i = 0; i < ages.length; i++){
    total+=ages[i];
}
console.log (total/ages.length);

var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
//console.log (names);
var letters = 0;
var cat = '';
var nameLengths = [];
nameLengths.length = names.length;

for (let i = 0; i < names.length; i++){ 
    nameLengths [i]=names [i].length;
   
    cat+=names[i]+ ' '; 
    console.log (names[i].length);
    letters+=names[i].length;
}
console.log (nameLengths);
//console.log(cat);

//ages [ages.length-1];
//console.log ('the last element of ages is: ' + ages[ages.length-1]); 


//console.log ('the first element of ages is: ' + ages[0]); 
total=0;
for (let i = 0; i < nameLengths.length; i++) {
total += nameLengths [i];
}
console.log (total);

function repeatCat(word, n) 
{var results = '';
for(let i = 0; i < n; i++)
{
results+=word;
}
return results; 
};
console.log(repeatCat("Hello", 3));


// function createFullName(firstName, lastName) {
   // return firstName + ' ' + lastName;
// }


function sumArray(numbers)
{let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
return sum > 100;
}
console.log(sumArray(ages));


function avgArray(numbers)
{let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum+=numbers[i];
}
return sum/numbers.length;
}
console.log (avgArray(ages));

function compareArray(first, second)
{
return avgArray (first)> avgArray (second);
}
console.log (compareArray(ages, nameLengths));

function willBuyDrink (isHotOutside, moneyInPocket)
{
return isHotOutside && (moneyInPocket > 10.50) 
}
console.log ("Will Buy Drink Testing");
console.log (willBuyDrink(true, 20));
console.log (willBuyDrink(true, 9.99));
console.log (willBuyDrink(false, 12));
console.log (willBuyDrink(false, 10));
