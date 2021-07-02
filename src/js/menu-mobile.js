(() => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");
    const mobileBtnClose = document.querySelector("[data-menu-close]");
  
    menuBtnRef.addEventListener("click", () => {
      document.body.classList.toggle("modal-open")
      mobileMenuRef.classList.toggle("is-open");
    });
  
  
  mobileBtnClose.addEventListener("click", () => {
      document.body.classList.toggle("modal-open")
      mobileMenuRef.classList.toggle("is-open");
    });
  })();