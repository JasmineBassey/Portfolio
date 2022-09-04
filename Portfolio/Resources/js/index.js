const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('nav__list')[0]

toggleButton.addEventListener('click', (e) => { 
    e.preventDefault();
    navbarLinks.classList.toggle('active');
})


