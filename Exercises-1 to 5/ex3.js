let Sum = (n) => (parseInt(n) * (parseInt(n) + 1)) / 2;

let n = prompt("Enter n for sum(exercise):",0); 
document.getElementById("ex3").innerHTML = `Sum of the numbers 1 to ${n}: ` + Sum(n);
