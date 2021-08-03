let body = document.body;
let siteHeader = document.querySelector('.site-header');

if (siteHeader) {
  if (document.documentElement.clientWidth < 768) {
    let headerHeight = siteHeader.offsetHeight;
    let nextFromHeader = siteHeader.nextElementSibling;
    nextFromHeader.style.paddingTop = `${headerHeight}px`;
  }

  let navToggle = siteHeader.querySelector(".nav__toggle");
  let navWrapper = siteHeader.querySelector(".nav__wrapper");

  const onClickAwayCloseMainMenu = (evt) => {
    if (!evt.target.closest('.nav__wrapper')) {
      closeMainMenu(navToggle);
    }
  };

  const addListenerOnOpenMainMenu = () => {
    setTimeout(() => {
      document.addEventListener('click', onClickAwayCloseMainMenu);
    }, 200);
  };

  const openMainMenu = (btn) => {
    addListenerOnOpenMainMenu();
    siteHeader.classList.add("active");
    navWrapper.classList.add("active");
    body.classList.add("active");
    btn.setAttribute("aria-label", "close menu");
    btn.setAttribute("aria-expanded", "true");
  };

  const closeMainMenu = (btn) => {
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "menu");
    body.classList.remove("active");
    navWrapper.classList.remove("active");
    siteHeader.classList.remove("active");
    document.removeEventListener('click', onClickAwayCloseMainMenu);
  };

  navToggle.addEventListener("click", function () {
    if (navWrapper.classList.contains("active")) {
      closeMainMenu(navToggle);
    } else {
      openMainMenu(navToggle);
    }
  });

  let userMenuDropdownToggle = siteHeader.querySelector('.user-menu__dropdown-toggle');
  let userDropDownMenu = siteHeader.querySelector('.user-menu__list');

  const openUserMenu = (btn) => {
    btn.setAttribute("aria-expanded", "true");
    btn.setAttribute("aria-label", "close user menu");
    userDropDownMenu.classList.add("active");
    addListenerOnOpenUserMenu();
  };

  const closeUserMenu = (btn) => {
    btn.setAttribute("aria-expanded", "false");
    btn.setAttribute("aria-label", "open user menu");
    userDropDownMenu.classList.remove("active");
    document.removeEventListener('click', onClickAwayCloseUserMenu);
  };

  const onClickAwayCloseUserMenu = (evt) => {
    if (!evt.target.closest('.user-menu__list')) {
      closeUserMenu(userMenuDropdownToggle);
    }
  };

  const addListenerOnOpenUserMenu = () => {
    setTimeout(() => {
      document.addEventListener('click', onClickAwayCloseUserMenu);
    }, 200);
  };

  userMenuDropdownToggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (userDropDownMenu.classList.contains("active")) {
      closeUserMenu(userMenuDropdownToggle);
    } else {
      openUserMenu(userMenuDropdownToggle);
    }
  });
}

// modal learn
const learnModal = document.querySelector('.learn');
if (learnModal) {
  const btnCloseLearnModal = learnModal.querySelector('.learn__btn-close');
  const linkLearnMore = learnModal.querySelector('.learn__cta');

  const showLearnMOdal = () => {
    learnModal.classList.add('active');
    btnCloseLearnModal.addEventListener('click', closeLearnMOdal);
    linkLearnMore.addEventListener('click', closeLearnMOdal);
  };
  const closeLearnMOdal = () => {
    learnModal.classList.remove('active');
    btnCloseLearnModal.removeEventListener('click', closeLearnMOdal);
    linkLearnMore.removeEventListener('click', closeLearnMOdal);
  };

  setTimeout(() => {
    showLearnMOdal();
  }, 2000)
};
