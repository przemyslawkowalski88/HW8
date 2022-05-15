(() => {
  const refs = {
    openHamburgerBtn: document.querySelector("[data-hamburger-open]"),
    closeHamburgerBtn: document.querySelector("[data-hamburger-close]"),
    hamburger: document.querySelector("[data-hamburger]"),
  };

  refs.openHamburgerBtn.addEventListener("click", toggleHamburger);
  refs.closeHamburgerBtn.addEventListener("click", toggleHamburger);

  function toggleHamburger() {
    refs.hamburger.classList.toggle("is-hidden");
  }
})();
