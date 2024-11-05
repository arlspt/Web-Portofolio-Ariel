document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const navToggle = document.createElement('button');
    navToggle.innerText = 'Toggle Menu';
    navToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
    document.body.insertBefore(navToggle, nav);
});
