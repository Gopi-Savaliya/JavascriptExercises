function alternateConcat(list1, list2) {
    let left = 0;
    let right = 0;
    let list = [];
    while(true) {
        if(left < list1.length && right < list2.length) {
            list.push(list1[left++]);
            list.push(list2[right++]);
        } else if(left == list1.length && right < list2.length) {
            list.push(list2[right++]);
        } else if(left < list1.length && right == list2.length) {
            list.push(list1[left++]);
        } else {
            break;
        }
    }
    return list;
}

let l1 = ['a', 'b', 'c'];
let l2 = [1, 2, 3];
document.getElementById("ex15").innerHTML = `Combines two lists [${l1}] and [${l2}] by alternatingly taking element: ` + alternateConcat(l1, l2);
