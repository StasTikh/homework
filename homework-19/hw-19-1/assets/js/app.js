let mass = +prompt ("Enter your weight (kilogramms):");
let height  = +prompt ("Enter your height (meters):");
let index = mass / (height * height);
if (index <= 16) {
    console.log ("Very severely underweight");
} else if (index > 16 && index < 18.5) {
    console.log ("Severely underweight");
} else if (index > 15.5 && index <= 25) {
    console.log ("Normal (healthy weight)");
} else if (index > 25 && index <= 30) {
    console.log ("Overweight");
} else if (index > 30 && index <= 35) {
    console.log ("Obese Class I (Moderately obese)");
} else if (index > 35 && index <= 40) {
    console.log ("Obese Class II (Severely obese)");
} else if (index > 40) {
    console.log ("Obese Class III (Very severely obese)");
}



