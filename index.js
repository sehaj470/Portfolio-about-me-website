
let hamIcon = document.querySelector(".ham-icon");
let hamMenuBar = document.querySelector(".ham-menu-bar");
let flag = true;

hamIcon.addEventListener("click", () => {
    if(flag) {
        hamMenuBar.style.display = "grid";
        flag = false;
    }
    else {
        hamMenuBar.style.display = "none";
        flag = true;
    }
});