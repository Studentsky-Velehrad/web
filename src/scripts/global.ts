// Mobile menu functionality
const hamburger = document.querySelector('.hamburger');
const hamburgerClose = document.querySelector('.hamburger-close');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

function toggleMenu() {
    hamburger?.classList.toggle("open");
    mobileMenu?.classList.toggle('open');
    mobileOverlay?.classList.toggle('open');
}

hamburgerClose?.addEventListener('click', () => {
    toggleMenu();
});

hamburger?.addEventListener('click', (e) => {
    toggleMenu();
    e.stopPropagation();
});

mobileMenu?.addEventListener('click', (e) => {
    e.stopPropagation();
});

mobileOverlay?.addEventListener('click', () => {
    if (mobileMenu?.classList.contains('open')) {
        toggleMenu();
    }
});

document.addEventListener('click', (e) => {
    if (mobileMenu?.classList.contains('open') && 
        !mobileMenu.contains(e.target as Node) && 
        !hamburger?.contains(e.target as Node)) {
        hamburger?.classList.remove('open');
        mobileMenu?.classList.remove('open');
        mobileOverlay?.classList.remove('open');
    }
});

window.addEventListener('scroll', () => {
    if (mobileMenu?.classList.contains('open')) {
        hamburger?.classList.remove('open');
        mobileMenu?.classList.remove('open');
        mobileOverlay?.classList.remove('open');
    }
});

mobileMenu?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu?.classList.remove('open');
        hamburger?.classList.remove('open');
        mobileOverlay?.classList.remove('open');
    });
});

// Scroll to top button
const btn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btn?.classList.add("show");
    } else {
        btn?.classList.remove("show");
    }
});

btn?.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Mobile specific functionality
if (window.matchMedia("(max-width: 768px)").matches) {
    // Hamburger hide on scroll down
    let lastScroll = 0;
    let scrollDistance = 0;
    const hamburg = document.querySelector('.hamburger');
    const threshold = 200;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScroll) {
            scrollDistance += currentScroll - lastScroll;
            if (scrollDistance > threshold) {
                hamburg?.classList.add('hide');
            }
        } else {
            scrollDistance = 0;
            hamburg?.classList.remove('hide');
        }

        lastScroll = currentScroll;
    });

    // Mobile navigation bars
    window.addEventListener('scroll', function () {
        const navBar = document.querySelector('.nav-bar');
        
        if (window.innerHeight / 2.5 < window.scrollY) {
            (navBar as HTMLElement)?.style.setProperty('display', 'none');
        } else {
            (navBar as HTMLElement)?.style.setProperty('display', 'flex');
            (navBar as HTMLElement)?.style.setProperty('background-color', '#e4cea1');
        }

        const bottomBar = document.querySelector('.bottom-bar');
        const docHeight = document.documentElement.scrollHeight;

        if (window.scrollY > 0 && window.scrollY + window.innerHeight >= docHeight - 300 && window.scrollY > 50) {
            (bottomBar as HTMLElement)?.style.setProperty('display', 'flex');
        } else {
            (bottomBar as HTMLElement)?.style.setProperty('display', 'none');
        }
    });
}
