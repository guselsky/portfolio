(function () {
  const menuButton = document.getElementsByClassName("menu-button")[0];
  const menuListItems = document.getElementsByClassName(
    "header-menu__list-item",
  );
  const header = document.getElementsByClassName("header-container")[0];
  const mobileMenu = header.getElementsByTagName("dialog")[0];

  const openMenu = (e) => {
    menuButton.setAttribute("aria-expanded", "true");
    mobileMenu.showModal();
  };

  const closeMenu = (e) => {
    if (e.target === menuButton) {
      return false;
    }
    menuButton.setAttribute("aria-expanded", "false");
    mobileMenu.close();
  };

  menuButton.addEventListener("click", openMenu);

  for (let i = 0; i < menuListItems.length; i++) {
    menuListItems[i].addEventListener("click", closeMenu);
  }

  header.addEventListener("click", closeMenu);
})();
