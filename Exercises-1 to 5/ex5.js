document.getElementById("ex5").innerHTML = `1st January is being a Sunday between 2014 and 2050:`;
for(let i = 2014; i <= 2050; i++) {
    let d = i + "-01-01";
    let date = new Date(Date.parse(d));
    if(date.getDay() == 0) {
        document.getElementById("ex5").innerHTML += "<br/>" + i;
    }
}
