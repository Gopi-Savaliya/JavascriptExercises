function noOfVowels(str) {
    let result = 0;
    str1.split('').forEach(item => {
        if(item == 'a' || item == 'A' || item == 'e' || item == 'E' || item == 'i' || item == 'I' || item == 'o' || item == 'O' || item == 'u' || item == 'U') {
            result++;
        }
    });
    return result;
}

let str1 = "axeiAO";
document.getElementById("ex24").innerHTML = `Number of vowels within the string "${str1}": ` + noOfVowels(str1);
