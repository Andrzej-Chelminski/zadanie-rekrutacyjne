var btnContainer = document.getElementById("navigation");

var btns = btnContainer.getElementsByClassName("navigation__btn");

for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
});
}

function menu() {
    var nav = document.getElementById("mobile-navigation");
    var icon_close = document.getElementById("navigation__dropdown-icon--close");
    var icon_open = document.getElementById("navigation__dropdown-icon--open");
    var icon_status = icon_open.getAttribute("style");

    if (icon_status == "display: block;" || icon_status == "display: block") {
        nav.style.transform = "translateX(0)";
        icon_open.style.display = "none";
        icon_close.style.display = "block";
    }   
    else {
        nav.style.transform = "translateX(-100%)";
        icon_open.style.display = "block";
        icon_close.style.display = "none";
    }
}