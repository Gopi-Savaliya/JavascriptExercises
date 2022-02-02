function sumOfFirst100PrimeNo() {
    let cnt = 0;
    let i = 2;
    let sum = 0;
    while(true) {
        if(cnt==100){
            break;
        }
        let flag = 0;
        for(let j = 2; j <= (i/2); j++) {
            
            if(i % j == 0) {
                flag = 1;
                break;
            }
        }
        if(flag==0) {
            sum += i++;
            cnt++;
        } else {
            i++;
        }
    }
    return sum;
}

document.getElementById("ex30").innerHTML += `Sum of first 100 prime numbers: ` + sumOfFirst100PrimeNo();
