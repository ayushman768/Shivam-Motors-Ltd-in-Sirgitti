function myFunction() {
    var x = document.getElementsByClassName('navigation')[0];
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}