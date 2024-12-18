document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-links a');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');

    // Smooth scroll and active link highlighting
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            const headerHeight = header.offsetHeight;

            // Smooth scroll
            window.scrollTo({
                top: targetSection.offsetTop - headerHeight,
                behavior: 'smooth'
            });
        });
    });

    // Highlight active section on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - header.offsetHeight;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Reveal sections on scroll
    const revealSections = () => {
        const windowHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const revealPoint = 150;

            if (sectionTop < windowHeight - revealPoint) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealSections);
    revealSections(); // Trigger on load
});
