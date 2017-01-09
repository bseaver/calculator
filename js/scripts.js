var saySomething = function(sayWhat) {
	alert(sayWhat);
};

var getString = function(myPrompt) {
	return prompt(myPrompt);
};

var add = function(n1, n2) {
	return n1 + n2;
};

var multiply = function(n1, n2) {
	return n1 * n2;
};

var divide = function(n1, n2) {
	return n1 / n2;
};

var subtract = function(n1, n2) {
	return n1 - n2;
};

var remainder = function(n1, n2) {
	return n1 % n2;
};

var calculateBMI = function(kg, m) {
  return kg / (m * m);
};

var celsiusToFahrenheit = function( degreeC ) {
  return (degreeC * 9) / 5 + 32;
};

// Test Section:
/*
saySomething("20 + 5 = " + add(20, 5));
saySomething("20 - 5 = " + subtract(20, 5));
saySomething("20 * 5 = " + multiply(20, 5));
saySomething("20 / 5 = " + divide(20, 5));
saySomething("23 % 5 = " + remainder(23, 5));
saySomething(
  "0 in Celsius is what in Fahrenheit: " + celsiusToFahrenheit(0)
);

*/

/*
var height = getString("Please enter your height meters:");
var weight = getString("Please enter your weight in kilograms:");

saySomething("Your BMI is " +calculateBMI(weight, height) + " sorry");
*/
