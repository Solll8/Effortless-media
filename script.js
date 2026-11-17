const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');

function closeMenu() {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
}

function toggleMenu() {
    const menuIsOpen = navigation.classList.contains('is-open');

    if (menuIsOpen) {
        closeMenu();
    } else {
        navigation.classList.add('is-open');
        menuButton.setAttribute('aria-expanded', 'true');
    }
}

menuButton.addEventListener('click', toggleMenu);

const navigationLinks = navigation.querySelectorAll('a');

for (const link of navigationLinks) {
    link.addEventListener('click', closeMenu);
}

function handleKeyPress(event) {
    const menuIsOpen = navigation.classList.contains('is-open');

    if (event.key === 'Escape' && menuIsOpen) {
        closeMenu();
        menuButton.focus();
    }
}

document.addEventListener('keydown', handleKeyPress);
