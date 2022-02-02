function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2)));
}

let l1 = [1, 2, 3, 4, 2, 4];
let l2 = [3, 4, 5, 6, 5];
document.getElementById("ex18").innerHTML = `Merging two arrays [${l1}] & [${l2}] without duplicate elements: ` + mergeArrays(l1, l2);
