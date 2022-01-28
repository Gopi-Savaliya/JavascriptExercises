let arr = [];
arr.push(prompt("Enter number 1(exercise 22):",0));
arr.push(prompt("Enter number 2(exercise 22):",0));
arr.push(prompt("Enter number 3(exercise 22):",0));
arr.push(prompt("Enter number 4(exercise 22):",0));
arr.push(prompt("Enter number 5(exercise 22):",0));
let largest = arr[0];
for(let i = 0; i < 5; i++ ) {
    if(largest < arr[i]) {
        largest = arr[i];
    }
}
alert("The largest number: " + largest)
document.getElementById("ex22").innerHTML = "The largest of five numbers(Alerted): " + largest;
