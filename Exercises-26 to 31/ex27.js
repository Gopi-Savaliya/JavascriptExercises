function isHexadecimal(num) {
    return (parseInt(num,16).toString(16) === num.toLowerCase());
}

let num = 'BF57C';
document.getElementById("ex27").innerHTML = `"${num}" value is hexadecimal value or not: ` + isHexadecimal(num);
num = 'X7';
document.getElementById("ex27").innerHTML += `<br/>"${num}" value is hexadecimal value or not: ` + isHexadecimal(num);
