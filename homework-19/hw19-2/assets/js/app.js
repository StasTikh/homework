
alert ("Lets check a Leap year!")


let year = +prompt ("Please, enter the year number!");

if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
    console.log ("It's a leap year!");
} else {console.log ("It's a regular year!")} 

