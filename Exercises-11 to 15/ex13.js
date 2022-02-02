function isPalindrome(string) {
    let left = 0;
    let right = string.length - 1;
    while(left<right) {
        if(string[left++] != string[right--]) {
            return false;
        }
    }
    return true;
}

let str = "HiH";
document.getElementById("ex13").innerHTML =  `"${str}" is palindrom or not: ` + isPalindrome(str);
