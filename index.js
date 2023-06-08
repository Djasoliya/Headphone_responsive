function click_btn(){
    var list = document.getElementById("navbar");
    list.classList.toggle("active");
    list.classList.remove("deactive");

    var x = document.getElementById("bar");
    x.classList.toggle("open");
}
