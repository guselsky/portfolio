(function () {
  const menuButton = document.getElementsByClassName("menu-button")[0];
  const menuListItems = document.getElementsByClassName(
    "header-menu__list-item",
  );
  const header = document.getElementsByClassName("header-container")[0];
  const mobileMenu = header.getElementsByTagName("dialog")[0];

  let menuIsOpen = false;

  const openMenu = (e) => {
    menuIsOpen = true;
    menuButton.setAttribute("aria-expanded", String(menuIsOpen));
    mobileMenu.showModal();
  };

  const closeMenu = (e) => {
    if (e.target === menuButton) {
      return false;
    }
    menuIsOpen = false;
    menuButton.setAttribute("aria-expanded", String(menuIsOpen));
    mobileMenu.close();
  };

  menuButton.addEventListener("click", openMenu);

  for (let i = 0; i < menuListItems.length; i++) {
    menuListItems[i].addEventListener("click", closeMenu);
  }

  header.addEventListener("click", closeMenu);
})();
