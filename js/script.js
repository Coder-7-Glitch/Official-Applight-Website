// Navbar
const navbar = document.querySelector("nav")
window.addEventListener('scroll', () => {
    if (window.scrollY > 56) {
        navbar.classList.add("s-Navbar")
    }
    else if (window.scrollY < 56) {
        navbar.classList.remove("s-Navbar")
    }
})
// Watch
const watch1 = document.getElementById("video-icon")
const watch = document.getElementById("w-Icon")
watch1.onclick = () => {
    document.getElementById("w-Icon").style.display = "flex";
}
watch.onclick = () => {
    document.getElementById("w-Icon").style.display = "none";
}
// Slider
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}