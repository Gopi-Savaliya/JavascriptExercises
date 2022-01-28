const str = "Hello, I'm XYZ";

let string = "";

if(str.length > 2) {
    let first = str.charAt(0);
    let last = str.charAt(str.length - 1);
    string = last + str.substring(1, str.length - 1) + first;
} else if(str.length == 2){
    let first = str.charAt(0);
    let last = str.charAt(str.length - 1);
    string = last + first;
} else {
    string = str;
}

document.getElementById("ex7").innerHTML = `"${str}" string changing the position of first and last characters: ` + string;
