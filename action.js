window.onscroll = function(){
    AddOrRemove()
};

var Nav = document.getElementById("nav");
var NavPosition = Nav.offsetTop;

function AddOrRemove(){
    if(window.pageYOffset >= NavPosition){
        Nav.classList.add("arriba");
    }
    else{
        Nav.classList.remove("arriba");
    }
}