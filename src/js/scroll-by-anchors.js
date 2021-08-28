const anchors = document.querySelectorAll('a[href*="#_"]');
const mobilelinkClick = document.querySelector('[data-menu-close]');
const mobileMenuRef = document.querySelector('[data-menu]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (scroll) {
    if (document.body.classList.value == 'modal-open') {
      document.body.classList.toggle('modal-open');
    }

    if (mobileMenuRef.classList.value == 'mobile-menu is-open') {
      mobileMenuRef.classList.toggle('is-open');
    }
    scroll.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

// DOMTokenList ["modal-open", value: "modal-open"]
// scroll-by-anchors.js:8 DOMTokenList(2) ["mobile-menu", "is-open", value: "mobile-menu is-open"]
