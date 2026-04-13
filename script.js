const hero = document.getElementById("hero");
const up_logo = document.getElementById("up_logo");

let ticking = false, scrolled = false;

const swap_logo = (newSource) => {
    up_logo.style.opacity = 0;

    setTimeout(() => {
        up_logo.src = newSource;
        up_logo.style.opacity = 1;
    }, 250);
}

const handleScroll = () => {
    // Hysteresis: enter at 120, exit only at 70
    if (window.scrollY >= 10 && !scrolled) {
        hero.classList.add("scrolled");
        swap_logo("images/Obsidian logos/obsidian_logo_red_text_small.png");

        scrolled = true; // Don't repeat the scroll actions
    }
    ticking = false;
};

window.addEventListener("scroll", () => {
    if (!ticking) {
        requestAnimationFrame(handleScroll);
        ticking = true;
    }
}, { passive: true });