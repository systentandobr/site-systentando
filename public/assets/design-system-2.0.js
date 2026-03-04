gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    // Create particles
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 20 + 's';
            particle.style.animationDuration = (15 + Math.random() * 10) + 's';
            particlesContainer.appendChild(particle);
        }
    }

    // Reveal animations
    gsap.utils.toArray('.reveal-up, .reveal-zoom, .reveal-fade').forEach(el => {
        ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            onEnter: () => el.classList.add('active')
        });
    });

    // Hero initial reveal
    setTimeout(() => {
        document.querySelectorAll('#hero .reveal-up, #hero .reveal-fade').forEach((el, i) => {
            setTimeout(() => el.classList.add('active'), 100 * i);
        });
    }, 200);

    // Flashlight effect
    window.updateFlashlight = function(e, card) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', x + 'px');
        card.style.setProperty('--mouse-y', y + 'px');
    };

    // Navbar scroll effect
    let lastScroll = 0;
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 100) {
            navbar.classList.add('bg-[#0a0a0c]/95');
        } else {
            navbar.classList.remove('bg-[#0a0a0c]/95');
        }
        lastScroll = currentScroll;
    });
});
