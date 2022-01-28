function stringToArray(str) {
    return Array.from(str.split(" "));
}

let str = "Gopi Savaliya";
document.getElementById("ex20").innerHTML = `Split a string "${str}" and convert it into an array of words: ` + stringToArray(str);
