const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.busy.classList.toggle('nav-open');
});

navLinks.forEahc(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})