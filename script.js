// StratDots Website JavaScript

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: 'smooth'
            });
        }
    });
});

// Add active state to navigation based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.color = '#888';
        link.style.borderColor = 'transparent';
        link.style.backgroundColor = 'transparent';
        
        if (link.getAttribute('href') === '#' + current) {
            link.style.color = '#4a8a4a';
            link.style.borderColor = '#2a4a2a';
            link.style.backgroundColor = 'rgba(74, 138, 74, 0.1)';
        }
    });
});

// Fade-in animation for sections on scroll
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in to all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Hero section is always visible
document.querySelector('#hero').style.opacity = '1';
document.querySelector('#hero').style.transform = 'translateY(0)';

// Feature cards animation on hover
document.querySelectorAll('.feature').forEach(feature => {
    feature.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// Console welcome message (easter egg for developers)
console.log('%c[X] STRATDOTS - REAL-TIME STRATEGY [X]', 'color: #4a8a4a; font-size: 20px; font-weight: bold; font-family: monospace;');
console.log('%cBuilt with LÖVE2D | Command armies in battle', 'color: #888; font-size: 12px; font-family: monospace;');
console.log('%c>> Deploy your forces and dominate the battlefield!', 'color: #5a9a5a; font-size: 14px; font-family: monospace;');
