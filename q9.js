function armstrongNumber(){
    for(i=1; i<10; i++){
        for (var x = 0; x < 10; ++x) {
            for (var y = 0; y < 10; ++y){  
                var answer = (Math.pow(i,3) + Math.pow(x,3) + Math.pow(y,3));
                var sum = (i * 100 + x * 10 +  y);
                if (answer == sum) {
                console.log(answer);}
            }
        }
    }
}
armstrongNumber();