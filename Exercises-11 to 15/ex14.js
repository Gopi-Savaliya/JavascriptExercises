function concatList(list1, list2) {
    return list1.concat(list2);
}

let list1 = ['z', 'c', 'a'];
let list2 = [11, 12, 13];

document.getElementById("ex14").innerHTML = `Concat lists [${list1}] & [${list2}]: ` + concatList(list1, list2);
