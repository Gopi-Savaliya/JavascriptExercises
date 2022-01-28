function isHexadecimal(num) {
    let arr = num.split('');
    for(let i = 0;i < arr.length; i++) {
        if((arr[i] < '0' || arr[i] > '9') && (arr[i] < 'A' || arr[i] > 'F')) {
            return false;
        }
        return true;
    }
}

let num = 'BF57C';
document.getElementById("ex27").innerHTML = `"${num}" value is hexadecimal value or not: ` + isHexadecimal(num);
num = 'X7';
document.getElementById("ex27").innerHTML += `<br/>"${num}" value is hexadecimal value or not: ` + isHexadecimal(num);
