function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("open");
}

function closeMenu() {
    document.getElementById("mobileMenu").classList.remove("open");
}

// Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach((a) => {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) a.classList.add("active");
    });
});

// Smooth fade-in on scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.style.opacity = "1";
                e.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold: 0.1 },
);

document
    .querySelectorAll(
        ".skill-card, .exp-body, .cert-card, .talk-card, .cc-card, .edu-card, .blog-card, .stat-card",
    )
    .forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
        observer.observe(el);
    });
