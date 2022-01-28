function uniqueCharacters(str) {
    let result = [];
    str.split('').filter(item => {
        if(!result.includes(item)){
            result.push(item);
        }
    });
    return result.join('');
}

let str2 = "Hi.Hi.Bye";
document.getElementById("ex25").innerHTML = `Extract unique characters from a string "${str2}": ` + uniqueCharacters(str2);
