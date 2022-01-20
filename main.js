//------------------Show Menu---------------
const showMenu = (toggleId, navId)  =>{
    const toggle = document.getElementById(toggleId);
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle','nav-menu');

//---------------Remove menu list-----------

const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

// ------------Scroll Selection Active Link----------------
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add('active-link');
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.remove('active-link');
        }
    })   
}
window.addEventListener('scroll',scrollActive);

//--------------Change Background Header---------------

function scrollHeader() {
    const nav = document.getElementById('header');
    
    if(this.scrollY >= 200) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header');   
}

window.addEventListener('scroll',scrollHeader);

//--------------Show ScrollTop-----------------

function scrollTop() {
    const scrollTop = document.getElementById('scroll-top');
    
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');else scrollTop.classList.remove('show-scroll');   
}

window.addEventListener('scroll',scrollTop);

// ----------------- DARK LIGHT THEME --------------------
const themeButton= document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.body.classList.contains(iconTheme) ? 'bx-moon':'bx-sun'

// we validatiob if the user previously chose a topic
if(selectedTheme)
{
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}
//Activate / Deactivate the theme manually with the button
themeButton.addEventListener('click',()=>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // Saving the theme and current icon
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// -------------------- Scroll Reveal Animation ---------------------
const sr = ScrollReveal({
    origin:'top',
    distance:'30px',
    duration : 2000,
    reset : true
});

sr.reveal(`.home__data,.home__img,
    .about__data, .about__img,
    .services__content,.contact__data,.contact__button,
    .footer__content`,{
    interval:200
})

