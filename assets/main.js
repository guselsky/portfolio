(function () {
    const menuIcon = document.getElementsByClassName('menu-icon')[0];
    const menuContent = document.getElementsByClassName('header-menu')[0];
    const menuListItems = document.getElementsByClassName('header-menu__list-item');
    const header = document.getElementsByClassName('header-container')[0];
    const toggleMenu = () => {
        menuContent.classList.toggle('header-menu--visible');
    }

    const closeMenu = (e) => {
        console.log('e', e);
        if (e.target === menuIcon) {
            return false;
        }
        menuContent.classList.remove('header-menu--visible');
    }

    menuIcon.addEventListener('click', toggleMenu);

    for (let i = 0; i < menuListItems.length; i++) {
        menuListItems[i].addEventListener('click', toggleMenu);
    }

    header.addEventListener('click', closeMenu);
})()
