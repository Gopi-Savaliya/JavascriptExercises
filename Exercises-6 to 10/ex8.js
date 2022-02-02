function largestElement(list) {
    return Math.max.apply(Math, list);
}

let list = [1,3,2,10];
document.getElementById("ex8").innerHTML = `The largest element in a list[${list}]: ` + largestElement(list);
