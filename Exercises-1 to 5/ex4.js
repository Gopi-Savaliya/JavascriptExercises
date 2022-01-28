function isLeapYear(year){
    if(year % 400 == 0){
        return true;
    }
    if(year % 100 == 0) {
        return false;
    }
    if(year % 4 == 0) {
        return true;
    }
    return false;
}

function next20LeapYears(){
    let year = new Date().getFullYear();
    let i= year;
    let cnt=0;
    while(true){
        if(cnt==20){
            break;
        }
        if(isLeapYear(i)){
            document.getElementById("ex4").innerHTML += "<br/>" + i;
            i++;
            cnt++;
        }else{
            i++;
        }
    };
}

document.getElementById("ex4").innerHTML = `Prints the next 20 leap years:`;
next20LeapYears();
