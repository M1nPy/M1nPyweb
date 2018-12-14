var dis = document.getElementById("wrap");
var load = document.getElementById("loading");
var back = document.getElementById("back");
document.addEventListener("DOMContentLoaded",function(){
    load.style.transitionDuration = "2.5s";
    load.style.transform = "rotate(1000deg)";
},false);
window.onload = function(){
    load.style.display = "none";
    dis.style.display = "block";
    back.style.overflow = "visible"
};
var day = new Date();
var result = document.getElementById("daynow");
result.textContent = day.toLocaleString();