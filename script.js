window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

sessionStorage.clear();

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

let btnSubmit = document.querySelector(".btn-submit");

btnSubmit.addEventListener("click", function() {
    let name = document.querySelector("input[type='text']");
    let email = document.querySelector("input[type='email']");
    let message = document.querySelector("textarea");

    if (name.value.toString().trim() == '') {
        alert( "Name is required." );
        return;
    }

    if (email.value.toString().trim() == '') {
        alert( "Email is required." );
        return;
    }

    if (email.value.toString().endsWith("@gmail.com") || email.value.toString().endsWith("@yahoo.com")) {
        
    } else {
        alert( "Please enter a valid email address." );
        return;
    }

    if (message.value.toString().trim() == '') {
        alert( "Message cannot be empty." );
        return;
    }

    alert( "Form submitted successfully!" );

    name.value = "";
    email.value = "";
    message.value = "";
});
