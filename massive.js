/*var toonuud=[1,2,3,4,5,6];
console.log(toonuud[0])
for(var i=0;i<=5;i++){
    console.log(toonuud[i])
}
console.log("1.")
var too=[1,2,3,4,5];
console.log(too);
console.log(too[too.lenght-1]);
console.log(too[0]*too[too.length-1]);
for(var i=0; i<=too.length-1; i++){
    if(too[i]%2==0){
        console.log(too[i] +" tegsh")
    }else if(too[i]%2==1){
        console.log(too[i] +" sondgoi")
    }
}
var too=[1,2,3,4,5,6,7,8,9,10];
var a=0;
var urjver=1;
for(var i=0; i<=9; i++){
    a=a+too[i];
    urjver=urjver*too[i];
}
console.log(a)
console.log(urjver)
var num=[1,2,3,4,5];
var random = Math.floor(Math.random()*(num.length));
console.log(num[random]);*/
var body=document.getElementsByTagName('body')[0];
console.log(body)
var colors=['red','green','brown','blue'];
var i=-1;
function next(){
    i++;
    if(i>3){
        i=-1;
    }
    body.style.backgroundColor=colors[i];
}
function prev(){
    i--;
    if(i<0){
        i=3 ;
    }
    body.style.backgroundColor=colors[i];
}
var s;
var autoBtn=document.querySelector('.auto');
var stopBtn=document.querySelector('.stop');
function auto(){
    i++;
    if(i>3){
        i=0;
    }
    body.style.backgroundColor=colors[i];
    s=setTimeout(auto, 1000);
    autoBtn.disabled=true;
    stopBtn.disabled=false;
}
function stop(){
    stopBtn.disabled=true;
    autoBtn.disabled=false;
    clearTimeout(s);
}