"use strict";
$(function () {
  $('#js-hamburger-menu, .navigation__link').on('click', function () {
    $('.header-menu').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});