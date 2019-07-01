var area =document.getElementById('scrollBox');    
var lHeight = 24;
var time = 50;
area.innerHTML+=area.innerHTML;
area.scrollTop = 0;
var timer;
function scrollMove(){
area.scrollTop++;
timer = setInterval("scrollUp()",time);
}

function scrollUp(){
if(area.scrollTop % lHeight==0){//滚动一行后，延时2秒
clearInterval(timer);
setTimeout("scrollMove()",0);
}else{
area.scrollTop++;
if(area.scrollTop>=area.scrollHeight/2){    //判断滚动高度,当滚动高度大于area本身的高度时，使其回到原点重新滚动    
area.scrollTop = 0;    
}
}

}    

setTimeout("scrollMove()",0);//延迟2秒后执行scrollMove


