function duplicateValues(list) {
    let uniqueElements = new Set(list);
    return list.filter(item => {
        if (uniqueElements.has(item)) {
            uniqueElements.delete(item);
        } else {
            return item;
        }
    });
}

let list = ["hi", "bye", "hi", "Not Now", "bye", "hello"];
document.getElementById("ex17").innerHTML = `Duplicate values in list[${list}]: ` + duplicateValues(list);
