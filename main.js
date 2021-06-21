const navShow = () => {
    const lines = document.querySelector('.lines');
    const nav = document.querySelector('.nav-links');
    //toggle nav
    lines.addEventListener('click', () => {
        nav.classList.toggle('nav-links-visible');

        lines.classList.toggle('toggle')
    });
}

navShow();