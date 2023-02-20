(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _cart = require("./components/cart");

var _popup = _interopRequireDefault(require("./components/popup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
var container = document.querySelector('.container');
var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
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
  container.classList.add('is-active');

  if (window.innerWidth < 768) {
    modal.style.display = 'none';
    containerModal.style.display = 'none';
    container.classList.remove('is-active');
  }
});

function changeMainHandler(ele, eleArray, bgFlag) {
  var _loop = function _loop(_i) {
    eleArray[_i].addEventListener('click', function () {
      var thumb = 'container__thumbnails-img-' + [_i + 1];
      var thumbImg = thumb.slice(-1);

      if (bgFlag) {
        ele.style.backgroundImage = 'url(' + baseUrl + '/dist/assets/images/image-product-' + thumbImg + '.jpg)';
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

  containerProductImgActive.style.backgroundImage = 'url(' + baseUrl + '/dist/assets/images/image-product-' + getImgIndex + '.jpg)';
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

  containerProductImgActive.style.backgroundImage = 'url(' + baseUrl + '/dist/assets/images/image-product-' + getImgIndex + '.jpg)';
  containerProductImgActive.setAttribute("data-active", getImgIndex);
});
btnClose.addEventListener('click', function () {
  containerModal.style.display = 'none';
  lightboxModal.style.display = 'none';
  container.classList.remove('is-active');
});
lightboxModal.addEventListener('click', function () {
  containerModal.style.display = 'none';
  lightboxModal.style.display = 'none';
  container.classList.remove('is-active');
});

function setImg() {
  var setBtnActive = 'container__thumbnails-img-' + [i + 1];
  var setBtnImg = setBtnActive.slice(-1);
  return document.querySelector('.productImg').src = 'dist/assets/images/image-product-' + setBtnImg + '.jpg';
}

var popupTriggerEle = document.querySelector('.js-popup-trigger');
(0, _cart.addToCart)();
(0, _cart.deleteFromCart)();
(0, _cart.btnPlusMinus)();
(0, _popup["default"])(popupTriggerEle);
changeMainHandler(containerProductImgActive, thumbActive, true);
changeMainHandler(mainProductImgModal, thumbActiveImgModal);

},{"./components/cart":2,"./components/popup":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteFromCart = exports.btnPlusMinus = exports.addToCart = void 0;

var _popup = _interopRequireDefault(require("./popup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cartValue = document.querySelector('.popup__product-value');
var cartAmount = document.querySelector('.popup__product-amount');
var cartProductTotal = document.querySelector('.popup__product-total');
var cartOrderBox = document.querySelector('.cart__order-box');
var cartOrderNumber = document.querySelector('.cart__order-number');
var cartBin = document.querySelector('.popup__bin');
var btnAddToCart = document.querySelector('.btn__add-to-cart');
var inputAmount = document.querySelector('.container__input-amount');
var btnMinus = document.querySelector('.btn__minus');
var btnPlus = document.querySelector('.btn__plus');
var cartSlicedValue = cartValue.innerHTML.slice(1, cartValue.lenght);
var cartEmptyContent = document.querySelector('.popup__empty-content');
var cartFullContent = document.querySelector('.popup__full-content');
var overlay = document.querySelector('.overlay');
var overlayPopup = document.querySelector('.popup');
var productCurrentValue = {
  currentValue: 0
};
/*------Add to cart------*/

var addToCart = function addToCart() {
  btnAddToCart.addEventListener('click', function () {
    if (inputAmount.innerHTML > 0) {
      cartOrderNumber.innerHTML = inputAmount.innerHTML;
      cartOrderBox.style.display = 'block';
      cartAmount.innerHTML = 'x' + inputAmount.innerHTML;
      cartProductTotal.innerHTML = '$' + (inputAmount.innerHTML * cartSlicedValue).toFixed(2);
      cartFullContent.style.display = 'block';
      cartEmptyContent.style.display = 'none';
      productCurrentValue = {
        currentValue: 0
      };
    }
  });
};
/*------Delete from cart------*/


exports.addToCart = addToCart;

var deleteFromCart = function deleteFromCart() {
  cartBin.addEventListener('click', function () {
    var strippedValue = cartAmount.innerHTML.slice(1, cartAmount.length);
    cartAmount.innerHTML = 'x' + (strippedValue - 1);
    cartOrderNumber.innerHTML -= 1;
    inputAmount.innerHTML -= 1;

    if (cartAmount.innerHTML <= 0 || cartOrderNumber.innerHTML <= 0) {
      cartAmount.innerHTML = 0;
      cartOrderNumber.innerHTML = 0;
    }

    var strippedValueQuantityNum = cartProductTotal.innerHTML.slice(1, cartProductTotal.length);
    var quantityNum = parseInt(strippedValueQuantityNum);
    cartProductTotal.innerHTML = '$' + (quantityNum - cartSlicedValue).toFixed(2);

    if (cartAmount.innerHTML == 0) {
      inputAmount.innerHTML = 0;
      cartFullContent.style.display = 'none';
      cartEmptyContent.style.display = 'block';
    }
  });
};
/*------btn plus and minus------*/


exports.deleteFromCart = deleteFromCart;

var btnPlusMinus = function btnPlusMinus() {
  inputAmount.innerHTML = formatNumber(0);
  btnPlus.addEventListener('click', function () {
    var currentAmount = formatNumber(productCurrentValue.currentValue += 1);
    inputAmount.innerHTML = currentAmount;
  });
  btnMinus.addEventListener('click', function () {
    var currentAmount = 0;

    if (productCurrentValue.currentValue <= 0) {
      return;
    } else {
      currentAmount = formatNumber(productCurrentValue.currentValue -= 1);
      inputAmount.innerHTML = currentAmount;
    }
  });
};

exports.btnPlusMinus = btnPlusMinus;
overlay.addEventListener('click', function () {
  overlayPopup.classList.remove('is-active');
});

function formatNumber(num) {
  return num.toLocaleString('en-US');
}

;

},{"./popup":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var popup = function popup(trigger, action) {
  trigger.addEventListener('click', function () {
    var popup = document.querySelector('.popup');

    if (popup.classList.contains('is-active')) {
      popup.classList.remove('is-active');
    } else {
      popup.classList.add('is-active');
    }
  });
};

var _default = popup;
exports["default"] = _default;

},{}]},{},[1]);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9jYXJ0ID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9jYXJ0XCIpO1xuXG52YXIgX3BvcHVwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3BvcHVwXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX2J1cmdlcicpO1xudmFyIG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fbWVudScpO1xudmFyIG1lbnVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19tZW51LWl0ZW0nKTtcbnZhciBtZW51TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW5hdl9fbWVudS1saW5rJyk7XG52YXIgbW9kYWxNb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX21vYicpO1xudmFyIHRodW1iQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRodW1iLWltZycpO1xudmFyIGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1pbWcnKTtcbnZhciBtYWluUHJvZHVjdEltZ01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RJbWcnKTtcbnZhciBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xudmFyIHRodW1iQWN0aXZlSW1nTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGh1bWItaW1nLW1vZGFsJyk7XG52YXIgYnRuUHJldmlvdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1wcmV2aW91cycpO1xudmFyIGJ0bk5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1uZXh0Jyk7XG52YXIgYnRuUHJldmlvdXNNb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1wcmV2aW91cy1tb2InKTtcbnZhciBidG5OZXh0TW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tbmV4dC1tb2InKTtcbnZhciBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uX19jbG9zZScpO1xudmFyIGxpZ2h0Ym94TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbnZhciBjb250YWluZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX21vZGFsJyk7XG52YXIgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xudmFyIGdldFVybCA9IHdpbmRvdy5sb2NhdGlvbjtcbnZhciBiYXNlVXJsID0gZ2V0VXJsLnByb3RvY29sICsgXCIvL1wiICsgZ2V0VXJsLmhvc3QgKyBcIi9cIiArIGdldFVybC5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xuLyotLS0tLS1CdXJnZXIgYW5kIG1vYmlsZSBtZW51LS0tLS0tKi9cblxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgbWVudUl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIG1lbnVMaW5rLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIH0pO1xuICBtb2RhbE1vYi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbn0pO1xuY29udGFpbmVyUHJvZHVjdEltZ0FjdGl2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNvbnRhaW5lck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG5cbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgNzY4KSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBjb250YWluZXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNoYW5nZU1haW5IYW5kbGVyKGVsZSwgZWxlQXJyYXksIGJnRmxhZykge1xuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgIGVsZUFycmF5W19pXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aHVtYiA9ICdjb250YWluZXJfX3RodW1ibmFpbHMtaW1nLScgKyBbX2kgKyAxXTtcbiAgICAgIHZhciB0aHVtYkltZyA9IHRodW1iLnNsaWNlKC0xKTtcblxuICAgICAgaWYgKGJnRmxhZykge1xuICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgYmFzZVVybCArICcvZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIHRodW1iSW1nICsgJy5qcGcpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZS5zcmMgPSAnZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIHRodW1iSW1nICsgJy5qcGcnO1xuICAgICAgfVxuXG4gICAgICBlbGVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgZWxlQXJyYXlbX2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBlbGVBcnJheS5sZW5ndGg7IF9pKyspIHtcbiAgICBfbG9vcChfaSk7XG4gIH1cbn1cbi8qLS0tLS0tbGlnaHRib3ggYnRuIHByZXZpb3VzIGFuZCBuZXh0LS0tLS0tKi9cblxuXG52YXIgaSA9IDA7XG5idG5QcmV2aW91cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKGkgPD0gMCkgaSA9IHRodW1iQWN0aXZlSW1nTW9kYWwubGVuZ3RoO1xuICBpLS07XG4gIHRodW1iQWN0aXZlSW1nTW9kYWwuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gIH0pO1xuICB0aHVtYkFjdGl2ZUltZ01vZGFsW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICByZXR1cm4gc2V0SW1nKCk7XG59KTtcbmJ0bk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChpID49IHRodW1iQWN0aXZlSW1nTW9kYWwubGVuZ3RoIC0gMSkgaSA9IC0xO1xuICBpKys7XG4gIHRodW1iQWN0aXZlSW1nTW9kYWwuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gIH0pO1xuICB0aHVtYkFjdGl2ZUltZ01vZGFsW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICByZXR1cm4gc2V0SW1nKCk7XG59KTtcbi8qLS0tLS0tIGJ0biBwcmV2aW91cywgYnRuIG5leHQgbW9iLS0tLS0tKi9cblxuYnRuUHJldmlvdXNNb2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBjdXJyZW50QWN0aXZlQXR0ciA9IGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUuZGF0YXNldC5hY3RpdmU7XG4gIHZhciBnZXRJbWdJbmRleCA9IGN1cnJlbnRBY3RpdmVBdHRyO1xuXG4gIGlmIChnZXRJbWdJbmRleCA8PSAxKSB7XG4gICAgZ2V0SW1nSW5kZXggPSA0O1xuICB9IGVsc2Uge1xuICAgIGdldEltZ0luZGV4LS07XG4gIH1cblxuICBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGJhc2VVcmwgKyAnL2Rpc3QvYXNzZXRzL2ltYWdlcy9pbWFnZS1wcm9kdWN0LScgKyBnZXRJbWdJbmRleCArICcuanBnKSc7XG4gIGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUuc2V0QXR0cmlidXRlKFwiZGF0YS1hY3RpdmVcIiwgZ2V0SW1nSW5kZXgpO1xufSk7XG5idG5OZXh0TW9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YXIgY3VycmVudEFjdGl2ZUF0dHIgPSBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLmRhdGFzZXQuYWN0aXZlO1xuICB2YXIgZ2V0SW1nSW5kZXggPSBjdXJyZW50QWN0aXZlQXR0cjtcblxuICBpZiAoZ2V0SW1nSW5kZXggPj0gNCkge1xuICAgIGdldEltZ0luZGV4ID0gMTtcbiAgfSBlbHNlIHtcbiAgICBnZXRJbWdJbmRleCsrO1xuICB9XG5cbiAgY29udGFpbmVyUHJvZHVjdEltZ0FjdGl2ZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBiYXNlVXJsICsgJy9kaXN0L2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0nICsgZ2V0SW1nSW5kZXggKyAnLmpwZyknO1xuICBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLnNldEF0dHJpYnV0ZShcImRhdGEtYWN0aXZlXCIsIGdldEltZ0luZGV4KTtcbn0pO1xuYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnRhaW5lck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGxpZ2h0Ym94TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xufSk7XG5saWdodGJveE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBjb250YWluZXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBsaWdodGJveE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbn0pO1xuXG5mdW5jdGlvbiBzZXRJbWcoKSB7XG4gIHZhciBzZXRCdG5BY3RpdmUgPSAnY29udGFpbmVyX190aHVtYm5haWxzLWltZy0nICsgW2kgKyAxXTtcbiAgdmFyIHNldEJ0bkltZyA9IHNldEJ0bkFjdGl2ZS5zbGljZSgtMSk7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdEltZycpLnNyYyA9ICdkaXN0L2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0nICsgc2V0QnRuSW1nICsgJy5qcGcnO1xufVxuXG52YXIgcG9wdXBUcmlnZ2VyRWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXBvcHVwLXRyaWdnZXInKTtcbigwLCBfY2FydC5hZGRUb0NhcnQpKCk7XG4oMCwgX2NhcnQuZGVsZXRlRnJvbUNhcnQpKCk7XG4oMCwgX2NhcnQuYnRuUGx1c01pbnVzKSgpO1xuKDAsIF9wb3B1cFtcImRlZmF1bHRcIl0pKHBvcHVwVHJpZ2dlckVsZSk7XG5jaGFuZ2VNYWluSGFuZGxlcihjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLCB0aHVtYkFjdGl2ZSwgdHJ1ZSk7XG5jaGFuZ2VNYWluSGFuZGxlcihtYWluUHJvZHVjdEltZ01vZGFsLCB0aHVtYkFjdGl2ZUltZ01vZGFsKTtcblxufSx7XCIuL2NvbXBvbmVudHMvY2FydFwiOjIsXCIuL2NvbXBvbmVudHMvcG9wdXBcIjozfV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVsZXRlRnJvbUNhcnQgPSBleHBvcnRzLmJ0blBsdXNNaW51cyA9IGV4cG9ydHMuYWRkVG9DYXJ0ID0gdm9pZCAwO1xuXG52YXIgX3BvcHVwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wb3B1cFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgY2FydFZhbHVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19wcm9kdWN0LXZhbHVlJyk7XG52YXIgY2FydEFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fcHJvZHVjdC1hbW91bnQnKTtcbnZhciBjYXJ0UHJvZHVjdFRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19wcm9kdWN0LXRvdGFsJyk7XG52YXIgY2FydE9yZGVyQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX29yZGVyLWJveCcpO1xudmFyIGNhcnRPcmRlck51bWJlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19vcmRlci1udW1iZXInKTtcbnZhciBjYXJ0QmluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19iaW4nKTtcbnZhciBidG5BZGRUb0NhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19hZGQtdG8tY2FydCcpO1xudmFyIGlucHV0QW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcl9faW5wdXQtYW1vdW50Jyk7XG52YXIgYnRuTWludXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19taW51cycpO1xudmFyIGJ0blBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuX19wbHVzJyk7XG52YXIgY2FydFNsaWNlZFZhbHVlID0gY2FydFZhbHVlLmlubmVySFRNTC5zbGljZSgxLCBjYXJ0VmFsdWUubGVuZ2h0KTtcbnZhciBjYXJ0RW1wdHlDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19lbXB0eS1jb250ZW50Jyk7XG52YXIgY2FydEZ1bGxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mdWxsLWNvbnRlbnQnKTtcbnZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJsYXknKTtcbnZhciBvdmVybGF5UG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcbnZhciBwcm9kdWN0Q3VycmVudFZhbHVlID0ge1xuICBjdXJyZW50VmFsdWU6IDBcbn07XG4vKi0tLS0tLUFkZCB0byBjYXJ0LS0tLS0tKi9cblxudmFyIGFkZFRvQ2FydCA9IGZ1bmN0aW9uIGFkZFRvQ2FydCgpIHtcbiAgYnRuQWRkVG9DYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChpbnB1dEFtb3VudC5pbm5lckhUTUwgPiAwKSB7XG4gICAgICBjYXJ0T3JkZXJOdW1iZXIuaW5uZXJIVE1MID0gaW5wdXRBbW91bnQuaW5uZXJIVE1MO1xuICAgICAgY2FydE9yZGVyQm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgY2FydEFtb3VudC5pbm5lckhUTUwgPSAneCcgKyBpbnB1dEFtb3VudC5pbm5lckhUTUw7XG4gICAgICBjYXJ0UHJvZHVjdFRvdGFsLmlubmVySFRNTCA9ICckJyArIChpbnB1dEFtb3VudC5pbm5lckhUTUwgKiBjYXJ0U2xpY2VkVmFsdWUpLnRvRml4ZWQoMik7XG4gICAgICBjYXJ0RnVsbENvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBjYXJ0RW1wdHlDb250ZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBwcm9kdWN0Q3VycmVudFZhbHVlID0ge1xuICAgICAgICBjdXJyZW50VmFsdWU6IDBcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbn07XG4vKi0tLS0tLURlbGV0ZSBmcm9tIGNhcnQtLS0tLS0qL1xuXG5cbmV4cG9ydHMuYWRkVG9DYXJ0ID0gYWRkVG9DYXJ0O1xuXG52YXIgZGVsZXRlRnJvbUNhcnQgPSBmdW5jdGlvbiBkZWxldGVGcm9tQ2FydCgpIHtcbiAgY2FydEJpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3RyaXBwZWRWYWx1ZSA9IGNhcnRBbW91bnQuaW5uZXJIVE1MLnNsaWNlKDEsIGNhcnRBbW91bnQubGVuZ3RoKTtcbiAgICBjYXJ0QW1vdW50LmlubmVySFRNTCA9ICd4JyArIChzdHJpcHBlZFZhbHVlIC0gMSk7XG4gICAgY2FydE9yZGVyTnVtYmVyLmlubmVySFRNTCAtPSAxO1xuICAgIGlucHV0QW1vdW50LmlubmVySFRNTCAtPSAxO1xuXG4gICAgaWYgKGNhcnRBbW91bnQuaW5uZXJIVE1MIDw9IDAgfHwgY2FydE9yZGVyTnVtYmVyLmlubmVySFRNTCA8PSAwKSB7XG4gICAgICBjYXJ0QW1vdW50LmlubmVySFRNTCA9IDA7XG4gICAgICBjYXJ0T3JkZXJOdW1iZXIuaW5uZXJIVE1MID0gMDtcbiAgICB9XG5cbiAgICB2YXIgc3RyaXBwZWRWYWx1ZVF1YW50aXR5TnVtID0gY2FydFByb2R1Y3RUb3RhbC5pbm5lckhUTUwuc2xpY2UoMSwgY2FydFByb2R1Y3RUb3RhbC5sZW5ndGgpO1xuICAgIHZhciBxdWFudGl0eU51bSA9IHBhcnNlSW50KHN0cmlwcGVkVmFsdWVRdWFudGl0eU51bSk7XG4gICAgY2FydFByb2R1Y3RUb3RhbC5pbm5lckhUTUwgPSAnJCcgKyAocXVhbnRpdHlOdW0gLSBjYXJ0U2xpY2VkVmFsdWUpLnRvRml4ZWQoMik7XG5cbiAgICBpZiAoY2FydEFtb3VudC5pbm5lckhUTUwgPT0gMCkge1xuICAgICAgaW5wdXRBbW91bnQuaW5uZXJIVE1MID0gMDtcbiAgICAgIGNhcnRGdWxsQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgY2FydEVtcHR5Q29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG4gIH0pO1xufTtcbi8qLS0tLS0tYnRuIHBsdXMgYW5kIG1pbnVzLS0tLS0tKi9cblxuXG5leHBvcnRzLmRlbGV0ZUZyb21DYXJ0ID0gZGVsZXRlRnJvbUNhcnQ7XG5cbnZhciBidG5QbHVzTWludXMgPSBmdW5jdGlvbiBidG5QbHVzTWludXMoKSB7XG4gIGlucHV0QW1vdW50LmlubmVySFRNTCA9IGZvcm1hdE51bWJlcigwKTtcbiAgYnRuUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3VycmVudEFtb3VudCA9IGZvcm1hdE51bWJlcihwcm9kdWN0Q3VycmVudFZhbHVlLmN1cnJlbnRWYWx1ZSArPSAxKTtcbiAgICBpbnB1dEFtb3VudC5pbm5lckhUTUwgPSBjdXJyZW50QW1vdW50O1xuICB9KTtcbiAgYnRuTWludXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGN1cnJlbnRBbW91bnQgPSAwO1xuXG4gICAgaWYgKHByb2R1Y3RDdXJyZW50VmFsdWUuY3VycmVudFZhbHVlIDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudEFtb3VudCA9IGZvcm1hdE51bWJlcihwcm9kdWN0Q3VycmVudFZhbHVlLmN1cnJlbnRWYWx1ZSAtPSAxKTtcbiAgICAgIGlucHV0QW1vdW50LmlubmVySFRNTCA9IGN1cnJlbnRBbW91bnQ7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydHMuYnRuUGx1c01pbnVzID0gYnRuUGx1c01pbnVzO1xub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgb3ZlcmxheVBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xufSk7XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW0pIHtcbiAgcmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygnZW4tVVMnKTtcbn1cblxuO1xuXG59LHtcIi4vcG9wdXBcIjozfV0sMzpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgcG9wdXAgPSBmdW5jdGlvbiBwb3B1cCh0cmlnZ2VyLCBhY3Rpb24pIHtcbiAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAnKTtcblxuICAgIGlmIChwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbnZhciBfZGVmYXVsdCA9IHBvcHVwO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxufSx7fV19LHt9LFsxXSk7XG4iXSwiZmlsZSI6ImFwcC5qcyJ9
