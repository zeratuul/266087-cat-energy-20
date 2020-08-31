(function () {
  var menu = document.querySelector('.js-nav-menu');
  var menuToggle = document.querySelector('.js-nav-menu-toggle');

  menuToggle.addEventListener('click', function (event) {
    menu.classList.toggle('nav--active');
  });
})();
