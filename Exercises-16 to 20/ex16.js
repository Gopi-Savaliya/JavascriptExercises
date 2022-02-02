function digitList(num) {
    return String(num).split('').map(Number);
}

let num = 2342;
document.getElementById("ex16").innerHTML = `List digits from number ${num}: ` + digitList(num);
