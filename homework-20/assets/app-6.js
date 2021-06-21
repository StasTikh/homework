let count = window.prompt ("Please, enter the finish number");
simpleNumbers:
for (let number = 3; number <= count; number++) { 
  for (let check = 2; check < number; check++) {
    if (number % check == 0) {
     continue simpleNumbers;
    }
  }
  document.writeln(number);
}