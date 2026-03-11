const hero = document.getElementById("hero");

let ticking = false;

const handleScroll = () => {
    // Hysteresis: enter at 120, exit only at 70
    if (window.scrollY >= 300) {
        hero.classList.add("scrolled");
    } else if (window.scrollY <= 119) {
        hero.classList.remove("scrolled");
    }
    ticking = false;
};

window.addEventListener("scroll", () => {
    if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
    }
}, { passive: true });