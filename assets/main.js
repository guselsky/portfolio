(function () {
    const menuButton = document.getElementsByClassName('menu-button')[0];
    const menuContent = document.getElementsByClassName('header-menu')[0];
    const menuListItems = document.getElementsByClassName('header-menu__list-item');
    const header = document.getElementsByClassName('header-container')[0];

    let menuIsOpen = false;

    const toggleMenu = (e) => {
        menuContent.classList.toggle('header-menu--visible');
        menuIsOpen = !menuIsOpen;
        menuButton.setAttribute('aria-expanded', String(menuIsOpen));
    }

    const closeMenu = (e) => {
        if (e.target === menuButton) {
            return false;
        }
        menuIsOpen = false;
        menuContent.classList.remove('header-menu--visible');
    }

    menuButton.addEventListener('click', toggleMenu);

    for (let i = 0; i < menuListItems.length; i++) {
        menuListItems[i].addEventListener('click', toggleMenu);
    }

    header.addEventListener('click', closeMenu);
})()
