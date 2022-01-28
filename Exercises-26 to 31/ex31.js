function distanceBetnPrimeNo() {
    let cnt = 0;
    let i = 2;
    let a = 0;
    let dis;
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
        if(flag == 0) {
            if(i != 2){
                dis = i - a;
                document.getElementById("ex31").innerHTML += `Distance between ${a} & ${i}: ${dis}<br/>`;
            }
            a=i++;
            cnt++;
        } else {
            i++;
        }
    }
}

distanceBetnPrimeNo();
