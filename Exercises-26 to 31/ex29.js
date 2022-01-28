function distinctElements(num) {
    return Array.from(new Set(num));
}

let number = [1, 2, 4, 2, 1, 5];
document.getElementById("ex29").innerHTML = `[${number}] array with distinct elements: ` + distinctElements(number);