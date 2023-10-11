let sakura1 = document.getElementById('sakura1');
let sakura2 = document.getElementById('sakura2');
let sakura3 = document.getElementById('sakura3');
let sakura5 = document.getElementById('sakura5');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    sakura1.style.top = value * -1.5 + 'px';
    sakura1.style.left = value * -0.5 + 'px';

    sakura2.style.top = value * -1.5 + 'px';
    sakura2.style.right = value * 1.5 + 'px';

    sakura3.style.bottom = value * -0.5 + 'px';
    sakura3.style.left = value * -0.5 + 'px';

    sakura5.style.bottom = value * 1.5 + 'px';
    sakura5.style.right = value * -1.5 + 'px'; // Modifiez cette ligne
    

});


const navbarToggle = document.querySelector('.navbar-toggle');
const navbar = document.querySelector('.navbar');
const navbarLinks = document.querySelector('.navbar-links');

navbarToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    navbarToggle.classList.toggle('active');

    // Afficher ou masquer les liens
    if (navbar.classList.contains('active')) {
        navbarLinks.style.opacity = '1';
        navbarLinks.style.transform = 'scaleX(1)';
    } else {
        navbarLinks.style.opacity = '0';
        navbarLinks.style.transform = 'scaleX(0)';
    }
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
        entry.target.classList.remove('show');
    }
});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) =>observer.observe(el));




