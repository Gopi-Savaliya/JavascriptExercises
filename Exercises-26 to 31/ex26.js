function isAlphaNumeric(str) {
    let regex = /^[A-Za-z0-6]+$/;
    if(str.match(regex)) {
        return true;
    }
    return false;
}

let str = "XY26";
document.getElementById("ex26").innerHTML = `"${str}" value is alphanumeric or not: ` + isAlphaNumeric(str);
str = "XY26$%";
document.getElementById("ex26").innerHTML += `<br/>"${str}" value is alphanumeric or not: ` + isAlphaNumeric(str);
