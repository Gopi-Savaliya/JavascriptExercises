function displayObject(obj) {
    let {firstName, lastName} = obj;
    document.getElementById("ex28").innerHTML = `firstName: ${firstName}<br/>lastName: ${lastName}`;
}

let person = {
    firstName: "Gopi",
    lastName: "Savaliya"
};

displayObject(person);
