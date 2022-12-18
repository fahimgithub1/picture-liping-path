function slid(){
    let slidetvalue = document.getElementById("slider").value;

    document.getElementById("seconImage").style.clipPath = "polygon(0 0, "+slidetvalue+"% 0%, "+slidetvalue+"% 100% , 0 100%)";
}