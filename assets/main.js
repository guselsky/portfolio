(function () {
  const menuButton = document.querySelector(".menu-button");
  const menuListItems = document.querySelector(".header-menu__list-item");
  const header = document.querySelector(".header-container");
  const mobileMenu = header.querySelector("dialog");

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
