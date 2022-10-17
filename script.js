
const services = document.querySelector('.btn--services');
console.log(services);
const whyUs = document.querySelector('.btn--why-us');
const btnLearn = document.querySelector('.btn-learn-more');
const productSection = document.querySelector('.product');
const nav = document.querySelector('.nav')





btnLearn.addEventListener('click', function(e){
    e.preventDefault();
    // const productCoords = productSection.getBoundingClientRect();

    productSection.scrollIntoView({behavior:'smooth'});
})


// Reveal Sections
const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer){
    const [entry] = entries;

    if(!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.20,
});

allSections.forEach(function (section){
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
});

// smooth scroll
document.querySelector('.nav__links').addEventListener('click', function(e){
    e.preventDefault();

    if (e.target.classList.contains('nav__link')){
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'})
    }
})

// Menu fade
const handleHover = function(e){
    e.preventDefault();
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    // const logo = link.closest('.nav').querySelector('img');
    console.log(link);
    siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;

    });
   
}

nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))