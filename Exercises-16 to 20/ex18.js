function mergeArrays(arr1, arr2) {
    let array = [];
    arr1.filter(item => {
        if(!array.includes(item)) {
            array.push(item);
        }
    });
    arr2.filter(item => {
        if(!array.includes(item)) {
            array.push(item);
        }
    });
    return array;
}

let l1 = [1, 2, 3, 4, 2, 4];
let l2 = [3, 4, 5, 6, 5];
document.getElementById("ex18").innerHTML = `Merging two arrays [${l1}] & [${l2}] without duplicate elements: ` + mergeArrays(l1, l2);
