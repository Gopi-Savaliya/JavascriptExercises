function capitalizeFirstLetter(str) {
    if(str==""){
        return;
    }
    return str[0].toUpperCase() + str.slice(1);
}

let str = "hi, how are you?";
document.getElementById("ex21").innerHTML = `Capitalize the first letter of a string "${str}": ` + capitalizeFirstLetter(str);
