let arr = [];
arr.push(prompt("Enter number 1(exercise 22):",0));
arr.push(prompt("Enter number 2(exercise 22):",0));
arr.push(prompt("Enter number 3(exercise 22):",0));
arr.push(prompt("Enter number 4(exercise 22):",0));
arr.push(prompt("Enter number 5(exercise 22):",0));
alert("The largest number: " + Math.max.apply(Math, arr))
document.getElementById("ex22").innerHTML = "The largest of five numbers(Alerted): " + Math.max.apply(Math, arr);
