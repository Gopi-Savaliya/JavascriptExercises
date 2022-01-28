function largestElement(list) {
    if(list.length == 0) {
        return;
    }
    let largestElement = list[0];
    for(let i = 0; i < list.length; i++) {
        if(largestElement < list[i]) {
            largestElement = list[i];
        }
    }
    return largestElement;
}

let list = [1,3,2,10];
document.getElementById("ex8").innerHTML = `The largest element in a list[${list}]: ` + largestElement(list);
