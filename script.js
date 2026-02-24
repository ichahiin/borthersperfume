// const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".navlinks");

const menuList = document.getElementById("menu-list");
menuList.style.maxHeight = "0px";

const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

function toggleMenu() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "350px";
    }
    else {
        menuList.style.maxHeight = "0px";
    }
}

function toggleModal() {
    modal.classList.add("open")
}
openBtn.addEventListener("click", () => {
    modal.classList.add("open")
})

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open")
})

jQuery(document).ready(function ($) {
    $(".slider-img").on("click", function () {
        $(".slider-img").removeClass("active");
        $(this).addClass("active");
    });
});