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

var subtract = function(n1, n2) {
	return n1 - n2;
};

var remainder = function(n1, n2) {
	return n1 % n2;
};
var combineThreeStrings = function(str1, str2, str3) {
	return "this is the new sentence " + str1 + " " + str2 + " " + str3;
};

var age = getString("Please enter your age:");
var name = getString("Please enter your name:");
var food = getString("Please enter your food:");

saySomething(combineThreeStrings(age, name, food)); 
