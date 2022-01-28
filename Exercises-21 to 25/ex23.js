function alphabeticalOrder(str) {
    return string.split('').sort().join('');
}
let string = "GFEDCBA";
document.getElementById("ex23").innerHTML += `string "${string}" with letters in alphabetical order: ` + alphabeticalOrder(string);
