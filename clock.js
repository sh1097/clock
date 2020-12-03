var h,m,s,date;
function analog(){
date=new Date();
hour=date.getHours();
minute=date.getMinutes();
seconds=date.getSeconds();
hr=(30*hour+(minute/2));
min=6*minute;
sec=6*seconds;

document.getElementById("hour").style.transform=`rotate(`+hr+`deg)`;
document.getElementById("min").style.transform=`rotate(`+min+`deg)`;
document.getElementById("sec").style.transform=`rotate(`+sec+`deg)`;

document.getElementById("Myclock").innerHTML=(hour+ ":"+minute +":"+ seconds);


}
setInterval(analog);





 

