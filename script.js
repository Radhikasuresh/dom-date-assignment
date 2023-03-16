var input=document.createElement("input");
input.setAttribute("type","date");
input.setAttribute("id","dob");
var button=document.createElement("button");
button.innerHTML="Display Data";
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",displaydata);
document.body.append(input,button);
function displaydata(){
var inputs=document.getElementById('dob').value;
console.log(inputs);
if(Date.parse(inputs)){
    var inputdate=new Date(inputs);
console.log(inputdate);
var inp=inputdate;
var div=document.createElement("div");
div.innerHTML="Given input date is "+inp;
document.body.append(div);
var currentdate=new Date();
console.log(currentdate);
//Milliseconds diff
var millisecdiff=currentdate.getTime()-inputdate.getTime();
console.log( millisecdiff);
var milli=millisecdiff;
var div=document.createElement("div");
div.innerHTML="milliseconds:"+milli;
document.body.append(div);

//var secondsdiff=Math.floor(millisecdiff/1000);
//console.log(secondsdiff);
//seconds diff
var secondsdiff=mathfloor(millisecdiff,1000);
console.log(secondsdiff);
var sec=secondsdiff;
var div=document.createElement("div");
div.innerHTML="seconds:"+sec;
document.body.append(div);
//Minutes diff
var minutesdiff=mathfloor(secondsdiff,60);
console.log(minutesdiff);
var min=minutesdiff;
var div=document.createElement("div");
div.innerHTML="minutes:"+min;
document.body.append(div);
//Hours diff
var hoursdiff=mathfloor(minutesdiff,60);
console.log(hoursdiff);
var hour=hoursdiff;
var div=document.createElement("div");
div.innerHTML="hours:"+hour;
document.body.append(div);
//Day diff
var daydiff=mathfloor(hoursdiff,24);
console.log(daydiff);
var day=daydiff;
var div=document.createElement("div");
div.innerHTML="days:"+day;
document.body.append(div);
//Year diff
var yeardiff=getyears(inputdate,currentdate);
console.log(yeardiff);
var year=yeardiff;
var div=document.createElement("div");
div.innerHTML="year:"+year;
document.body.append(div);
//Month diff
var monthdiff=getmonths(inputdate,currentdate);
console.log(monthdiff);
var month=monthdiff;
var div=document.createElement("div");
div.innerHTML="month:"+month;
document.body.append(div);

}
}

function mathfloor(value1,value2){
    return Math.floor(value1/value2);
}

function getyears(value1,value2){
    var d1=new Date(value1);
    var d2=new Date(value2);
    return d2.getFullYear()-d1.getFullYear();
}
function getmonths(value1,value2){
    var year=getyears(value1,value2)
    var months=(year*12)+(value2.getMonth()-value1.getMonth());
    return months;
}



  
