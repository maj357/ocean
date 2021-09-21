$(function () {
  let dayNight = document.querySelector('.dayNight');
  let menuToggle = document.querySelector('.menuToggle');
  let body = document.querySelector('body');
  let navigation = document.querySelector('.navigation');

  dayNight.onclick = function () {
    body.classList.toggle('_dark')
    dayNight.classList.toggle('_active')
  };

  menuToggle.onclick = function () {
    menuToggle.classList.toggle('_active')
    navigation.classList.toggle('_active')
  };

});