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
var containerProductImgActive = document.querySelector('.product-img');
var modal = document.querySelector('.modal');
var thumbActiveImgModal = document.querySelectorAll('.thumb-img-modal');
var btnPrevious = document.querySelector('.btn--previous');
var btnNext = document.querySelector('.btn--next');
var btnPreviousMob = document.querySelector('.btn--previous-mob');
var btnNextMob = document.querySelector('.btn--next-mob');
var btnClose = document.querySelector('.icon__close');
var lightboxModal = document.querySelector('.modal');
var containerModal = document.querySelector('.container__modal');
var thumbContainer = document.querySelector('.product__thumbnails');
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
    document.querySelector('.product-img').src = 'dist/assets/images/image-product-' + thumbImg + '.jpg';
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
  var currentActiveAttr = containerProductImgActive.dataset.active;
  var getImgIndex = currentActiveAttr;

  if (getImgIndex <= 1) {
    getImgIndex = 4;
  } else {
    getImgIndex--;
  }

  containerProductImgActive.src = 'dist/assets/images/image-product-' + getImgIndex + '.jpg';
  containerProductImgActive.setAttribute("data-active", getImgIndex);
});
btnNextMob.addEventListener('click', function () {
  var currentActiveAttr = containerProductImgActive.dataset.active;
  var getImgIndex = currentActiveAttr;

  if (getImgIndex >= 4) {
    getImgIndex = 1;
  } else {
    getImgIndex++;
  }

  containerProductImgActive.src = 'dist/assets/images/image-product-' + getImgIndex + '.jpg';
  containerProductImgActive.setAttribute("data-active", getImgIndex);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9jYXJ0ID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9jYXJ0XCIpO1xuXG4oMCwgX2NhcnQuYWRkVG9DYXJ0KSgpO1xuKDAsIF9jYXJ0LmRlbGV0ZUZyb21DYXJ0KSgpO1xuKDAsIF9jYXJ0LmVtcHR5Q2FydCkoKTtcbigwLCBfY2FydC5idG5QbHVzTWludXMpKCk7XG52YXIgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19idXJnZXInKTtcbnZhciBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX21lbnUnKTtcbnZhciBtZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fbWVudS1pdGVtJyk7XG52YXIgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1uYXZfX21lbnUtbGluaycpO1xudmFyIG1vZGFsTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19tb2InKTtcbnZhciB0aHVtYkFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aHVtYi1pbWcnKTtcbnZhciBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtaW1nJyk7XG52YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbnZhciB0aHVtYkFjdGl2ZUltZ01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRodW1iLWltZy1tb2RhbCcpO1xudmFyIGJ0blByZXZpb3VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tcHJldmlvdXMnKTtcbnZhciBidG5OZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tbmV4dCcpO1xudmFyIGJ0blByZXZpb3VzTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tcHJldmlvdXMtbW9iJyk7XG52YXIgYnRuTmV4dE1vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLW5leHQtbW9iJyk7XG52YXIgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbl9fY2xvc2UnKTtcbnZhciBsaWdodGJveE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG52YXIgY29udGFpbmVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX19tb2RhbCcpO1xudmFyIHRodW1iQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX3RodW1ibmFpbHMnKTtcbnZhciB0aHVtYkNvbnRhaW5lckltYWdlcyA9IHRodW1iQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDtcbi8qLS0tLS0tQnVyZ2VyIGFuZCBtb2JpbGUgbWVudS0tLS0tLSovXG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICBtZW51TGluay5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICB9KTtcbiAgbW9kYWxNb2IuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG59KTtcbi8qLS0tLS0tQ2hhbmdpbmcgdGh1bWIgaW1nIHdoaXQgbWFpbiBpbWctLS0tLS0qL1xuXG52YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICB0aHVtYkFjdGl2ZVtfaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRodW1iID0gJ2NvbnRhaW5lcl9fdGh1bWJuYWlscy1pbWctJyArIFtfaSArIDFdO1xuICAgIHZhciB0aHVtYkltZyA9IHRodW1iLnNsaWNlKC0xKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1pbWcnKS5zcmMgPSAnZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIHRodW1iSW1nICsgJy5qcGcnO1xuICAgIHRodW1iQWN0aXZlLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICB0aHVtYkFjdGl2ZVtfaV0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gIH0pO1xufTtcblxuZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRodW1iQWN0aXZlLmxlbmd0aDsgX2krKykge1xuICBfbG9vcChfaSk7XG59XG5cbjtcbmNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjb250YWluZXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnRhaW5lck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn0pO1xuLyotLS0tLS1MaWdodGJveCBtb2RhbC0tLS0tLSovXG5cbnZhciBfbG9vcDIgPSBmdW5jdGlvbiBfbG9vcDIoX2kyKSB7XG4gIHRodW1iQWN0aXZlSW1nTW9kYWxbX2kyXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHRodW1iTW9kYWwgPSAnY29udGFpbmVyX190aHVtYm5haWxzLWltZy0nICsgW19pMiArIDFdO1xuICAgIHZhciB0aHVtYkltZ01vZGFsID0gdGh1bWJNb2RhbC5zbGljZSgtMSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RJbWcnKS5zcmMgPSAnZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIHRodW1iSW1nTW9kYWwgKyAnLmpwZyc7XG4gICAgdGh1bWJBY3RpdmVJbWdNb2RhbC5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgdGh1bWJBY3RpdmVJbWdNb2RhbFtfaTJdLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICB9KTtcbn07XG5cbmZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHRodW1iQWN0aXZlSW1nTW9kYWwubGVuZ3RoOyBfaTIrKykge1xuICBfbG9vcDIoX2kyKTtcbn1cblxuO1xuLyotLS0tLS1saWdodGJveCBidG4gcHJldmlvdXMgYW5kIG5leHQtLS0tLS0qL1xuXG52YXIgaSA9IDA7XG5idG5QcmV2aW91cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKGkgPD0gMCkgaSA9IHRodW1iQWN0aXZlSW1nTW9kYWwubGVuZ3RoO1xuICBpLS07XG4gIHRodW1iQWN0aXZlSW1nTW9kYWwuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gIH0pO1xuICB0aHVtYkFjdGl2ZUltZ01vZGFsW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICByZXR1cm4gc2V0SW1nKCk7XG59KTtcbmJ0bk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChpID49IHRodW1iQWN0aXZlSW1nTW9kYWwubGVuZ3RoIC0gMSkgaSA9IC0xO1xuICBpKys7XG4gIHRodW1iQWN0aXZlSW1nTW9kYWwuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gIH0pO1xuICB0aHVtYkFjdGl2ZUltZ01vZGFsW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICByZXR1cm4gc2V0SW1nKCk7XG59KTtcbi8qLS0tLS0tIGJ0biBwcmV2aW91cywgYnRuIG5leHQgbW9iLS0tLS0tKi9cblxuYnRuUHJldmlvdXNNb2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBjdXJyZW50QWN0aXZlQXR0ciA9IGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUuZGF0YXNldC5hY3RpdmU7XG4gIHZhciBnZXRJbWdJbmRleCA9IGN1cnJlbnRBY3RpdmVBdHRyO1xuXG4gIGlmIChnZXRJbWdJbmRleCA8PSAxKSB7XG4gICAgZ2V0SW1nSW5kZXggPSA0O1xuICB9IGVsc2Uge1xuICAgIGdldEltZ0luZGV4LS07XG4gIH1cblxuICBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLnNyYyA9ICdkaXN0L2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0nICsgZ2V0SW1nSW5kZXggKyAnLmpwZyc7XG4gIGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUuc2V0QXR0cmlidXRlKFwiZGF0YS1hY3RpdmVcIiwgZ2V0SW1nSW5kZXgpO1xufSk7XG5idG5OZXh0TW9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YXIgY3VycmVudEFjdGl2ZUF0dHIgPSBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLmRhdGFzZXQuYWN0aXZlO1xuICB2YXIgZ2V0SW1nSW5kZXggPSBjdXJyZW50QWN0aXZlQXR0cjtcblxuICBpZiAoZ2V0SW1nSW5kZXggPj0gNCkge1xuICAgIGdldEltZ0luZGV4ID0gMTtcbiAgfSBlbHNlIHtcbiAgICBnZXRJbWdJbmRleCsrO1xuICB9XG5cbiAgY29udGFpbmVyUHJvZHVjdEltZ0FjdGl2ZS5zcmMgPSAnZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIGdldEltZ0luZGV4ICsgJy5qcGcnO1xuICBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLnNldEF0dHJpYnV0ZShcImRhdGEtYWN0aXZlXCIsIGdldEltZ0luZGV4KTtcbn0pO1xuYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnRhaW5lck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGxpZ2h0Ym94TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xubGlnaHRib3hNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgY29udGFpbmVyTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbGlnaHRib3hNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbmZ1bmN0aW9uIHNldEltZygpIHtcbiAgdmFyIHNldEJ0bkFjdGl2ZSA9ICdjb250YWluZXJfX3RodW1ibmFpbHMtaW1nLScgKyBbaSArIDFdO1xuICB2YXIgc2V0QnRuSW1nID0gc2V0QnRuQWN0aXZlLnNsaWNlKC0xKTtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0SW1nJykuc3JjID0gJ2Rpc3QvYXNzZXRzL2ltYWdlcy9pbWFnZS1wcm9kdWN0LScgKyBzZXRCdG5JbWcgKyAnLmpwZyc7XG59XG5cbn0se1wiLi9jb21wb25lbnRzL2NhcnRcIjoyfV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZW1wdHlDYXJ0ID0gZXhwb3J0cy5kZWxldGVGcm9tQ2FydCA9IGV4cG9ydHMuYnRuUGx1c01pbnVzID0gZXhwb3J0cy5hZGRUb0NhcnQgPSB2b2lkIDA7XG52YXIgY2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0Jyk7XG52YXIgY2FydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX21vZGFsJyk7XG52YXIgY2FydE1vZGFsRW1wdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbW9kYWwtZW1wdHknKTtcbnZhciBjYXJ0TW9kYWxQcm9kdWN0UXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbW9kYWwtcHJvZHVjdC1wcmljZS0taW5wdXQtYW1vdW50Jyk7XG52YXIgY2FydFByb2R1Y3RQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXByb2R1Y3QtcHJpY2UnKTtcbnZhciBjYXJ0UHJvZHVjdFF1YW50aXR5UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbW9kYWwtcHJvZHVjdC1wcmljZS1xdWFudGl0eS0tcHJpY2UnKTtcbnZhciBjYXJ0T3JkZXJCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fb3JkZXItYm94Jyk7XG52YXIgY2FydE9yZGVyTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX29yZGVyLW51bWJlcicpO1xudmFyIGRlbGV0ZVByb2R1Y3RRdWFudGl0eUJpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19tb2RhbC1wcm9kdWN0LWJpbicpO1xudmFyIGJ0bkFkZFRvQ2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX2FkZC10by1jYXJ0Jyk7XG52YXIgaW5wdXRBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX19pbnB1dC1hbW91bnQnKTtcbnZhciBidG5NaW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX21pbnVzJyk7XG52YXIgYnRuUGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX3BsdXMnKTtcbi8qLS0tLS0tQWRkIHRvIGNhcnQtLS0tLS0qL1xuXG52YXIgYWRkVG9DYXJ0ID0gZnVuY3Rpb24gYWRkVG9DYXJ0KCkge1xuICBjb25zb2xlLmxvZygndGVzdCcpO1xuICBidG5BZGRUb0NhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlucHV0QW1vdW50LmlubmVySFRNTCA+IDApIHtcbiAgICAgIGNhcnRPcmRlck51bWJlci5pbm5lckhUTUwgPSBpbnB1dEFtb3VudC5pbm5lckhUTUw7XG4gICAgICBjYXJ0T3JkZXJCb3guc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBjYXJ0TW9kYWxQcm9kdWN0UXVhbnRpdHkuaW5uZXJIVE1MID0gaW5wdXRBbW91bnQuaW5uZXJIVE1MO1xuICAgICAgY2FydFByb2R1Y3RRdWFudGl0eVByaWNlLmlubmVySFRNTCA9IChjYXJ0UHJvZHVjdFByaWNlLmlubmVySFRNTCAqIGlucHV0QW1vdW50LmlubmVySFRNTCkudG9GaXhlZCgyKTtcbiAgICAgIGNhcnRNb2RhbEVtcHR5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KTtcbn07XG4vKi0tLS0tLURlbGV0ZSBmcm9tIGNhcnQtLS0tLS0qL1xuXG5cbmV4cG9ydHMuYWRkVG9DYXJ0ID0gYWRkVG9DYXJ0O1xuXG52YXIgZGVsZXRlRnJvbUNhcnQgPSBmdW5jdGlvbiBkZWxldGVGcm9tQ2FydCgpIHtcbiAgZGVsZXRlUHJvZHVjdFF1YW50aXR5QmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGNhcnRNb2RhbFByb2R1Y3RRdWFudGl0eS5pbm5lckhUTUwgLT0gMTtcbiAgICBjYXJ0T3JkZXJOdW1iZXIuaW5uZXJIVE1MIC09IDE7XG4gICAgaW5wdXRBbW91bnQuaW5uZXJIVE1MIC09IDE7XG5cbiAgICBpZiAoY2FydE1vZGFsUHJvZHVjdFF1YW50aXR5LmlubmVySFRNTCA8PSAwIHx8IGNhcnRPcmRlck51bWJlci5pbm5lckhUTUwgPD0gMCkge1xuICAgICAgY2FydE1vZGFsUHJvZHVjdFF1YW50aXR5LmlubmVySFRNTCA9IDA7XG4gICAgICBjYXJ0T3JkZXJOdW1iZXIuaW5uZXJIVE1MID0gMDtcbiAgICB9XG5cbiAgICB2YXIgcXVhbnRpdHlOdW0gPSBwYXJzZUludChjYXJ0UHJvZHVjdFF1YW50aXR5UHJpY2UuaW5uZXJIVE1MKTtcbiAgICB2YXIgcHJvZHVjdFByaWNlID0gcGFyc2VJbnQoY2FydFByb2R1Y3RQcmljZS5pbm5lckhUTUwpO1xuICAgIGNhcnRQcm9kdWN0UXVhbnRpdHlQcmljZS5pbm5lckhUTUwgPSAocXVhbnRpdHlOdW0gLSBwcm9kdWN0UHJpY2UpLnRvRml4ZWQoMik7XG5cbiAgICBpZiAoY2FydFByb2R1Y3RRdWFudGl0eVByaWNlLmlubmVySFRNTCA8PSAwKSB7XG4gICAgICBjYXJ0UHJvZHVjdFF1YW50aXR5UHJpY2UuaW5uZXJIVE1MID0gMDtcbiAgICAgIGNhcnRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgY2FydE1vZGFsRW1wdHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGNhcnRPcmRlckJveC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG59O1xuLyotLS0tLS1FbXB0eSBjYXJ0LS0tLS0tKi9cblxuXG5leHBvcnRzLmRlbGV0ZUZyb21DYXJ0ID0gZGVsZXRlRnJvbUNhcnQ7XG5cbnZhciBlbXB0eUNhcnQgPSBmdW5jdGlvbiBlbXB0eUNhcnQoKSB7XG4gIGNhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNhcnRNb2RhbEVtcHR5LnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgY2FydE1vZGFsRW1wdHkuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhcnRNb2RhbEVtcHR5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0QW1vdW50LmlubmVySFRNTCA+IDApIHtcbiAgICAgIGNhcnRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGNhcnRNb2RhbEVtcHR5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuICB9KTtcbn07XG4vKi0tLS0tLWJ0biBwbHVzIGFuZCBtaW51cy0tLS0tLSovXG5cblxuZXhwb3J0cy5lbXB0eUNhcnQgPSBlbXB0eUNhcnQ7XG5cbnZhciBidG5QbHVzTWludXMgPSBmdW5jdGlvbiBidG5QbHVzTWludXMoKSB7XG4gIHZhciBhcHBwID0ge1xuICAgIGN1cnJlbnRWYWx1ZTogMFxuICB9O1xuICBpbnB1dEFtb3VudC5pbm5lckhUTUwgPSBmb3JtYXROdW1iZXIoMCk7XG4gIGJ0blBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGN1cnJlbnRBbW91bnQgPSBmb3JtYXROdW1iZXIoYXBwcC5jdXJyZW50VmFsdWUgKz0gMSk7XG4gICAgaW5wdXRBbW91bnQuaW5uZXJIVE1MID0gY3VycmVudEFtb3VudDtcbiAgfSk7XG4gIGJ0bk1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjdXJyZW50QW1vdW50ID0gMDtcblxuICAgIGlmIChhcHBwLmN1cnJlbnRWYWx1ZSA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRBbW91bnQgPSBmb3JtYXROdW1iZXIoYXBwcC5jdXJyZW50VmFsdWUgLT0gMSk7XG4gICAgICBpbnB1dEFtb3VudC5pbm5lckhUTUwgPSBjdXJyZW50QW1vdW50O1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnRzLmJ0blBsdXNNaW51cyA9IGJ0blBsdXNNaW51cztcblxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bSkge1xuICByZXR1cm4gbnVtLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpO1xufVxuXG47XG5cbn0se31dfSx7fSxbMV0pO1xuIl0sImZpbGUiOiJhcHAuanMifQ==
