function reverseList(list) {
    return list.reverse();
}

let l = [1, 2, 3, 4, 5];
document.getElementById("ex9").innerHTML = `Reverses a list[${l}]: ` + reverseList(l);
