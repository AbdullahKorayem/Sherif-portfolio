// --------------------------------toggle icon 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar'); // Assuming 'nav-bar' is a class

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let high = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + high) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });

    // -----------------------------------sticky navbar

    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100);

    // ============================================remove toggle icon and navbar when click navbar when click navbar link(scroll)

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};
// =============================scroll reveal

ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});


ScrollReveal().reveal('.home-content,.heading,.S1', { origin: 'top' });
ScrollReveal().reveal('.home-content h1,.about-img,.social-media', { origin: 'left' });
ScrollReveal().reveal('.home-content p,.about-content', { origin: 'right' });
ScrollReveal().reveal('.home-img,.skills-container,.projects-box,.contact form,.S2', { origin: 'bottom' });



// =========================typed js=========

const typed = new Typed('.multiple-text', {
    strings: ['Senior Graphic Designer', 'Social Media Specialist', 'Filming and Directing'],
    typeSpeed: 50,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})


