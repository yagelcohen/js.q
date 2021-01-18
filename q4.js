let x = -10;
let y = -9;
let z = -8;
let a = -11;
let e = -12;
if (x>y && x>z && x>a && x>e){
    console.log(x);
}else if (y>x && y>z && y>a && y>e){
    console.log(y);
}else if (z>x && z>y && z>a && z>e){
    console.log(z);
}else if (a>x && a>y && a>z && a>e){
    console.log(a);
}else{
    console.log(e);
}