(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _cart = require("./components/cart");

(0, _cart.addToCart)();
(0, _cart.deleteFromCart)();
(0, _cart.emptyCart)();
(0, _cart.btnPlusMinus)();
var burger = document.querySelector('.main-nav__burger');
var nav = document.querySelector('.main-nav__menu');
var menuItem = document.querySelector('.main-nav__menu-item');
var menuLink = document.querySelectorAll('.main-nav__menu-link');
var modalMob = document.querySelector('.modal__mob');
var thumbActive = document.querySelectorAll('.thumb-img');
var containerProductImgActive = document.querySelector('.container__product-img');
var product = containerProductImgActive.querySelector('.product');
var modal = document.querySelector('.modal');
var thumbActiveImgModal = document.querySelectorAll('.thumb-img-modal');
var btnPrevious = document.querySelector('.btn--previous');
var btnNext = document.querySelector('.btn--next');
var btnPreviousMob = document.querySelector('.btn--previous-mob');
var btnNextMob = document.querySelector('.btn--next-mob');
var btnClose = document.querySelector('.icon__close');
var lightboxModal = document.querySelector('.modal');
var containerModal = document.querySelector('.container__modal');
var thumbContainer = document.querySelector('.container__thumbnails');
var thumbContainerImages = thumbContainer.children.length;
/*------Burger and mobile menu------*/

burger.addEventListener('click', function () {
  nav.classList.toggle('is-active');
  burger.classList.toggle('is-active');
  menuItem.classList.toggle('is-active');
  menuLink.forEach(function (el) {
    el.classList.toggle('is-active');
  });
  modalMob.classList.toggle('is-active');
});
/*------Changing thumb img whit main img------*/

var _loop = function _loop(_i) {
  thumbActive[_i].addEventListener('click', function () {
    var thumb = 'container__thumbnails-img-' + [_i + 1];
    var thumbImg = thumb.slice(-1);
    document.querySelector('.product').src = 'dist/assets/images/image-product-' + thumbImg + '.jpg';
    thumbActive.forEach(function (i) {
      i.classList.remove('is-active');
    });

    thumbActive[_i].classList.add('is-active');
  });
};

for (var _i = 0; _i < thumbActive.length; _i++) {
  _loop(_i);
}

;
containerProductImgActive.addEventListener('click', function () {
  modal.style.display = 'block';
  containerModal.style.display = 'block';

  if (window.innerWidth < 768) {
    modal.style.display = 'none';
    containerModal.style.display = 'none';
  }
});
/*------Lightbox modal------*/

var _loop2 = function _loop2(_i2) {
  thumbActiveImgModal[_i2].addEventListener('click', function (e) {
    var thumbModal = 'container__thumbnails-img-' + [_i2 + 1];
    var thumbImgModal = thumbModal.slice(-1);
    document.querySelector('.productImg').src = 'dist/assets/images/image-product-' + thumbImgModal + '.jpg';
    thumbActiveImgModal.forEach(function (i) {
      i.classList.remove('is-active');
    });

    thumbActiveImgModal[_i2].classList.add('is-active');
  });
};

for (var _i2 = 0; _i2 < thumbActiveImgModal.length; _i2++) {
  _loop2(_i2);
}

;
/*------lightbox btn previous and next------*/

var i = 0;
btnPrevious.addEventListener('click', function () {
  if (i <= 0) i = thumbActiveImgModal.length;
  i--;
  thumbActiveImgModal.forEach(function (i) {
    i.classList.remove('is-active');
  });
  thumbActiveImgModal[i].classList.add('is-active');
  return setImg();
});
btnNext.addEventListener('click', function () {
  if (i >= thumbActiveImgModal.length - 1) i = -1;
  i++;
  thumbActiveImgModal.forEach(function (i) {
    i.classList.remove('is-active');
  });
  thumbActiveImgModal[i].classList.add('is-active');
  return setImg();
});
/*------ btn previous, btn next mob------*/

btnPreviousMob.addEventListener('click', function () {
  var currentActiveAttr = product.dataset.active;
  var getImgIndex = currentActiveAttr;

  if (getImgIndex <= 1) {
    getImgIndex = 4;
  } else {
    getImgIndex--;
  }

  product.src = 'dist/assets/images/image-product-' + getImgIndex + '.jpg';
  product.setAttribute("data-active", getImgIndex);
});
btnNextMob.addEventListener('click', function () {
  var currentActiveAttr = product.dataset.active;
  var getImgIndex = currentActiveAttr;

  if (getImgIndex >= 4) {
    getImgIndex = 1;
  } else {
    getImgIndex++;
  }

  product.src = 'dist/assets/images/image-product-' + getImgIndex + '.jpg';
  product.setAttribute("data-active", getImgIndex);
});
btnClose.addEventListener('click', function () {
  containerModal.style.display = 'none';
  lightboxModal.style.display = 'none';
});
lightboxModal.addEventListener('click', function () {
  containerModal.style.display = 'none';
  lightboxModal.style.display = 'none';
});

function setImg() {
  var setBtnActive = 'container__thumbnails-img-' + [i + 1];
  var setBtnImg = setBtnActive.slice(-1);
  return document.querySelector('.productImg').src = 'dist/assets/images/image-product-' + setBtnImg + '.jpg';
}

},{"./components/cart":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emptyCart = exports.deleteFromCart = exports.btnPlusMinus = exports.addToCart = void 0;
var cart = document.querySelector('.cart');
var cartModal = document.querySelector('.cart__modal');
var cartModalEmpty = document.querySelector('.cart__modal-empty');
var cartModalProductQuantity = document.querySelector('.cart__modal-product-price--input-amount');
var cartProductPrice = document.querySelector('.cart-product-price');
var cartProductQuantityPrice = document.querySelector('.cart__modal-product-price-quantity--price');
var cartOrderBox = document.querySelector('.cart__order-box');
var cartOrderNumber = document.querySelector('.cart__order-number');
var deleteProductQuantityBin = document.querySelector('.cart__modal-product-bin');
var btnAddToCart = document.querySelector('.btn__add-to-cart');
var inputAmount = document.querySelector('.container__input-amount');
var btnMinus = document.querySelector('.btn__minus');
var btnPlus = document.querySelector('.btn__plus');
/*------Add to cart------*/

var addToCart = function addToCart() {
  console.log('test');
  btnAddToCart.addEventListener('click', function () {
    if (inputAmount.innerHTML > 0) {
      cartOrderNumber.innerHTML = inputAmount.innerHTML;
      cartOrderBox.style.display = 'block';
      cartModalProductQuantity.innerHTML = inputAmount.innerHTML;
      cartProductQuantityPrice.innerHTML = (cartProductPrice.innerHTML * inputAmount.innerHTML).toFixed(2);
      cartModalEmpty.style.display = 'none';
    }
  });
};
/*------Delete from cart------*/


exports.addToCart = addToCart;

var deleteFromCart = function deleteFromCart() {
  deleteProductQuantityBin.addEventListener('click', function () {
    cartModalProductQuantity.innerHTML -= 1;
    cartOrderNumber.innerHTML -= 1;
    inputAmount.innerHTML -= 1;

    if (cartModalProductQuantity.innerHTML <= 0 || cartOrderNumber.innerHTML <= 0) {
      cartModalProductQuantity.innerHTML = 0;
      cartOrderNumber.innerHTML = 0;
    }

    var quantityNum = parseInt(cartProductQuantityPrice.innerHTML);
    var productPrice = parseInt(cartProductPrice.innerHTML);
    cartProductQuantityPrice.innerHTML = (quantityNum - productPrice).toFixed(2);

    if (cartProductQuantityPrice.innerHTML <= 0) {
      cartProductQuantityPrice.innerHTML = 0;
      cartModal.style.display = 'none';
      cartModalEmpty.style.display = 'none';
      cartOrderBox.style.display = 'none';
    }
  });
};
/*------Empty cart------*/


exports.deleteFromCart = deleteFromCart;

var emptyCart = function emptyCart() {
  cart.addEventListener('click', function () {
    if (cartModalEmpty.style.display === 'none') {
      cartModalEmpty.style.display = 'block';
    } else {
      cartModalEmpty.style.display = 'none';
    }

    if (inputAmount.innerHTML > 0) {
      cartModal.style.display = 'block';
      cartModalEmpty.style.display = 'none';
    }
  });
};
/*------btn plus and minus------*/


exports.emptyCart = emptyCart;

var btnPlusMinus = function btnPlusMinus() {
  var appp = {
    currentValue: 0
  };
  inputAmount.innerHTML = formatNumber(0);
  btnPlus.addEventListener('click', function () {
    var currentAmount = formatNumber(appp.currentValue += 1);
    inputAmount.innerHTML = currentAmount;
  });
  btnMinus.addEventListener('click', function () {
    var currentAmount = 0;

    if (appp.currentValue <= 0) {
      return;
    } else {
      currentAmount = formatNumber(appp.currentValue -= 1);
      inputAmount.innerHTML = currentAmount;
    }
  });
};

exports.btnPlusMinus = btnPlusMinus;

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

;

},{}]},{},[1]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9jYXJ0ID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9jYXJ0XCIpO1xuXG4oMCwgX2NhcnQuYWRkVG9DYXJ0KSgpO1xuKDAsIF9jYXJ0LmRlbGV0ZUZyb21DYXJ0KSgpO1xuKDAsIF9jYXJ0LmVtcHR5Q2FydCkoKTtcbigwLCBfY2FydC5idG5QbHVzTWludXMpKCk7XG52YXIgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19idXJnZXInKTtcbnZhciBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX21lbnUnKTtcbnZhciBtZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fbWVudS1pdGVtJyk7XG52YXIgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1uYXZfX21lbnUtbGluaycpO1xudmFyIG1vZGFsTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19tb2InKTtcbnZhciB0aHVtYkFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aHVtYi1pbWcnKTtcbnZhciBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9fcHJvZHVjdC1pbWcnKTtcbnZhciBwcm9kdWN0ID0gY29udGFpbmVyUHJvZHVjdEltZ0FjdGl2ZS5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdCcpO1xudmFyIG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG52YXIgdGh1bWJBY3RpdmVJbWdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aHVtYi1pbWctbW9kYWwnKTtcbnZhciBidG5QcmV2aW91cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLXByZXZpb3VzJyk7XG52YXIgYnRuTmV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLW5leHQnKTtcbnZhciBidG5QcmV2aW91c01vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLXByZXZpb3VzLW1vYicpO1xudmFyIGJ0bk5leHRNb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1uZXh0LW1vYicpO1xudmFyIGJ0bkNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb25fX2Nsb3NlJyk7XG52YXIgbGlnaHRib3hNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xudmFyIGNvbnRhaW5lck1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9fbW9kYWwnKTtcbnZhciB0aHVtYkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX3RodW1ibmFpbHMnKTtcbnZhciB0aHVtYkNvbnRhaW5lckltYWdlcyA9IHRodW1iQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDtcbi8qLS0tLS0tQnVyZ2VyIGFuZCBtb2JpbGUgbWVudS0tLS0tLSovXG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICBtZW51TGluay5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICB9KTtcbiAgbW9kYWxNb2IuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG59KTtcbi8qLS0tLS0tQ2hhbmdpbmcgdGh1bWIgaW1nIHdoaXQgbWFpbiBpbWctLS0tLS0qL1xuXG52YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICB0aHVtYkFjdGl2ZVtfaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRodW1iID0gJ2NvbnRhaW5lcl9fdGh1bWJuYWlscy1pbWctJyArIFtfaSArIDFdO1xuICAgIHZhciB0aHVtYkltZyA9IHRodW1iLnNsaWNlKC0xKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdCcpLnNyYyA9ICdkaXN0L2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0nICsgdGh1bWJJbWcgKyAnLmpwZyc7XG4gICAgdGh1bWJBY3RpdmUuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIHRodW1iQWN0aXZlW19pXS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgfSk7XG59O1xuXG5mb3IgKHZhciBfaSA9IDA7IF9pIDwgdGh1bWJBY3RpdmUubGVuZ3RoOyBfaSsrKSB7XG4gIF9sb29wKF9pKTtcbn1cblxuO1xuY29udGFpbmVyUHJvZHVjdEltZ0FjdGl2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNvbnRhaW5lck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29udGFpbmVyTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufSk7XG4vKi0tLS0tLUxpZ2h0Ym94IG1vZGFsLS0tLS0tKi9cblxudmFyIF9sb29wMiA9IGZ1bmN0aW9uIF9sb29wMihfaTIpIHtcbiAgdGh1bWJBY3RpdmVJbWdNb2RhbFtfaTJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgdGh1bWJNb2RhbCA9ICdjb250YWluZXJfX3RodW1ibmFpbHMtaW1nLScgKyBbX2kyICsgMV07XG4gICAgdmFyIHRodW1iSW1nTW9kYWwgPSB0aHVtYk1vZGFsLnNsaWNlKC0xKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdEltZycpLnNyYyA9ICdkaXN0L2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0nICsgdGh1bWJJbWdNb2RhbCArICcuanBnJztcbiAgICB0aHVtYkFjdGl2ZUltZ01vZGFsLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICB0aHVtYkFjdGl2ZUltZ01vZGFsW19pMl0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gIH0pO1xufTtcblxuZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgdGh1bWJBY3RpdmVJbWdNb2RhbC5sZW5ndGg7IF9pMisrKSB7XG4gIF9sb29wMihfaTIpO1xufVxuXG47XG4vKi0tLS0tLWxpZ2h0Ym94IGJ0biBwcmV2aW91cyBhbmQgbmV4dC0tLS0tLSovXG5cbnZhciBpID0gMDtcbmJ0blByZXZpb3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBpZiAoaSA8PSAwKSBpID0gdGh1bWJBY3RpdmVJbWdNb2RhbC5sZW5ndGg7XG4gIGktLTtcbiAgdGh1bWJBY3RpdmVJbWdNb2RhbC5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgfSk7XG4gIHRodW1iQWN0aXZlSW1nTW9kYWxbaV0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gIHJldHVybiBzZXRJbWcoKTtcbn0pO1xuYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKGkgPj0gdGh1bWJBY3RpdmVJbWdNb2RhbC5sZW5ndGggLSAxKSBpID0gLTE7XG4gIGkrKztcbiAgdGh1bWJBY3RpdmVJbWdNb2RhbC5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgfSk7XG4gIHRodW1iQWN0aXZlSW1nTW9kYWxbaV0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gIHJldHVybiBzZXRJbWcoKTtcbn0pO1xuLyotLS0tLS0gYnRuIHByZXZpb3VzLCBidG4gbmV4dCBtb2ItLS0tLS0qL1xuXG5idG5QcmV2aW91c01vYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGN1cnJlbnRBY3RpdmVBdHRyID0gcHJvZHVjdC5kYXRhc2V0LmFjdGl2ZTtcbiAgdmFyIGdldEltZ0luZGV4ID0gY3VycmVudEFjdGl2ZUF0dHI7XG5cbiAgaWYgKGdldEltZ0luZGV4IDw9IDEpIHtcbiAgICBnZXRJbWdJbmRleCA9IDQ7XG4gIH0gZWxzZSB7XG4gICAgZ2V0SW1nSW5kZXgtLTtcbiAgfVxuXG4gIHByb2R1Y3Quc3JjID0gJ2Rpc3QvYXNzZXRzL2ltYWdlcy9pbWFnZS1wcm9kdWN0LScgKyBnZXRJbWdJbmRleCArICcuanBnJztcbiAgcHJvZHVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGl2ZVwiLCBnZXRJbWdJbmRleCk7XG59KTtcbmJ0bk5leHRNb2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBjdXJyZW50QWN0aXZlQXR0ciA9IHByb2R1Y3QuZGF0YXNldC5hY3RpdmU7XG4gIHZhciBnZXRJbWdJbmRleCA9IGN1cnJlbnRBY3RpdmVBdHRyO1xuXG4gIGlmIChnZXRJbWdJbmRleCA+PSA0KSB7XG4gICAgZ2V0SW1nSW5kZXggPSAxO1xuICB9IGVsc2Uge1xuICAgIGdldEltZ0luZGV4Kys7XG4gIH1cblxuICBwcm9kdWN0LnNyYyA9ICdkaXN0L2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0nICsgZ2V0SW1nSW5kZXggKyAnLmpwZyc7XG4gIHByb2R1Y3Quc2V0QXR0cmlidXRlKFwiZGF0YS1hY3RpdmVcIiwgZ2V0SW1nSW5kZXgpO1xufSk7XG5idG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgY29udGFpbmVyTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbGlnaHRib3hNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5saWdodGJveE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBjb250YWluZXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBsaWdodGJveE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxuZnVuY3Rpb24gc2V0SW1nKCkge1xuICB2YXIgc2V0QnRuQWN0aXZlID0gJ2NvbnRhaW5lcl9fdGh1bWJuYWlscy1pbWctJyArIFtpICsgMV07XG4gIHZhciBzZXRCdG5JbWcgPSBzZXRCdG5BY3RpdmUuc2xpY2UoLTEpO1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RJbWcnKS5zcmMgPSAnZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIHNldEJ0bkltZyArICcuanBnJztcbn1cblxufSx7XCIuL2NvbXBvbmVudHMvY2FydFwiOjJ9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5lbXB0eUNhcnQgPSBleHBvcnRzLmRlbGV0ZUZyb21DYXJ0ID0gZXhwb3J0cy5idG5QbHVzTWludXMgPSBleHBvcnRzLmFkZFRvQ2FydCA9IHZvaWQgMDtcbnZhciBjYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQnKTtcbnZhciBjYXJ0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbW9kYWwnKTtcbnZhciBjYXJ0TW9kYWxFbXB0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19tb2RhbC1lbXB0eScpO1xudmFyIGNhcnRNb2RhbFByb2R1Y3RRdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19tb2RhbC1wcm9kdWN0LXByaWNlLS1pbnB1dC1hbW91bnQnKTtcbnZhciBjYXJ0UHJvZHVjdFByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcHJvZHVjdC1wcmljZScpO1xudmFyIGNhcnRQcm9kdWN0UXVhbnRpdHlQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19tb2RhbC1wcm9kdWN0LXByaWNlLXF1YW50aXR5LS1wcmljZScpO1xudmFyIGNhcnRPcmRlckJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19vcmRlci1ib3gnKTtcbnZhciBjYXJ0T3JkZXJOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fb3JkZXItbnVtYmVyJyk7XG52YXIgZGVsZXRlUHJvZHVjdFF1YW50aXR5QmluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX21vZGFsLXByb2R1Y3QtYmluJyk7XG52YXIgYnRuQWRkVG9DYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl9fYWRkLXRvLWNhcnQnKTtcbnZhciBpbnB1dEFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX2lucHV0LWFtb3VudCcpO1xudmFyIGJ0bk1pbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl9fbWludXMnKTtcbnZhciBidG5QbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl9fcGx1cycpO1xuLyotLS0tLS1BZGQgdG8gY2FydC0tLS0tLSovXG5cbnZhciBhZGRUb0NhcnQgPSBmdW5jdGlvbiBhZGRUb0NhcnQoKSB7XG4gIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gIGJ0bkFkZFRvQ2FydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoaW5wdXRBbW91bnQuaW5uZXJIVE1MID4gMCkge1xuICAgICAgY2FydE9yZGVyTnVtYmVyLmlubmVySFRNTCA9IGlucHV0QW1vdW50LmlubmVySFRNTDtcbiAgICAgIGNhcnRPcmRlckJveC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGNhcnRNb2RhbFByb2R1Y3RRdWFudGl0eS5pbm5lckhUTUwgPSBpbnB1dEFtb3VudC5pbm5lckhUTUw7XG4gICAgICBjYXJ0UHJvZHVjdFF1YW50aXR5UHJpY2UuaW5uZXJIVE1MID0gKGNhcnRQcm9kdWN0UHJpY2UuaW5uZXJIVE1MICogaW5wdXRBbW91bnQuaW5uZXJIVE1MKS50b0ZpeGVkKDIpO1xuICAgICAgY2FydE1vZGFsRW1wdHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xufTtcbi8qLS0tLS0tRGVsZXRlIGZyb20gY2FydC0tLS0tLSovXG5cblxuZXhwb3J0cy5hZGRUb0NhcnQgPSBhZGRUb0NhcnQ7XG5cbnZhciBkZWxldGVGcm9tQ2FydCA9IGZ1bmN0aW9uIGRlbGV0ZUZyb21DYXJ0KCkge1xuICBkZWxldGVQcm9kdWN0UXVhbnRpdHlCaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgY2FydE1vZGFsUHJvZHVjdFF1YW50aXR5LmlubmVySFRNTCAtPSAxO1xuICAgIGNhcnRPcmRlck51bWJlci5pbm5lckhUTUwgLT0gMTtcbiAgICBpbnB1dEFtb3VudC5pbm5lckhUTUwgLT0gMTtcblxuICAgIGlmIChjYXJ0TW9kYWxQcm9kdWN0UXVhbnRpdHkuaW5uZXJIVE1MIDw9IDAgfHwgY2FydE9yZGVyTnVtYmVyLmlubmVySFRNTCA8PSAwKSB7XG4gICAgICBjYXJ0TW9kYWxQcm9kdWN0UXVhbnRpdHkuaW5uZXJIVE1MID0gMDtcbiAgICAgIGNhcnRPcmRlck51bWJlci5pbm5lckhUTUwgPSAwO1xuICAgIH1cblxuICAgIHZhciBxdWFudGl0eU51bSA9IHBhcnNlSW50KGNhcnRQcm9kdWN0UXVhbnRpdHlQcmljZS5pbm5lckhUTUwpO1xuICAgIHZhciBwcm9kdWN0UHJpY2UgPSBwYXJzZUludChjYXJ0UHJvZHVjdFByaWNlLmlubmVySFRNTCk7XG4gICAgY2FydFByb2R1Y3RRdWFudGl0eVByaWNlLmlubmVySFRNTCA9IChxdWFudGl0eU51bSAtIHByb2R1Y3RQcmljZSkudG9GaXhlZCgyKTtcblxuICAgIGlmIChjYXJ0UHJvZHVjdFF1YW50aXR5UHJpY2UuaW5uZXJIVE1MIDw9IDApIHtcbiAgICAgIGNhcnRQcm9kdWN0UXVhbnRpdHlQcmljZS5pbm5lckhUTUwgPSAwO1xuICAgICAgY2FydE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgY2FydE9yZGVyQm94LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KTtcbn07XG4vKi0tLS0tLUVtcHR5IGNhcnQtLS0tLS0qL1xuXG5cbmV4cG9ydHMuZGVsZXRlRnJvbUNhcnQgPSBkZWxldGVGcm9tQ2FydDtcblxudmFyIGVtcHR5Q2FydCA9IGZ1bmN0aW9uIGVtcHR5Q2FydCgpIHtcbiAgY2FydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY2FydE1vZGFsRW1wdHkuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICBjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9IGVsc2Uge1xuICAgICAgY2FydE1vZGFsRW1wdHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBpZiAoaW5wdXRBbW91bnQuaW5uZXJIVE1MID4gMCkge1xuICAgICAgY2FydE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgY2FydE1vZGFsRW1wdHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xufTtcbi8qLS0tLS0tYnRuIHBsdXMgYW5kIG1pbnVzLS0tLS0tKi9cblxuXG5leHBvcnRzLmVtcHR5Q2FydCA9IGVtcHR5Q2FydDtcblxudmFyIGJ0blBsdXNNaW51cyA9IGZ1bmN0aW9uIGJ0blBsdXNNaW51cygpIHtcbiAgdmFyIGFwcHAgPSB7XG4gICAgY3VycmVudFZhbHVlOiAwXG4gIH07XG4gIGlucHV0QW1vdW50LmlubmVySFRNTCA9IGZvcm1hdE51bWJlcigwKTtcbiAgYnRuUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3VycmVudEFtb3VudCA9IGZvcm1hdE51bWJlcihhcHBwLmN1cnJlbnRWYWx1ZSArPSAxKTtcbiAgICBpbnB1dEFtb3VudC5pbm5lckhUTUwgPSBjdXJyZW50QW1vdW50O1xuICB9KTtcbiAgYnRuTWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGN1cnJlbnRBbW91bnQgPSAwO1xuXG4gICAgaWYgKGFwcHAuY3VycmVudFZhbHVlIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEFtb3VudCA9IGZvcm1hdE51bWJlcihhcHBwLmN1cnJlbnRWYWx1ZSAtPSAxKTtcbiAgICAgIGlucHV0QW1vdW50LmlubmVySFRNTCA9IGN1cnJlbnRBbW91bnQ7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydHMuYnRuUGx1c01pbnVzID0gYnRuUGx1c01pbnVzO1xuXG5mdW5jdGlvbiBmb3JtYXROdW1iZXIobnVtKSB7XG4gIHJldHVybiBudW0udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyk7XG59XG5cbjtcblxufSx7fV19LHt9LFsxXSk7XG4iXSwiZmlsZSI6ImFwcC5qcyJ9
