//create a variable to hold the quanitiy of available plane seats left on a flight
let availablePlaneSeats = 6;

//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 23.64;

//create a variable to hold a person's middle initial
let middleInitial = "S";

//create a variable to hold true if it's hot outside and false if it's cold outside
let isHotOutside = false;

//create a variable to hold a customer's first name
let customerFirstName = "Sally"

//create a variable to hold a street name
let streetAddress = "1234 W Sesame St";

// print all variable to the console
console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(middleInitial);
console.log(isHotOutside);
console.log(customerFirstName);
console.log(streetAddress);


//a customer booked 2 plane seats, remove 2 seats from the available seat variable
availablePlaneSeats = availablePlaneSeats - 2;
console.log(availablePlaneSeats);
costOfGroceries = costOfGroceries + 2.15;
console.log (costOfGroceries);


//impulse candy bar purchase, add 2.15 to the grocery total
//costOfGroceries = costOfGroceries + 2.15;


//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = 'T';
console.log(middleInitial);

//the season has changed, update the hot variable to be opposite of what it was
isHotOutside = !isHotOutside;
console.log(isHotOutside);

//create a new variable called full name using the customer's first name, middle initial, and a last name
let fullName = customerFirstName + ' ' + middleInitial + " " + "Smith";
console.log (fullName);


//print a line to the console that introduces the customer and say that they live at the address variable
console.log ("Hi, my name is " + customerFirstName + " and I live at " + streetAddress + '.') 


// 5 == 4
// 5 > 4
// 5 < 4
// 5 > 4 && 4 < 10
// 4 > 10 || 1 == 1

var ageRequiredToDrive = 16;
var currentAge = 14;
var canPersonDrive = currentAge >= ageRequiredToDrive;
if (canPersonDrive) {
console.log('This person can drive');

} else {
console.log('This personn cannot legally drive')
}
console.log(canPersonDrive);

var costOfEggs = .99;
var numberOfDOzensOfEggsToPurchase = 0;
if (costOfEggs > 3) {
    numberOfDOzensOfEggsToPurchase = 1;
}
else if (costOfEggs > 2) {
    numberOfDOzensOfEggsToPurchase = 2;
}
else if (costOfEggs > 1)
{
numberOfDOzensOfEggsToPurchase = 3;
}
else
{numberOfDOzensOfEggsToPurchase = 4;
}
console.log ("i will buy " + numberOfDOzensOfEggsToPurchase + " dozen eggs.");


var grade = 'A';

switch (grade) {
    case 'A':
        console.log('90-100'); 
        break;
        case 'B':
         console.log ('80-89')   
            break;
    case 'C':
        console.log('70-79');
        break;
        case 'D':
            console.log('60-69');
            break;
            default:
                console.log('0-59');
}

for (let i = 0; i < 10; i++)
{
console.log (i);
}
console.log('whatever comes after 10');


for (let i = 0; i <= 20; i++)
{
if (i % 2 == 0) {
console.log(i);
}   
}
console.log ('odd');

let names = ['Sam', 'Jane', 'Sally', 'Alan'];

for (let i = 0; i < names.length; i++)
{
    console.log (names [i]);
}

// let a = 110;
//while (a < 10)
//{
//    console.log (a); 
  //  a++;
//}

//do {
 //   console.log(a);
//} while (a < 10)


//for (i in names){
//    console.log(i)
//}


//for (names of names) {
  //  console.log(names);
//}

var cupsOfFlour = 0;
while (cupsOfFlour <5) {
    console.log('Scooping a cup of flour into the bowl');
    cupsOfFlour +=1;
    console.log('There are '+ cupsOfFlour + ' cups of flour in the bowl');
}
console.log('I am done scooping flour');

for (var cupsOfFlour = 0; cupsOfFlour < 5; cupsOfFlour++) 
{
    console.log('Scooping a cup of flour in the bowl');
    console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');
}



//for (var i = 0; i < 10; i++) 
//{
  //  console.log(i);
//}


let i=10;
do {
    console.log(i);
}
while (i < 3);