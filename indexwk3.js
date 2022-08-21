function avgHousePrice (prices)
{
var sum=0;
for(let i = 0; i < prices.length; i++)
{
    sum+=prices[i];
} 
return (sum/prices.length);
}

function log(prices, message) {
    if (message) {console.log (message)}
    console.log("Number of Houses for sale " + prices.length);
    console.log("Average House Price " + avgHousePrice(prices));
}

var price=[469900, 309000, 432000, 535000, 675000, 659900, 267000, 449900, 519000, 515000]
log(price, 'Initial Weekly House Prices');
price.push(46300, 464500, 230000)
log(price);
price.push(650000, 525000, 410000, 399000)
log(price);
price.push(475000, 437000, 455000, 389000, 259900, 585000, 393000, 384000)
log(price);
price.splice(0, 2);
log(price);
price.splice(10, 3, 515000, 632000);
log(price);
price.pop();
log(price);
price.push (620000, 260000);
log(price);
price.splice (20, 7, 487000);
log(price, 'Week End House Prices');