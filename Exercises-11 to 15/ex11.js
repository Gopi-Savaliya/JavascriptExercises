function oddElements(list) {
    return list.filter(n => n%2);
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.getElementById("ex11").innerHTML = `Odd elements of list[${list}]: ` + oddElements(list);
