function Sum(n) {
    let sum = 0;
    for(let i = 1;i <= n; i++) {
        sum += i;
    }
    return sum;
}

let n = prompt("Enter n for sum(exercise):",0); 
document.getElementById("ex3").innerHTML = `Sum of the numbers 1 to ${n}: ` + Sum(n);
