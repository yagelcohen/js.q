function divisor(integer1, integer2){
    if(integer2===0){ return integer1
    }else{
        let answer=integer1 % integer2;
            return divisor(integer2, answer);
    }
}
console.log(divisor(25, 50))
