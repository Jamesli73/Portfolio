const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.busy.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})