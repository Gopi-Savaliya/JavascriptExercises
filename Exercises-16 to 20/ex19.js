function largestElement(arr) {
    let max;
    let maxindex;
    if(arr.length == 0) {
        return;
    } else {
        max = arr[0];
    }
    arr.forEach((value, index) => {
        if(max<value){
            max = value;
            maxindex = index;
        }
    });
    return maxindex;
}

let arr = [1, 2, 4, 3, 6, 10, 7];
document.getElementById("ex19").innerHTML = `largest element of array [${arr}] index: ` + largestElement(arr);
