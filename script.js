const header = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        header.classList.add("visible");
        console.log("visible");
    }
    else {
        header.classList.remove("visible")
    }
});