const ticketPrice = 0.21;

let nKm;
let userAge;

do{
    nKm = prompt("How many km do you want to travel?");//nKm input
}while(nKm<=0||isNaN(nKm));//negative number or not a number control
do{
    userAge = prompt("How old are you?");//userAge input
}while(userAge<=0||isNaN(userAge));//negative number or not a number control

let outputPrice = nKm * ticketPrice;//outputPrice NO DISCOUNTS

if(userAge < 18)
    outputPrice = (outputPrice/100)*80;//outputPrice -20% if userAge<18
else if(userAge > 65)
    outputPrice = (outputPrice/100)*60;//outputPrice -40% if userAge>65

alert('The total import is: ' + outputPrice.toFixed(2) + '$')//toFixed for 2 decimals