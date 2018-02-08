// task 1

var a,b,c,output;
a = 3;
b = 5;


output = "var a = 3;\n var b = 5;\n var c;\n-----------\n" +
        "a + b = " + (a + b) + "\n" +
        "a - b = " + (a - b) + "\n" +
        "a * b = " + (a * b) + "\n" +
        "a / b = " + (a / b) + "\n" +
        "a % b = " + (a % b) + "\n" +
        "a += b = " + (a += b) + "\n" +
        "a -= b = " + (a -= b) + "\n" +
        "a *= b = " + (a *= b) + "\n" +
        "a /= b = " + (a /= b) + "\n" +
        "a == b = " + (a == b) + "\n" +
        "a != b = " + (a != b) + "\n" +
        "a > b = " + (a > b) + "\n" +
        "a < b = " + (a < b) + "\n" +
        "!a && !c  = " + (!a && !c ) + "\n" +
        "!a || !c ;  = " + (!a || !c ) + "\n";

alert(output);

//task 2

var first_name = "Tianna";
var last_name = "Shivkumar";
var email = "shiv0011@algonquinlive.com";
var output_1;

output_1 = "My name is " + first_name + " " + last_name + ". You can contact me at " + email;

alert(output_1);

//task 3

var numbers = [
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100), 
    Math.floor(Math.random() * (200 - 100) + 100)
];


i = 0
let sum = numbers[i] + numbers[i];

while (i < numbers.length) {
    if (numbers[sum] % 2 === 0) {
        console.log(numbers[i] +  " + " + numbers[i] " = " + sum + "\n" + "This is an even number.");
    } else {
        console.log(numbers[i] +  " + " + numbers[i] " = " + sum + "\n" + "This is an odd number.");
    } 
};

alert(numbers);









