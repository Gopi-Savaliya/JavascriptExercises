function swapPosOfFirstAndLast(string){
    if(string.length < 1) {
        return string;
    }
    let arr = string.split("");
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr.join("");
}
const str = "Hello, I'm XYZ";
document.getElementById("ex7").innerHTML = `"${str}" string changing the position of first and last characters: ` + swapPosOfFirstAndLast(str);
