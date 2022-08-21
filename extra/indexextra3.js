var customerNames = [];
customerNames.push('Sam Smith');
customerNames.push('Tommy Gunner');
customerNames.push('Joy Happy');
for (let i = 0; i< customerNames.length; i++) {
    console.log(customerNames[i]);
}
for (names1 of customerNames) {
console.log(names1);
}

//function myFunction () {
  //  for (let i = 0; i < 100; i++) {
   //     console.log(i);
   // }
//}
//myFunction();

function createFullName(firstName, lastName) {
    console.log(firstName + ' ' + lastName);
}
createFullName('Tom', 'Sawyer'); 
createFullName("Joy", "Happy");

let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
let lengths = names.map(function(element){
    return element.length;
});
console.log(lengths);

let sum = lengths.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 10);
console.log(sum);

names.forEach(function(element) {
console.log(element);
});

let evens = names.filter(function(element){
    return element.length % 2 ==0;
});
console.log(evens);

let removedElement = names.splice(1, 1);
console.log(removedElement);

var dvdPlayer = {
     heights: 3,
     widths: 18,
     depths: 12,
     weights: 7,
     colors: 'black',
     dvdName: 'Star Wars',
     printDVDName: function() {
console.log(this.dvdName);
     }
};
console.log(dvdPlayer.depths);
dvdPlayer.printDVDName();




let array1 = [1, 5, 6, 9, 10, 14];
// print the 3rd element in array1
console.log(array1[2]);
// print the last element in array1
console.log(array1[5]);
// add 16 and 3 to array1
array1.push(16, 3);


// sort the array, then print the 3rd element again
// did it change?
array1.sort(function(a, b) {return a-b});
console.log(array1);
console.log(array1[2]);

// create a variable called myTodoList that holds an empty array
var myTodoList = [];
// add three todo items to the array using a built-in array method
myTodoList.push('groceries', 'laundry', 'dishes');
// remove the second item in the array
console.log(myTodoList);
myTodoList.splice(1, 1);
console.log(myTodoList);
myTodoList.push('folding', 'cooking');
console.log(myTodoList);
// create another array, yourTodoList, and add two todo items

// create another array, ourTodoList
var yourTodoList = ['cat', 'dog']
console.log(yourTodoList);
// combine myTodoList and yourTodoList into ourTodoList
var ourTodoList = [...myTodoList, ...yourTodoList];
console.log(ourTodoList);
// sort the following array from Z-A
ourTodoList.sort ((a, b) => a.localeCompare(b));
console.log(ourTodoList);



// create a function called reverse that takes in parameter

function reverse(x) {
if(typeof(x) === "boolean"){
    return !x;
} else if (typeof(x) === "string" || typeof(x) === "number"){
    let splitX = x.split ('');
let reverseX = splitX.reverse();
let rejoinX = reverseX.join ('');
return rejoinX;
} else {
    console.log("Passed argument must be a boolean, string, or number");
}
}



// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed




// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed
function addingMachine () {
    let sum = 0
 for (let i = 0; i < arguments.length; i++) {
 let number = arguments [i];
 sum += number;
  }
return sum;
}
console.log(addingMachine(1,2,3,4));
console.log(addingMachine(1,2,3,4,5,6,7));
console.log(addingMachine(1,2,3,4,5,6,7,7,9,4,2344,112,34343,234));

// You just signed a contract as an estimator for a restoration company. 
// Your contract states that you take home 10% of the profits on the first $100,000
// 20% on the next $400,000
// 35% on the next $500,000
// 40% on all profits above $1,000,000
// create a function that will allow you to check how much of a bonus you make
// the function should take in two variables as arguments, grossInvoiced and profitMargin

function myBonus (grossInvoice, profitMargin){
    let profits = grossInvoice * profitMargin;
    let bonus = 0;
    let tier1Ceiling = 100000;
    let tier2Ceiling = 400000;
    let tier3Ceiling = 500000;

let tier1Rate = .1;
let tier2Rate = .2;
let tier3Rate = .35;
let tier4Rate = .4;

let maxBonusTier1 = tier1Ceiling * tier1Rate;
let maxBonusTier2 = tier2Ceiling * tier2Rate + maxBonusTier1;
let maxBonusTier3 = tier3Ceiling * tier3Rate + maxBonusTier2;


if(profits <= tier1Ceiling){
    bonus = (profits *.1);
} else if (profits <= (tier2Ceiling + tier1Ceiling)) {
    bonus = maxBonusTier1 + (profits - tier1Ceiling * tier2Rate) 
    } else if (profits <= (tier3Ceiling + tier2Ceiling + tier1Ceiling)) {
        bonus = maxBonusTier2 + ((profits - tier1Ceiling - tier2Ceiling) * tier3Rate)
} else if (profits > 1000000) {
    bonus = maxBonusTier3 + ((profits - tier1Ceiling - tier2Ceiling - tier3Ceiling) * tier4Rate)
    } else {
        return "Error";
    }
    return bonus;
}
console.log(myBonus(10000, .563))
console.log(myBonus(250000, .356))
console.log(myBonus(750000, .235))
console.log(myBonus(35000000, .487))


console.log (2 == "2");
console.log (2 === '2');