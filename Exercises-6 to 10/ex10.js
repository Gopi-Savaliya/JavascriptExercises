function checkElementInList(element, list) {
    return list.includes(element);
}

let eList = ["Hi", "Bye", "Not Now"];
document.getElementById("ex10").innerHTML = `Checks whether an element "Bye" occurs in a list[${eList}]: ` + checkElementInList("Bye", eList);
document.getElementById("ex10").innerHTML += `<br/>Checks whether an element "iii" occurs in a list[${eList}]: ` + checkElementInList("iii", eList);

