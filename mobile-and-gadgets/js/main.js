(function () {

  const solutionsItem = document.querySelector('.nav__item:nth-child(2)');
  const solutionsLink = solutionsItem.querySelector('.nav__link');

  solutionsLink.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();

    solutionsItem.classList.toggle('nav__item--opened-dropdown');
  });


  document.addEventListener('click', () => {
    solutionsItem.classList.remove('nav__item--opened-dropdown');
  });

  // ==============================

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 900) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else {
      document.body.classList.remove('body--opened-menu')
    }

  };

  // =============================

  const swiper = new Swiper('.new-products__slider', {

    spaceBetween: 15,
    slidesPerView: 1,

    pagination: {
      el: '.new-products__pagination',
      clickable: true,
      type: 'bullets',
    },


    navigation: {
      nextEl: '.new-products__next',
      prevEl: '.new-products__prev',
    },

  });
  // ==============================

  const modal = document.querySelector('.modal')
  const modalButton = document.querySelector('.header__search')


  modalButton.addEventListener('click', openModal)
  modal.addEventListener('click', closeModal)

  function openModal(e) {
    e.preventDefault()
    document.body.classList.toggle('body--opened-modal')
  }

  function closeModal(e) {
    e.preventDefault()

    const target = e.target

    if (target.closest('.modal__cancel') || target.classList.contains('modal')) {
      document.body.classList.remove('body--opened-modal')
      
    }};

})()


