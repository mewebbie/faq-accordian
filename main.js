var item=document.getElementsByClassName("box");
var i;
for(i=0;i<item.length;i++) {
    item[i].addEventListener("click", togClass);
}
function togClass(){
    var j = this.classList.contains("active");
    $(".box").removeClass("active");
    this.classList.toggle("active",!j);
}


