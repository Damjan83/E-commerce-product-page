(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _cart = require("./components/cart");

var burger = document.querySelector('.main-nav__burger');
var nav = document.querySelector('.main-nav__menu');
var menuItem = document.querySelector('.main-nav__menu-item');
var menuLink = document.querySelectorAll('.main-nav__menu-link');
var modalMob = document.querySelector('.modal__mob');
var thumbActive = document.querySelectorAll('.thumb-img');
var containerProductImgActive = document.querySelector('.product-img');
var mainProductImgModal = document.querySelector('.productImg');
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
containerProductImgActive.addEventListener('click', function () {
  modal.style.display = 'block';
  containerModal.style.display = 'block';

  if (window.innerWidth < 768) {
    modal.style.display = 'none';
    containerModal.style.display = 'none';
  }
});

function changeMainHandler(ele, eleArray, bgFlag) {
  var _loop = function _loop(_i) {
    eleArray[_i].addEventListener('click', function () {
      var thumb = 'container__thumbnails-img-' + [_i + 1];
      var thumbImg = thumb.slice(-1);

      if (bgFlag) {
        ele.style.backgroundImage = 'url(../dist/assets/images/image-product-' + thumbImg + '.jpg)';
      } else {
        ele.src = 'dist/assets/images/image-product-' + thumbImg + '.jpg';
      }

      eleArray.forEach(function (i) {
        i.classList.remove('is-active');
      });

      eleArray[_i].classList.add('is-active');
    });
  };

  for (var _i = 0; _i < eleArray.length; _i++) {
    _loop(_i);
  }
}
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

  containerProductImgActive.src = 'url(../assets/images/image-product-' + getImgIndex + '.jpg)';
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

  containerProductImgActive.src = 'url(../assets/images/image-product-' + getImgIndex + '.jpg)';
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

(0, _cart.addToCart)();
(0, _cart.deleteFromCart)();
(0, _cart.emptyCart)();
(0, _cart.btnPlusMinus)();
changeMainHandler(containerProductImgActive, thumbActive, true);
changeMainHandler(mainProductImgModal, thumbActiveImgModal);

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9jYXJ0ID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9jYXJ0XCIpO1xuXG52YXIgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19idXJnZXInKTtcbnZhciBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX21lbnUnKTtcbnZhciBtZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fbWVudS1pdGVtJyk7XG52YXIgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1uYXZfX21lbnUtbGluaycpO1xudmFyIG1vZGFsTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19tb2InKTtcbnZhciB0aHVtYkFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aHVtYi1pbWcnKTtcbnZhciBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtaW1nJyk7XG52YXIgbWFpblByb2R1Y3RJbWdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0SW1nJyk7XG52YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbnZhciB0aHVtYkFjdGl2ZUltZ01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRodW1iLWltZy1tb2RhbCcpO1xudmFyIGJ0blByZXZpb3VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tcHJldmlvdXMnKTtcbnZhciBidG5OZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tbmV4dCcpO1xudmFyIGJ0blByZXZpb3VzTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tcHJldmlvdXMtbW9iJyk7XG52YXIgYnRuTmV4dE1vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLW5leHQtbW9iJyk7XG52YXIgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbl9fY2xvc2UnKTtcbnZhciBsaWdodGJveE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG52YXIgY29udGFpbmVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX19tb2RhbCcpO1xudmFyIHRodW1iQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX3RodW1ibmFpbHMnKTtcbnZhciB0aHVtYkNvbnRhaW5lckltYWdlcyA9IHRodW1iQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDtcbi8qLS0tLS0tQnVyZ2VyIGFuZCBtb2JpbGUgbWVudS0tLS0tLSovXG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICBtZW51TGluay5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICB9KTtcbiAgbW9kYWxNb2IuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG59KTtcbmNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjb250YWluZXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnRhaW5lck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjaGFuZ2VNYWluSGFuZGxlcihlbGUsIGVsZUFycmF5LCBiZ0ZsYWcpIHtcbiAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcbiAgICBlbGVBcnJheVtfaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGh1bWIgPSAnY29udGFpbmVyX190aHVtYm5haWxzLWltZy0nICsgW19pICsgMV07XG4gICAgICB2YXIgdGh1bWJJbWcgPSB0aHVtYi5zbGljZSgtMSk7XG5cbiAgICAgIGlmIChiZ0ZsYWcpIHtcbiAgICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi4vZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIHRodW1iSW1nICsgJy5qcGcpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZS5zcmMgPSAnZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIHRodW1iSW1nICsgJy5qcGcnO1xuICAgICAgfVxuXG4gICAgICBlbGVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgZWxlQXJyYXlbX2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBlbGVBcnJheS5sZW5ndGg7IF9pKyspIHtcbiAgICBfbG9vcChfaSk7XG4gIH1cbn1cbi8qLS0tLS0tbGlnaHRib3ggYnRuIHByZXZpb3VzIGFuZCBuZXh0LS0tLS0tKi9cblxuXG52YXIgaSA9IDA7XG5idG5QcmV2aW91cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKGkgPD0gMCkgaSA9IHRodW1iQWN0aXZlSW1nTW9kYWwubGVuZ3RoO1xuICBpLS07XG4gIHRodW1iQWN0aXZlSW1nTW9kYWwuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gIH0pO1xuICB0aHVtYkFjdGl2ZUltZ01vZGFsW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICByZXR1cm4gc2V0SW1nKCk7XG59KTtcbmJ0bk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChpID49IHRodW1iQWN0aXZlSW1nTW9kYWwubGVuZ3RoIC0gMSkgaSA9IC0xO1xuICBpKys7XG4gIHRodW1iQWN0aXZlSW1nTW9kYWwuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gIH0pO1xuICB0aHVtYkFjdGl2ZUltZ01vZGFsW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICByZXR1cm4gc2V0SW1nKCk7XG59KTtcbi8qLS0tLS0tIGJ0biBwcmV2aW91cywgYnRuIG5leHQgbW9iLS0tLS0tKi9cblxuYnRuUHJldmlvdXNNb2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBjdXJyZW50QWN0aXZlQXR0ciA9IGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUuZGF0YXNldC5hY3RpdmU7XG4gIHZhciBnZXRJbWdJbmRleCA9IGN1cnJlbnRBY3RpdmVBdHRyO1xuXG4gIGlmIChnZXRJbWdJbmRleCA8PSAxKSB7XG4gICAgZ2V0SW1nSW5kZXggPSA0O1xuICB9IGVsc2Uge1xuICAgIGdldEltZ0luZGV4LS07XG4gIH1cblxuICBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLnNyYyA9ICd1cmwoLi4vYXNzZXRzL2ltYWdlcy9pbWFnZS1wcm9kdWN0LScgKyBnZXRJbWdJbmRleCArICcuanBnKSc7XG4gIGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUuc2V0QXR0cmlidXRlKFwiZGF0YS1hY3RpdmVcIiwgZ2V0SW1nSW5kZXgpO1xufSk7XG5idG5OZXh0TW9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YXIgY3VycmVudEFjdGl2ZUF0dHIgPSBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLmRhdGFzZXQuYWN0aXZlO1xuICB2YXIgZ2V0SW1nSW5kZXggPSBjdXJyZW50QWN0aXZlQXR0cjtcblxuICBpZiAoZ2V0SW1nSW5kZXggPj0gNCkge1xuICAgIGdldEltZ0luZGV4ID0gMTtcbiAgfSBlbHNlIHtcbiAgICBnZXRJbWdJbmRleCsrO1xuICB9XG5cbiAgY29udGFpbmVyUHJvZHVjdEltZ0FjdGl2ZS5zcmMgPSAndXJsKC4uL2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0nICsgZ2V0SW1nSW5kZXggKyAnLmpwZyknO1xuICBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLnNldEF0dHJpYnV0ZShcImRhdGEtYWN0aXZlXCIsIGdldEltZ0luZGV4KTtcbn0pO1xuYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnRhaW5lck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGxpZ2h0Ym94TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xubGlnaHRib3hNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgY29udGFpbmVyTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbGlnaHRib3hNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbmZ1bmN0aW9uIHNldEltZygpIHtcbiAgdmFyIHNldEJ0bkFjdGl2ZSA9ICdjb250YWluZXJfX3RodW1ibmFpbHMtaW1nLScgKyBbaSArIDFdO1xuICB2YXIgc2V0QnRuSW1nID0gc2V0QnRuQWN0aXZlLnNsaWNlKC0xKTtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0SW1nJykuc3JjID0gJ2Rpc3QvYXNzZXRzL2ltYWdlcy9pbWFnZS1wcm9kdWN0LScgKyBzZXRCdG5JbWcgKyAnLmpwZyc7XG59XG5cbigwLCBfY2FydC5hZGRUb0NhcnQpKCk7XG4oMCwgX2NhcnQuZGVsZXRlRnJvbUNhcnQpKCk7XG4oMCwgX2NhcnQuZW1wdHlDYXJ0KSgpO1xuKDAsIF9jYXJ0LmJ0blBsdXNNaW51cykoKTtcbmNoYW5nZU1haW5IYW5kbGVyKGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUsIHRodW1iQWN0aXZlLCB0cnVlKTtcbmNoYW5nZU1haW5IYW5kbGVyKG1haW5Qcm9kdWN0SW1nTW9kYWwsIHRodW1iQWN0aXZlSW1nTW9kYWwpO1xuXG59LHtcIi4vY29tcG9uZW50cy9jYXJ0XCI6Mn1dLDI6W2Z1bmN0aW9uKHJlcXVpcmUsbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmVtcHR5Q2FydCA9IGV4cG9ydHMuZGVsZXRlRnJvbUNhcnQgPSBleHBvcnRzLmJ0blBsdXNNaW51cyA9IGV4cG9ydHMuYWRkVG9DYXJ0ID0gdm9pZCAwO1xudmFyIGNhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydCcpO1xudmFyIGNhcnRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19tb2RhbCcpO1xudmFyIGNhcnRNb2RhbEVtcHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX21vZGFsLWVtcHR5Jyk7XG52YXIgY2FydE1vZGFsUHJvZHVjdFF1YW50aXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX21vZGFsLXByb2R1Y3QtcHJpY2UtLWlucHV0LWFtb3VudCcpO1xudmFyIGNhcnRQcm9kdWN0UHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1wcm9kdWN0LXByaWNlJyk7XG52YXIgY2FydFByb2R1Y3RRdWFudGl0eVByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX21vZGFsLXByb2R1Y3QtcHJpY2UtcXVhbnRpdHktLXByaWNlJyk7XG52YXIgY2FydE9yZGVyQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX29yZGVyLWJveCcpO1xudmFyIGNhcnRPcmRlck51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19vcmRlci1udW1iZXInKTtcbnZhciBkZWxldGVQcm9kdWN0UXVhbnRpdHlCaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbW9kYWwtcHJvZHVjdC1iaW4nKTtcbnZhciBidG5BZGRUb0NhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19hZGQtdG8tY2FydCcpO1xudmFyIGlucHV0QW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9faW5wdXQtYW1vdW50Jyk7XG52YXIgYnRuTWludXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19taW51cycpO1xudmFyIGJ0blBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19wbHVzJyk7XG4vKi0tLS0tLUFkZCB0byBjYXJ0LS0tLS0tKi9cblxudmFyIGFkZFRvQ2FydCA9IGZ1bmN0aW9uIGFkZFRvQ2FydCgpIHtcbiAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgYnRuQWRkVG9DYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChpbnB1dEFtb3VudC5pbm5lckhUTUwgPiAwKSB7XG4gICAgICBjYXJ0T3JkZXJOdW1iZXIuaW5uZXJIVE1MID0gaW5wdXRBbW91bnQuaW5uZXJIVE1MO1xuICAgICAgY2FydE9yZGVyQm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgY2FydE1vZGFsUHJvZHVjdFF1YW50aXR5LmlubmVySFRNTCA9IGlucHV0QW1vdW50LmlubmVySFRNTDtcbiAgICAgIGNhcnRQcm9kdWN0UXVhbnRpdHlQcmljZS5pbm5lckhUTUwgPSAoY2FydFByb2R1Y3RQcmljZS5pbm5lckhUTUwgKiBpbnB1dEFtb3VudC5pbm5lckhUTUwpLnRvRml4ZWQoMik7XG4gICAgICBjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG59O1xuLyotLS0tLS1EZWxldGUgZnJvbSBjYXJ0LS0tLS0tKi9cblxuXG5leHBvcnRzLmFkZFRvQ2FydCA9IGFkZFRvQ2FydDtcblxudmFyIGRlbGV0ZUZyb21DYXJ0ID0gZnVuY3Rpb24gZGVsZXRlRnJvbUNhcnQoKSB7XG4gIGRlbGV0ZVByb2R1Y3RRdWFudGl0eUJpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjYXJ0TW9kYWxQcm9kdWN0UXVhbnRpdHkuaW5uZXJIVE1MIC09IDE7XG4gICAgY2FydE9yZGVyTnVtYmVyLmlubmVySFRNTCAtPSAxO1xuICAgIGlucHV0QW1vdW50LmlubmVySFRNTCAtPSAxO1xuXG4gICAgaWYgKGNhcnRNb2RhbFByb2R1Y3RRdWFudGl0eS5pbm5lckhUTUwgPD0gMCB8fCBjYXJ0T3JkZXJOdW1iZXIuaW5uZXJIVE1MIDw9IDApIHtcbiAgICAgIGNhcnRNb2RhbFByb2R1Y3RRdWFudGl0eS5pbm5lckhUTUwgPSAwO1xuICAgICAgY2FydE9yZGVyTnVtYmVyLmlubmVySFRNTCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIHF1YW50aXR5TnVtID0gcGFyc2VJbnQoY2FydFByb2R1Y3RRdWFudGl0eVByaWNlLmlubmVySFRNTCk7XG4gICAgdmFyIHByb2R1Y3RQcmljZSA9IHBhcnNlSW50KGNhcnRQcm9kdWN0UHJpY2UuaW5uZXJIVE1MKTtcbiAgICBjYXJ0UHJvZHVjdFF1YW50aXR5UHJpY2UuaW5uZXJIVE1MID0gKHF1YW50aXR5TnVtIC0gcHJvZHVjdFByaWNlKS50b0ZpeGVkKDIpO1xuXG4gICAgaWYgKGNhcnRQcm9kdWN0UXVhbnRpdHlQcmljZS5pbm5lckhUTUwgPD0gMCkge1xuICAgICAgY2FydFByb2R1Y3RRdWFudGl0eVByaWNlLmlubmVySFRNTCA9IDA7XG4gICAgICBjYXJ0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGNhcnRNb2RhbEVtcHR5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBjYXJ0T3JkZXJCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xufTtcbi8qLS0tLS0tRW1wdHkgY2FydC0tLS0tLSovXG5cblxuZXhwb3J0cy5kZWxldGVGcm9tQ2FydCA9IGRlbGV0ZUZyb21DYXJ0O1xuXG52YXIgZW1wdHlDYXJ0ID0gZnVuY3Rpb24gZW1wdHlDYXJ0KCkge1xuICBjYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIGNhcnRNb2RhbEVtcHR5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGlmIChpbnB1dEFtb3VudC5pbm5lckhUTUwgPiAwKSB7XG4gICAgICBjYXJ0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG59O1xuLyotLS0tLS1idG4gcGx1cyBhbmQgbWludXMtLS0tLS0qL1xuXG5cbmV4cG9ydHMuZW1wdHlDYXJ0ID0gZW1wdHlDYXJ0O1xuXG52YXIgYnRuUGx1c01pbnVzID0gZnVuY3Rpb24gYnRuUGx1c01pbnVzKCkge1xuICB2YXIgYXBwcCA9IHtcbiAgICBjdXJyZW50VmFsdWU6IDBcbiAgfTtcbiAgaW5wdXRBbW91bnQuaW5uZXJIVE1MID0gZm9ybWF0TnVtYmVyKDApO1xuICBidG5QbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjdXJyZW50QW1vdW50ID0gZm9ybWF0TnVtYmVyKGFwcHAuY3VycmVudFZhbHVlICs9IDEpO1xuICAgIGlucHV0QW1vdW50LmlubmVySFRNTCA9IGN1cnJlbnRBbW91bnQ7XG4gIH0pO1xuICBidG5NaW51cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3VycmVudEFtb3VudCA9IDA7XG5cbiAgICBpZiAoYXBwcC5jdXJyZW50VmFsdWUgPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50QW1vdW50ID0gZm9ybWF0TnVtYmVyKGFwcHAuY3VycmVudFZhbHVlIC09IDEpO1xuICAgICAgaW5wdXRBbW91bnQuaW5uZXJIVE1MID0gY3VycmVudEFtb3VudDtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0cy5idG5QbHVzTWludXMgPSBidG5QbHVzTWludXM7XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW0pIHtcbiAgcmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygnZW4tVVMnKTtcbn1cblxuO1xuXG59LHt9XX0se30sWzFdKTtcbiJdLCJmaWxlIjoiYXBwLmpzIn0=
