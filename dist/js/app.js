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
var cartModalEmpty = document.querySelector('.cart__modal-empty');
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
    cartModalEmpty.style.display = 'none';
  }
});
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
  cartProductQuantityPrice.innerHTML = quantityNum - productPrice;

  if (cartProductQuantityPrice.innerHTML <= 0) {
    cartProductQuantityPrice.innerHTML = 0;
    cartModal.style.display = 'none';
    cartModalEmpty.style.display = 'none';
  }
});
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

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

;

},{}]},{},[1]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fYnVyZ2VyJyk7XG52YXIgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19tZW51Jyk7XG52YXIgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX21lbnUtaXRlbScpO1xudmFyIG1lbnVMaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbmF2X19tZW51LWxpbmsnKTtcbnZhciBtb2RhbE1vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fbW9iJyk7XG52YXIgdGh1bWJBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGh1bWItaW1nJyk7XG52YXIgY29udGFpbmVyUHJvZHVjdEltZ0FjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX3Byb2R1Y3QtaW1nJyk7XG52YXIgcHJvZHVjdCA9IGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUucXVlcnlTZWxlY3RvcignLnByb2R1Y3QnKTtcbnZhciBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xudmFyIHRodW1iQWN0aXZlSW1nTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGh1bWItaW1nLW1vZGFsJyk7IC8vY29uc3QgbW9kYWxBY3RpdmVJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX19wcm9kdWN0LW1vZGFsLWltZycpO1xuXG52YXIgYnRuUHJldmlvdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1wcmV2aW91cycpO1xudmFyIGJ0bk5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1uZXh0Jyk7XG52YXIgYnRuUHJldmlvdXNNb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1wcmV2aW91cy1tb2InKTtcbnZhciBidG5OZXh0TW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tbmV4dC1tb2InKTtcbnZhciBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uX19jbG9zZScpO1xudmFyIGxpZ2h0Ym94TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbnZhciBjb250YWluZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX21vZGFsJyk7XG52YXIgY2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0Jyk7XG52YXIgY2FydE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX21vZGFsJyk7XG52YXIgY2FydE1vZGFsRW1wdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbW9kYWwtZW1wdHknKTtcbnZhciBjYXJ0TW9kYWxQcm9kdWN0UXVhbnRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbW9kYWwtcHJvZHVjdC1wcmljZS0taW5wdXQtYW1vdW50Jyk7XG52YXIgY2FydFByb2R1Y3RQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LXByb2R1Y3QtcHJpY2UnKTtcbnZhciBjYXJ0UHJvZHVjdFF1YW50aXR5UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbW9kYWwtcHJvZHVjdC1wcmljZS0tcXVhbnRpdHktcHJpY2UnKTtcbnZhciBkZWxldGVQcm9kdWN0UXVhbnRpdHlCaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbW9kYWwtcHJvZHVjdC1iaW4nKTtcbnZhciBidG5NaW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX21pbnVzJyk7XG52YXIgYnRuUGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX3BsdXMnKTtcbnZhciBpbnB1dEFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX2lucHV0LWFtb3VudCcpO1xudmFyIGNhcnRPcmRlckJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19vcmRlci1ib3gnKTtcbnZhciBjYXJ0T3JkZXJOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fb3JkZXItbnVtYmVyJyk7XG52YXIgYnRuQWRkVG9DYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl9fYWRkLXRvLWNhcnQnKTtcbnZhciB0aHVtYkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX3RodW1ibmFpbHMnKTtcbnZhciB0aHVtYkNvbnRhaW5lckltYWdlcyA9IHRodW1iQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDtcbi8qLS0tLS0tQnVyZ2VyIGFuZCBtb2JpbGUgbWVudS0tLS0tLSovXG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICBtZW51TGluay5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICB9KTtcbiAgbW9kYWxNb2IuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG59KTtcbi8qLS0tLS0tQ2hhbmdpbmcgdGh1bWIgaW1nIHdoaXQgbWFpbiBpbWctLS0tLS0qL1xuXG52YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICB0aHVtYkFjdGl2ZVtfaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRodW1iID0gJ2NvbnRhaW5lcl9fdGh1bWJuYWlscy1pbWctJyArIFtfaSArIDFdO1xuICAgIHZhciB0aHVtYkltZyA9IHRodW1iLnNsaWNlKC0xKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdCcpLnNyYyA9ICdkaXN0L2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0nICsgdGh1bWJJbWcgKyAnLmpwZyc7XG4gICAgdGh1bWJBY3RpdmUuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIHRodW1iQWN0aXZlW19pXS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgfSk7XG59O1xuXG5mb3IgKHZhciBfaSA9IDA7IF9pIDwgdGh1bWJBY3RpdmUubGVuZ3RoOyBfaSsrKSB7XG4gIF9sb29wKF9pKTtcbn1cblxuO1xuY29udGFpbmVyUHJvZHVjdEltZ0FjdGl2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNvbnRhaW5lck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufSk7XG4vKi0tLS0tLWJ0biBwbHVzIGFuZCBtaW51cy0tLS0tLSovXG5cbnZhciBhcHAgPSB7XG4gIGN1cnJlbnRWYWx1ZTogMFxufTtcbmlucHV0QW1vdW50LmlubmVySFRNTCA9IGZvcm1hdE51bWJlcigwKTtcbmJ0blBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBjdXJyZW50QW1vdW50ID0gZm9ybWF0TnVtYmVyKGFwcC5jdXJyZW50VmFsdWUgKz0gMSk7XG4gIGlucHV0QW1vdW50LmlubmVySFRNTCA9IGN1cnJlbnRBbW91bnQ7XG59KTtcbmJ0bk1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YXIgY3VycmVudEFtb3VudCA9IDA7XG5cbiAgaWYgKGFwcC5jdXJyZW50VmFsdWUgPD0gMCkge1xuICAgIHJldHVybjtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50QW1vdW50ID0gZm9ybWF0TnVtYmVyKGFwcC5jdXJyZW50VmFsdWUgLT0gMSk7XG4gICAgaW5wdXRBbW91bnQuaW5uZXJIVE1MID0gY3VycmVudEFtb3VudDtcbiAgfVxufSk7XG4vKi0tLS0tLUxpZ2h0Ym94IG1vZGFsLS0tLS0tKi9cblxudmFyIF9sb29wMiA9IGZ1bmN0aW9uIF9sb29wMihfaTIpIHtcbiAgdGh1bWJBY3RpdmVJbWdNb2RhbFtfaTJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgdGh1bWJNb2RhbCA9ICdjb250YWluZXJfX3RodW1ibmFpbHMtaW1nLScgKyBbX2kyICsgMV07XG4gICAgdmFyIHRodW1iSW1nTW9kYWwgPSB0aHVtYk1vZGFsLnNsaWNlKC0xKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdEltZycpLnNyYyA9ICdkaXN0L2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0nICsgdGh1bWJJbWdNb2RhbCArICcuanBnJztcbiAgICB0aHVtYkFjdGl2ZUltZ01vZGFsLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICB0aHVtYkFjdGl2ZUltZ01vZGFsW19pMl0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gIH0pO1xufTtcblxuZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgdGh1bWJBY3RpdmVJbWdNb2RhbC5sZW5ndGg7IF9pMisrKSB7XG4gIF9sb29wMihfaTIpO1xufVxuXG47XG4vKi0tLS0tLWxpZ2h0Ym94IGJ0biBwcmV2aW91cyBhbmQgbmV4dC0tLS0tLSovXG5cbnZhciBpID0gMDtcbmJ0blByZXZpb3VzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBpZiAoaSA8PSAwKSBpID0gdGh1bWJBY3RpdmVJbWdNb2RhbC5sZW5ndGg7XG4gIGktLTtcbiAgdGh1bWJBY3RpdmVJbWdNb2RhbC5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgfSk7XG4gIHRodW1iQWN0aXZlSW1nTW9kYWxbaV0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gIHJldHVybiBzZXRJbWcoKTtcbn0pO1xuYnRuTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKGkgPj0gdGh1bWJBY3RpdmVJbWdNb2RhbC5sZW5ndGggLSAxKSBpID0gLTE7XG4gIGkrKztcbiAgdGh1bWJBY3RpdmVJbWdNb2RhbC5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgfSk7XG4gIHRodW1iQWN0aXZlSW1nTW9kYWxbaV0uY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gIHJldHVybiBzZXRJbWcoKTtcbn0pO1xuXG5mdW5jdGlvbiBzZXRJbWcoKSB7XG4gIHZhciBzZXRCdG5BY3RpdmUgPSAnY29udGFpbmVyX190aHVtYm5haWxzLWltZy0nICsgW2kgKyAxXTtcbiAgdmFyIHNldEJ0bkltZyA9IHNldEJ0bkFjdGl2ZS5zbGljZSgtMSk7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdEltZycpLnNyYyA9ICdkaXN0L2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0nICsgc2V0QnRuSW1nICsgJy5qcGcnO1xufVxuLyotLS0tLS0gYnRuIHByZXZpb3VzLCBidG4gbmV4dCBtb2ItLS0tLS0qL1xuXG5cbmJ0blByZXZpb3VzTW9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YXIgY3VycmVudEFjdGl2ZUF0dHIgPSBwcm9kdWN0LmRhdGFzZXQuYWN0aXZlO1xuICB2YXIgZ2V0SW1nSW5kZXggPSBjdXJyZW50QWN0aXZlQXR0cjtcblxuICBpZiAoZ2V0SW1nSW5kZXggPD0gMSkge1xuICAgIGdldEltZ0luZGV4ID0gNDtcbiAgfSBlbHNlIHtcbiAgICBnZXRJbWdJbmRleC0tO1xuICB9XG5cbiAgcHJvZHVjdC5zcmMgPSAnZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIGdldEltZ0luZGV4ICsgJy5qcGcnO1xuICBwcm9kdWN0LnNldEF0dHJpYnV0ZShcImRhdGEtYWN0aXZlXCIsIGdldEltZ0luZGV4KTtcbn0pO1xuYnRuTmV4dE1vYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGN1cnJlbnRBY3RpdmVBdHRyID0gcHJvZHVjdC5kYXRhc2V0LmFjdGl2ZTtcbiAgdmFyIGdldEltZ0luZGV4ID0gY3VycmVudEFjdGl2ZUF0dHI7XG5cbiAgaWYgKGdldEltZ0luZGV4ID49IDQpIHtcbiAgICBnZXRJbWdJbmRleCA9IDE7XG4gIH0gZWxzZSB7XG4gICAgZ2V0SW1nSW5kZXgrKztcbiAgfVxuXG4gIHByb2R1Y3Quc3JjID0gJ2Rpc3QvYXNzZXRzL2ltYWdlcy9pbWFnZS1wcm9kdWN0LScgKyBnZXRJbWdJbmRleCArICcuanBnJztcbiAgcHJvZHVjdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGl2ZVwiLCBnZXRJbWdJbmRleCk7XG59KTtcbmJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBjb250YWluZXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBsaWdodGJveE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcbmxpZ2h0Ym94TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnRhaW5lck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGxpZ2h0Ym94TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuYnRuQWRkVG9DYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBpZiAoaW5wdXRBbW91bnQuaW5uZXJIVE1MID4gMCkge1xuICAgIGNhcnRPcmRlck51bWJlci5pbm5lckhUTUwgPSBpbnB1dEFtb3VudC5pbm5lckhUTUw7XG4gICAgY2FydE9yZGVyQm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGNhcnRNb2RhbFByb2R1Y3RRdWFudGl0eS5pbm5lckhUTUwgPSBpbnB1dEFtb3VudC5pbm5lckhUTUw7XG4gICAgY2FydFByb2R1Y3RRdWFudGl0eVByaWNlLmlubmVySFRNTCA9IChjYXJ0UHJvZHVjdFByaWNlLmlubmVySFRNTCAqIGlucHV0QW1vdW50LmlubmVySFRNTCkudG9GaXhlZCgyKTtcbiAgICBjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59KTtcbmRlbGV0ZVByb2R1Y3RRdWFudGl0eUJpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgY2FydE1vZGFsUHJvZHVjdFF1YW50aXR5LmlubmVySFRNTCAtPSAxO1xuICBjYXJ0T3JkZXJOdW1iZXIuaW5uZXJIVE1MIC09IDE7XG4gIGlucHV0QW1vdW50LmlubmVySFRNTCAtPSAxO1xuXG4gIGlmIChjYXJ0TW9kYWxQcm9kdWN0UXVhbnRpdHkuaW5uZXJIVE1MIDw9IDAgfHwgY2FydE9yZGVyTnVtYmVyLmlubmVySFRNTCA8PSAwKSB7XG4gICAgY2FydE1vZGFsUHJvZHVjdFF1YW50aXR5LmlubmVySFRNTCA9IDA7XG4gICAgY2FydE9yZGVyTnVtYmVyLmlubmVySFRNTCA9IDA7XG4gIH1cblxuICB2YXIgcXVhbnRpdHlOdW0gPSBwYXJzZUludChjYXJ0UHJvZHVjdFF1YW50aXR5UHJpY2UuaW5uZXJIVE1MKTtcbiAgdmFyIHByb2R1Y3RQcmljZSA9IHBhcnNlSW50KGNhcnRQcm9kdWN0UHJpY2UuaW5uZXJIVE1MKTtcbiAgY2FydFByb2R1Y3RRdWFudGl0eVByaWNlLmlubmVySFRNTCA9IHF1YW50aXR5TnVtIC0gcHJvZHVjdFByaWNlO1xuXG4gIGlmIChjYXJ0UHJvZHVjdFF1YW50aXR5UHJpY2UuaW5uZXJIVE1MIDw9IDApIHtcbiAgICBjYXJ0UHJvZHVjdFF1YW50aXR5UHJpY2UuaW5uZXJIVE1MID0gMDtcbiAgICBjYXJ0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG59KTtcbmNhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICBjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSBlbHNlIHtcbiAgICBjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgaWYgKGlucHV0QW1vdW50LmlubmVySFRNTCA+IDApIHtcbiAgICBjYXJ0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgY2FydE1vZGFsRW1wdHkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW0pIHtcbiAgcmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygnZW4tVVMnKTtcbn1cblxuO1xuXG59LHt9XX0se30sWzFdKTtcbiJdLCJmaWxlIjoiYXBwLmpzIn0=
