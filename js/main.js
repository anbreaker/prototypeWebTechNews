document.getElementById('btn-menu').addEventListener('click', () => {
    document.getElementById('container__menu').classList.toggle('show');
});

ScrollReveal().reveal('.container__header-ShowCase', {delay: 500});
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.banner-one', {delay: 500});
ScrollReveal().reveal('.banner-two', {delay: 500});
