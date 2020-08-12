(function () {
  var menu = document.querySelector('.js-menu');
  var menuToggle = document.querySelector('.js-menu-toggle');

  menuToggle.addEventListener('click', function (event) {
    menu.classList.toggle('main-nav__active');
  });
})();
