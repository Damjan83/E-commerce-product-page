(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var burger = document.querySelector('.main-nav__burger');
var nav = document.querySelector('.main-nav__menu');
var menuItem = document.querySelector('.main-nav__menu-item');
var menuLink = document.querySelectorAll('.main-nav__menu-link');
var modalMob = document.querySelector('.modal__mob');
var thumbActive = document.querySelectorAll('.thumb-img');
var containerProductImgActive = document.querySelector('.container__product-img');
var product = containerProductImgActive.querySelector('.product');
var modal = document.querySelector('.modal');
var thumbActiveImgModal = document.querySelectorAll('.thumb-img-modal'); //const modalActiveImg = document.querySelector('.container__product-modal-img');

var btnPrevious = document.querySelector('.btn--previous');
var btnNext = document.querySelector('.btn--next');
var btnPreviousMob = document.querySelector('.btn--previous-mob');
var btnNextMob = document.querySelector('.btn--next-mob');
var btnClose = document.querySelector('.icon__close');
var lightboxModal = document.querySelector('.modal');
var containerModal = document.querySelector('.container__modal');
var cart = document.querySelector('.cart');
var cartModal = document.querySelector('.cart__modal');
var cartModalProductQuantity = document.querySelector('.cart__modal-product-price--input-amount');
var cartProductPrice = document.querySelector('.cart-product-price');
var cartProductQuantityPrice = document.querySelector('.cart__modal-product-price--quantity-price');
var deleteProductQuantityBin = document.querySelector('.cart__modal-product-bin');
var btnMinus = document.querySelector('.btn__minus');
var btnPlus = document.querySelector('.btn__plus');
var inputAmount = document.querySelector('.container__input-amount');
var cartOrderBox = document.querySelector('.cart__order-box');
var cartOrderNumber = document.querySelector('.cart__order-number');
var btnAddToCart = document.querySelector('.btn__add-to-cart');
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
});
/*------btn plus and minus------*/

var app = {
  currentValue: 0
};
inputAmount.innerHTML = formatNumber(0);
btnPlus.addEventListener('click', function () {
  var currentAmount = formatNumber(app.currentValue += 1);
  inputAmount.innerHTML = currentAmount;
});
btnMinus.addEventListener('click', function () {
  var currentAmount = 0;

  if (app.currentValue <= 0) {
    return;
  } else {
    currentAmount = formatNumber(app.currentValue -= 1);
    inputAmount.innerHTML = currentAmount;
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

function setImg() {
  var setBtnActive = 'container__thumbnails-img-' + [i + 1];
  var setBtnImg = setBtnActive.slice(-1);
  return document.querySelector('.productImg').src = 'dist/assets/images/image-product-' + setBtnImg + '.jpg';
}
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
btnAddToCart.addEventListener('click', function () {
  if (inputAmount.innerHTML > 0) {
    cartOrderNumber.innerHTML = inputAmount.innerHTML;
    cartOrderBox.style.display = 'block';
    cartModalProductQuantity.innerHTML = inputAmount.innerHTML;
    cartProductQuantityPrice.innerHTML = (cartProductPrice.innerHTML * inputAmount.innerHTML).toFixed(2);
  }
});
deleteProductQuantityBin.addEventListener('click', function () {
  cartModalProductQuantity.innerHTML -= 1;
  cartOrderNumber.innerHTML -= 1;

  if (cartModalProductQuantity.innerHTML <= 0 || cartOrderNumber.innerHTML <= 0) {
    cartModalProductQuantity.innerHTML = 0;
    cartOrderNumber.innerHTML = 0;
  }

  var quantityNum = parseInt(cartProductQuantityPrice.innerHTML);
  var productPrice = parseInt(cartProductPrice.innerHTML);
  cartProductQuantityPrice.innerHTML = quantityNum - productPrice;

  if (cartProductQuantityPrice.innerHTML <= 0) {
    cartProductQuantityPrice.innerHTML = 0;
  }
});

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

;
/*------cart modal------*/

cart.addEventListener('click', function () {
  cartModal.style.display = 'block';
});

},{}]},{},[1]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fYnVyZ2VyJyk7XG52YXIgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19tZW51Jyk7XG52YXIgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX21lbnUtaXRlbScpO1xudmFyIG1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbmF2X19tZW51LWxpbmsnKTtcbnZhciBtb2RhbE1vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fbW9iJyk7XG52YXIgdGh1bWJBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGh1bWItaW1nJyk7XG52YXIgY29udGFpbmVyUHJvZHVjdEltZ0FjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX3Byb2R1Y3QtaW1nJyk7XG52YXIgcHJvZHVjdCA9IGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUucXVlcnlTZWxlY3RvcignLnByb2R1Y3QnKTtcbnZhciBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xudmFyIHRodW1iQWN0aXZlSW1nTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGh1bWItaW1nLW1vZGFsJyk7IC8vY29uc3QgbW9kYWxBY3RpdmVJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX19wcm9kdWN0LW1vZGFsLWltZycpO1xuXG52YXIgYnRuUHJldmlvdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1wcmV2aW91cycpO1xudmFyIGJ0bk5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1uZXh0Jyk7XG52YXIgYnRuUHJldmlvdXNNb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1wcmV2aW91cy1tb2InKTtcbnZhciBidG5OZXh0TW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tbmV4dC1tb2InKTtcbnZhciBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uX19jbG9zZScpO1xudmFyIGxpZ2h0Ym94TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbnZhciBjb250YWluZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX21vZGFsJyk7XG52YXIgY2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0Jyk7XG52YXIgY2FydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX21vZGFsJyk7XG52YXIgY2FydE1vZGFsUHJvZHVjdFF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX21vZGFsLXByb2R1Y3QtcHJpY2UtLWlucHV0LWFtb3VudCcpO1xudmFyIGNhcnRQcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1wcm9kdWN0LXByaWNlJyk7XG52YXIgY2FydFByb2R1Y3RRdWFudGl0eVByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX21vZGFsLXByb2R1Y3QtcHJpY2UtLXF1YW50aXR5LXByaWNlJyk7XG52YXIgZGVsZXRlUHJvZHVjdFF1YW50aXR5QmluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX21vZGFsLXByb2R1Y3QtYmluJyk7XG52YXIgYnRuTWludXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19taW51cycpO1xudmFyIGJ0blBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19wbHVzJyk7XG52YXIgaW5wdXRBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX19pbnB1dC1hbW91bnQnKTtcbnZhciBjYXJ0T3JkZXJCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fb3JkZXItYm94Jyk7XG52YXIgY2FydE9yZGVyTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX29yZGVyLW51bWJlcicpO1xudmFyIGJ0bkFkZFRvQ2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX2FkZC10by1jYXJ0Jyk7XG52YXIgdGh1bWJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX190aHVtYm5haWxzJyk7XG52YXIgdGh1bWJDb250YWluZXJJbWFnZXMgPSB0aHVtYkNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGg7XG4vKi0tLS0tLUJ1cmdlciBhbmQgbW9iaWxlIG1lbnUtLS0tLS0qL1xuXG5idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgYnVyZ2VyLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICBtZW51SXRlbS5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgbWVudUxpbmsuZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgfSk7XG4gIG1vZGFsTW9iLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xufSk7XG4vKi0tLS0tLUNoYW5naW5nIHRodW1iIGltZyB3aGl0IG1haW4gaW1nLS0tLS0tKi9cblxudmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcbiAgdGh1bWJBY3RpdmVbX2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aHVtYiA9ICdjb250YWluZXJfX3RodW1ibmFpbHMtaW1nLScgKyBbX2kgKyAxXTtcbiAgICB2YXIgdGh1bWJJbWcgPSB0aHVtYi5zbGljZSgtMSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QnKS5zcmMgPSAnZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIHRodW1iSW1nICsgJy5qcGcnO1xuICAgIHRodW1iQWN0aXZlLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICB0aHVtYkFjdGl2ZVtfaV0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gIH0pO1xufTtcblxuZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRodW1iQWN0aXZlLmxlbmd0aDsgX2krKykge1xuICBfbG9vcChfaSk7XG59XG5cbjtcbmNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjb250YWluZXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuLyotLS0tLS1idG4gcGx1cyBhbmQgbWludXMtLS0tLS0qL1xuXG52YXIgYXBwID0ge1xuICBjdXJyZW50VmFsdWU6IDBcbn07XG5pbnB1dEFtb3VudC5pbm5lckhUTUwgPSBmb3JtYXROdW1iZXIoMCk7XG5idG5QbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YXIgY3VycmVudEFtb3VudCA9IGZvcm1hdE51bWJlcihhcHAuY3VycmVudFZhbHVlICs9IDEpO1xuICBpbnB1dEFtb3VudC5pbm5lckhUTUwgPSBjdXJyZW50QW1vdW50O1xufSk7XG5idG5NaW51cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGN1cnJlbnRBbW91bnQgPSAwO1xuXG4gIGlmIChhcHAuY3VycmVudFZhbHVlIDw9IDApIHtcbiAgICByZXR1cm47XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEFtb3VudCA9IGZvcm1hdE51bWJlcihhcHAuY3VycmVudFZhbHVlIC09IDEpO1xuICAgIGlucHV0QW1vdW50LmlubmVySFRNTCA9IGN1cnJlbnRBbW91bnQ7XG4gIH1cbn0pO1xuLyotLS0tLS1MaWdodGJveCBtb2RhbC0tLS0tLSovXG5cbnZhciBfbG9vcDIgPSBmdW5jdGlvbiBfbG9vcDIoX2kyKSB7XG4gIHRodW1iQWN0aXZlSW1nTW9kYWxbX2kyXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHRodW1iTW9kYWwgPSAnY29udGFpbmVyX190aHVtYm5haWxzLWltZy0nICsgW19pMiArIDFdO1xuICAgIHZhciB0aHVtYkltZ01vZGFsID0gdGh1bWJNb2RhbC5zbGljZSgtMSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RJbWcnKS5zcmMgPSAnZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIHRodW1iSW1nTW9kYWwgKyAnLmpwZyc7XG4gICAgdGh1bWJBY3RpdmVJbWdNb2RhbC5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgdGh1bWJBY3RpdmVJbWdNb2RhbFtfaTJdLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICB9KTtcbn07XG5cbmZvciAodmFyIF9pMiA9IDA7IF9pMiA8IHRodW1iQWN0aXZlSW1nTW9kYWwubGVuZ3RoOyBfaTIrKykge1xuICBfbG9vcDIoX2kyKTtcbn1cblxuO1xuLyotLS0tLS1saWdodGJveCBidG4gcHJldmlvdXMgYW5kIG5leHQtLS0tLS0qL1xuXG52YXIgaSA9IDA7XG5idG5QcmV2aW91cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKGkgPD0gMCkgaSA9IHRodW1iQWN0aXZlSW1nTW9kYWwubGVuZ3RoO1xuICBpLS07XG4gIHRodW1iQWN0aXZlSW1nTW9kYWwuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gIH0pO1xuICB0aHVtYkFjdGl2ZUltZ01vZGFsW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICByZXR1cm4gc2V0SW1nKCk7XG59KTtcbmJ0bk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChpID49IHRodW1iQWN0aXZlSW1nTW9kYWwubGVuZ3RoIC0gMSkgaSA9IC0xO1xuICBpKys7XG4gIHRodW1iQWN0aXZlSW1nTW9kYWwuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gIH0pO1xuICB0aHVtYkFjdGl2ZUltZ01vZGFsW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICByZXR1cm4gc2V0SW1nKCk7XG59KTtcblxuZnVuY3Rpb24gc2V0SW1nKCkge1xuICB2YXIgc2V0QnRuQWN0aXZlID0gJ2NvbnRhaW5lcl9fdGh1bWJuYWlscy1pbWctJyArIFtpICsgMV07XG4gIHZhciBzZXRCdG5JbWcgPSBzZXRCdG5BY3RpdmUuc2xpY2UoLTEpO1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RJbWcnKS5zcmMgPSAnZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIHNldEJ0bkltZyArICcuanBnJztcbn1cbi8qLS0tLS0tIGJ0biBwcmV2aW91cywgYnRuIG5leHQgbW9iLS0tLS0tKi9cblxuXG5idG5QcmV2aW91c01vYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGN1cnJlbnRBY3RpdmVBdHRyID0gcHJvZHVjdC5kYXRhc2V0LmFjdGl2ZTtcbiAgdmFyIGdldEltZ0luZGV4ID0gY3VycmVudEFjdGl2ZUF0dHI7XG5cbiAgaWYgKGdldEltZ0luZGV4IDw9IDEpIHtcbiAgICBnZXRJbWdJbmRleCA9IDQ7XG4gIH0gZWxzZSB7XG4gICAgZ2V0SW1nSW5kZXgtLTtcbiAgfVxuXG4gIHByb2R1Y3Quc3JjID0gJ2Rpc3QvYXNzZXRzL2ltYWdlcy9pbWFnZS1wcm9kdWN0LScgKyBnZXRJbWdJbmRleCArICcuanBnJztcbiAgcHJvZHVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGl2ZVwiLCBnZXRJbWdJbmRleCk7XG59KTtcbmJ0bk5leHRNb2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBjdXJyZW50QWN0aXZlQXR0ciA9IHByb2R1Y3QuZGF0YXNldC5hY3RpdmU7XG4gIHZhciBnZXRJbWdJbmRleCA9IGN1cnJlbnRBY3RpdmVBdHRyO1xuXG4gIGlmIChnZXRJbWdJbmRleCA+PSA0KSB7XG4gICAgZ2V0SW1nSW5kZXggPSAxO1xuICB9IGVsc2Uge1xuICAgIGdldEltZ0luZGV4Kys7XG4gIH1cblxuICBwcm9kdWN0LnNyYyA9ICdkaXN0L2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0nICsgZ2V0SW1nSW5kZXggKyAnLmpwZyc7XG4gIHByb2R1Y3Quc2V0QXR0cmlidXRlKFwiZGF0YS1hY3RpdmVcIiwgZ2V0SW1nSW5kZXgpO1xufSk7XG5idG5DbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgY29udGFpbmVyTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbGlnaHRib3hNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5saWdodGJveE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBjb250YWluZXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBsaWdodGJveE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcbmJ0bkFkZFRvQ2FydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKGlucHV0QW1vdW50LmlubmVySFRNTCA+IDApIHtcbiAgICBjYXJ0T3JkZXJOdW1iZXIuaW5uZXJIVE1MID0gaW5wdXRBbW91bnQuaW5uZXJIVE1MO1xuICAgIGNhcnRPcmRlckJveC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBjYXJ0TW9kYWxQcm9kdWN0UXVhbnRpdHkuaW5uZXJIVE1MID0gaW5wdXRBbW91bnQuaW5uZXJIVE1MO1xuICAgIGNhcnRQcm9kdWN0UXVhbnRpdHlQcmljZS5pbm5lckhUTUwgPSAoY2FydFByb2R1Y3RQcmljZS5pbm5lckhUTUwgKiBpbnB1dEFtb3VudC5pbm5lckhUTUwpLnRvRml4ZWQoMik7XG4gIH1cbn0pO1xuZGVsZXRlUHJvZHVjdFF1YW50aXR5QmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBjYXJ0TW9kYWxQcm9kdWN0UXVhbnRpdHkuaW5uZXJIVE1MIC09IDE7XG4gIGNhcnRPcmRlck51bWJlci5pbm5lckhUTUwgLT0gMTtcblxuICBpZiAoY2FydE1vZGFsUHJvZHVjdFF1YW50aXR5LmlubmVySFRNTCA8PSAwIHx8IGNhcnRPcmRlck51bWJlci5pbm5lckhUTUwgPD0gMCkge1xuICAgIGNhcnRNb2RhbFByb2R1Y3RRdWFudGl0eS5pbm5lckhUTUwgPSAwO1xuICAgIGNhcnRPcmRlck51bWJlci5pbm5lckhUTUwgPSAwO1xuICB9XG5cbiAgdmFyIHF1YW50aXR5TnVtID0gcGFyc2VJbnQoY2FydFByb2R1Y3RRdWFudGl0eVByaWNlLmlubmVySFRNTCk7XG4gIHZhciBwcm9kdWN0UHJpY2UgPSBwYXJzZUludChjYXJ0UHJvZHVjdFByaWNlLmlubmVySFRNTCk7XG4gIGNhcnRQcm9kdWN0UXVhbnRpdHlQcmljZS5pbm5lckhUTUwgPSBxdWFudGl0eU51bSAtIHByb2R1Y3RQcmljZTtcblxuICBpZiAoY2FydFByb2R1Y3RRdWFudGl0eVByaWNlLmlubmVySFRNTCA8PSAwKSB7XG4gICAgY2FydFByb2R1Y3RRdWFudGl0eVByaWNlLmlubmVySFRNTCA9IDA7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBmb3JtYXROdW1iZXIobnVtKSB7XG4gIHJldHVybiBudW0udG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyk7XG59XG5cbjtcbi8qLS0tLS0tY2FydCBtb2RhbC0tLS0tLSovXG5cbmNhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGNhcnRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn0pO1xuXG59LHt9XX0se30sWzFdKTtcbiJdLCJmaWxlIjoiYXBwLmpzIn0=
