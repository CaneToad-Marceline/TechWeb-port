// Reveal Animation on Scroll
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal, .skill-card, .project-card');
    
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// Initialize styles for animation
document.querySelectorAll('.reveal, .skill-card, .project-card').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
    } else {
        nav.style.boxShadow = "none";
    }
});