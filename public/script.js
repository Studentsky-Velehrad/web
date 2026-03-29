document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger');
    const hamburgerClose = document.querySelector('.hamburger-close');
    const mobileMenu = document.getElementById('mobileMenu');
    const navMenu = document.querySelector('#g-navigation nav ul');
    const body = document.body;

    function toggleMenu() {
        hamburger.classList.toggle("open");
        mobileMenu.classList.toggle('open');
    }

    hamburgerClose.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });

    hamburger.addEventListener('click', (e) => {
        toggleMenu();
        e.stopPropagation();
    });

    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    document.addEventListener('click', (e) => {
        if (mobileMenu.classList.contains('open')) {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        }
    });

    window.addEventListener('scroll', () => {
        if (mobileMenu.classList.contains('open')) {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
        }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    });

    const btn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            btn.classList.add("show");
        } else {
            btn.classList.remove("show");
        }
    });

    btn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    if (window.matchMedia("(max-width: 768px)").matches) {
        let lastScroll = 0;
        let scrollDistance = 0;
        const hamburg = document.querySelector('.hamburger');
        const threshold = 200;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScroll) {
                scrollDistance += currentScroll - lastScroll;
                if (scrollDistance > threshold) {
                    hamburg.classList.add('hide');
                }
            } else {
                scrollDistance = 0;
                hamburg.classList.remove('hide');
            }

            lastScroll = currentScroll;
        });

        window.addEventListener('scroll', function () {
            var navBar = document.querySelector('.nav-bar');
            if (window.innerHeight / 2.5 < window.scrollY) {
                navBar.style.display = 'none';
            } else {
                navBar.style.display = 'flex';
                navBar.style.backgroundColor = '#e4cea1';
            }

            const bottomBar = document.querySelector('.bottom-bar');
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const isAtBottom = window.scrollY + window.innerHeight >= docHeight - 300;

            if (scrollTop > 0 && window.scrollY + window.innerHeight >= docHeight - 300 && window.scrollY > 50) {
                bottomBar.style.display = 'flex';
            } else {
                bottomBar.style.display = 'none';
            }
        });
    }


    // Tile click functionality for index page
    const tiles = document.querySelectorAll(".tile");

    tiles.forEach((tile) => {
        tile.addEventListener("click", () => {
            if (tile.classList.contains("active")) {
                tile.classList.remove("active");
            } else {
                tiles.forEach((t) => t.classList.remove("active"));
                tile.classList.add("active");
            }
        });
    });



    const targetDate = new Date(2026, 3, 1, 0, 0, 0).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff <= 0) {
            document.getElementById("countdown").innerHTML = "Registrace skončila";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

        document.getElementById("days-label").textContent =
            getCzechPlural(days, "den", "dny", "dní");

        document.getElementById("hours-label").textContent =
            getCzechPlural(hours, "hodina", "hodiny", "hodin");

        document.getElementById("minutes-label").textContent =
            getCzechPlural(minutes, "minuta", "minuty", "minut");

        document.getElementById("seconds-label").textContent =
            getCzechPlural(seconds, "sekunda", "sekundy", "sekund");
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();

    function getCzechPlural(number, one, few, many) {
        if (number === 1) return one;
        if (number >= 2 && number <= 4) return few;
        return many;
    }
});


