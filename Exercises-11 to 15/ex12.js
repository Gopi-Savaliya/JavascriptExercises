function add(sum, x) {
    return sum + x;
}

function total(list) {
    return list.reduce(add, 0);
}

let l = [1, 2, 3, 4, 5];
document.getElementById("ex12").innerHTML = `Total of list[${l}]: ` + total(l);
