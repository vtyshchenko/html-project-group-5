const anchors = document.querySelectorAll('a[href*="#_"]');
const mobilelinkClick = document.querySelector("[data-menu-close]");
const mobileMenuRef = document.querySelector("[data-menu]");
    
for (let anchor of anchors) {
    anchor.addEventListener("click", function (scroll) {
      document.body.classList.toggle("modal-open");
      mobileMenuRef.classList.toggle("is-open");
        scroll.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}