const menuIcone = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
 
if (menuIcone) {
    menuIcone.onclick = () => {
        navLinks.classList.toggle('active');
        menuIcone.classList.toggle('fa-bars');
        menuIcone.classList.toggle('fa-xmark');
    };
}
 
document.addEventListener('click', (e) => {
    if (!menuIcone.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        menuIcone.classList.add('fa-bars');
        menuIcone.classList.remove('fa-xmark');
    }
});
 
const header = document.querySelector('.header');
 
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        header.style.backgroundColor = 'rgba(28, 28, 30, 0.95)';
    } else {
        header.style.backgroundColor = 'rgba(28, 28, 30, 0.6)';
    }
});
 

const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href').startsWith(currentPage) && currentPage !== '') {
        link.style.color = '#f5f5f7';
    }
});
 
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });
 
document.querySelectorAll('.project-card, .grid-card, .skill-card, .interet-card, .objectif-item, .timeline-item').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});
 
 
// ===== 5. BOUTON "VISITER GITHUB" =====
const githubBtn = document.querySelector('.visit-btn');
if (githubBtn) {
    githubBtn.addEventListener('click', () => {
        window.open('https://github.com/faadji-collab', '_blank');
    });
}