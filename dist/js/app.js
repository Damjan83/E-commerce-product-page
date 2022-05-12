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
var thumbContainer = document.querySelector('.product__thumbnails');
var thumbContainerImages = thumbContainer.children.length;
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
    console.log();

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9jYXJ0ID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9jYXJ0XCIpO1xuXG52YXIgX3BvcHVwID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9jb21wb25lbnRzL3BvcHVwXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX2J1cmdlcicpO1xudmFyIG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fbWVudScpO1xudmFyIG1lbnVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19tZW51LWl0ZW0nKTtcbnZhciBtZW51TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW5hdl9fbWVudS1saW5rJyk7XG52YXIgbW9kYWxNb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX21vYicpO1xudmFyIHRodW1iQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRodW1iLWltZycpO1xudmFyIGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1pbWcnKTtcbnZhciBtYWluUHJvZHVjdEltZ01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RJbWcnKTtcbnZhciBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xudmFyIHRodW1iQWN0aXZlSW1nTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGh1bWItaW1nLW1vZGFsJyk7XG52YXIgYnRuUHJldmlvdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1wcmV2aW91cycpO1xudmFyIGJ0bk5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1uZXh0Jyk7XG52YXIgYnRuUHJldmlvdXNNb2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1wcmV2aW91cy1tb2InKTtcbnZhciBidG5OZXh0TW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tbmV4dC1tb2InKTtcbnZhciBidG5DbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pY29uX19jbG9zZScpO1xudmFyIGxpZ2h0Ym94TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbnZhciBjb250YWluZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX21vZGFsJyk7XG52YXIgdGh1bWJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdF9fdGh1bWJuYWlscycpO1xudmFyIHRodW1iQ29udGFpbmVySW1hZ2VzID0gdGh1bWJDb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoO1xudmFyIGdldFVybCA9IHdpbmRvdy5sb2NhdGlvbjtcbnZhciBiYXNlVXJsID0gZ2V0VXJsLnByb3RvY29sICsgXCIvL1wiICsgZ2V0VXJsLmhvc3QgKyBcIi9cIiArIGdldFVybC5wYXRobmFtZS5zcGxpdCgnLycpWzFdO1xuLyotLS0tLS1CdXJnZXIgYW5kIG1vYmlsZSBtZW51LS0tLS0tKi9cblxuYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIGJ1cmdlci5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbiAgbWVudUl0ZW0uY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIG1lbnVMaW5rLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIH0pO1xuICBtb2RhbE1vYi5jbGFzc0xpc3QudG9nZ2xlKCdpcy1hY3RpdmUnKTtcbn0pO1xuY29udGFpbmVyUHJvZHVjdEltZ0FjdGl2ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIGNvbnRhaW5lck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8IDc2OCkge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgY29udGFpbmVyTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNoYW5nZU1haW5IYW5kbGVyKGVsZSwgZWxlQXJyYXksIGJnRmxhZykge1xuICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChfaSkge1xuICAgIGVsZUFycmF5W19pXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0aHVtYiA9ICdjb250YWluZXJfX3RodW1ibmFpbHMtaW1nLScgKyBbX2kgKyAxXTtcbiAgICAgIHZhciB0aHVtYkltZyA9IHRodW1iLnNsaWNlKC0xKTtcblxuICAgICAgaWYgKGJnRmxhZykge1xuICAgICAgICBlbGUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgYmFzZVVybCArICcvZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIHRodW1iSW1nICsgJy5qcGcpJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZS5zcmMgPSAnZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIHRodW1iSW1nICsgJy5qcGcnO1xuICAgICAgfVxuXG4gICAgICBlbGVBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgZWxlQXJyYXlbX2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIF9pID0gMDsgX2kgPCBlbGVBcnJheS5sZW5ndGg7IF9pKyspIHtcbiAgICBfbG9vcChfaSk7XG4gIH1cbn1cbi8qLS0tLS0tbGlnaHRib3ggYnRuIHByZXZpb3VzIGFuZCBuZXh0LS0tLS0tKi9cblxuXG52YXIgaSA9IDA7XG5idG5QcmV2aW91cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgaWYgKGkgPD0gMCkgaSA9IHRodW1iQWN0aXZlSW1nTW9kYWwubGVuZ3RoO1xuICBpLS07XG4gIHRodW1iQWN0aXZlSW1nTW9kYWwuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gIH0pO1xuICB0aHVtYkFjdGl2ZUltZ01vZGFsW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICByZXR1cm4gc2V0SW1nKCk7XG59KTtcbmJ0bk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChpID49IHRodW1iQWN0aXZlSW1nTW9kYWwubGVuZ3RoIC0gMSkgaSA9IC0xO1xuICBpKys7XG4gIHRodW1iQWN0aXZlSW1nTW9kYWwuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gIH0pO1xuICB0aHVtYkFjdGl2ZUltZ01vZGFsW2ldLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICByZXR1cm4gc2V0SW1nKCk7XG59KTtcbi8qLS0tLS0tIGJ0biBwcmV2aW91cywgYnRuIG5leHQgbW9iLS0tLS0tKi9cblxuYnRuUHJldmlvdXNNb2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBjdXJyZW50QWN0aXZlQXR0ciA9IGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUuZGF0YXNldC5hY3RpdmU7XG4gIHZhciBnZXRJbWdJbmRleCA9IGN1cnJlbnRBY3RpdmVBdHRyO1xuXG4gIGlmIChnZXRJbWdJbmRleCA8PSAxKSB7XG4gICAgZ2V0SW1nSW5kZXggPSA0O1xuICB9IGVsc2Uge1xuICAgIGdldEltZ0luZGV4LS07XG4gIH1cblxuICBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGJhc2VVcmwgKyAnL2Rpc3QvYXNzZXRzL2ltYWdlcy9pbWFnZS1wcm9kdWN0LScgKyBnZXRJbWdJbmRleCArICcuanBnKSc7XG4gIGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUuc2V0QXR0cmlidXRlKFwiZGF0YS1hY3RpdmVcIiwgZ2V0SW1nSW5kZXgpO1xufSk7XG5idG5OZXh0TW9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YXIgY3VycmVudEFjdGl2ZUF0dHIgPSBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLmRhdGFzZXQuYWN0aXZlO1xuICB2YXIgZ2V0SW1nSW5kZXggPSBjdXJyZW50QWN0aXZlQXR0cjtcblxuICBpZiAoZ2V0SW1nSW5kZXggPj0gNCkge1xuICAgIGdldEltZ0luZGV4ID0gMTtcbiAgfSBlbHNlIHtcbiAgICBnZXRJbWdJbmRleCsrO1xuICB9XG5cbiAgY29udGFpbmVyUHJvZHVjdEltZ0FjdGl2ZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBiYXNlVXJsICsgJy9kaXN0L2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0nICsgZ2V0SW1nSW5kZXggKyAnLmpwZyknO1xuICBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLnNldEF0dHJpYnV0ZShcImRhdGEtYWN0aXZlXCIsIGdldEltZ0luZGV4KTtcbn0pO1xuYnRuQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnRhaW5lck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGxpZ2h0Ym94TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xubGlnaHRib3hNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgY29udGFpbmVyTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgbGlnaHRib3hNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbmZ1bmN0aW9uIHNldEltZygpIHtcbiAgdmFyIHNldEJ0bkFjdGl2ZSA9ICdjb250YWluZXJfX3RodW1ibmFpbHMtaW1nLScgKyBbaSArIDFdO1xuICB2YXIgc2V0QnRuSW1nID0gc2V0QnRuQWN0aXZlLnNsaWNlKC0xKTtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0SW1nJykuc3JjID0gJ2Rpc3QvYXNzZXRzL2ltYWdlcy9pbWFnZS1wcm9kdWN0LScgKyBzZXRCdG5JbWcgKyAnLmpwZyc7XG59XG5cbnZhciBwb3B1cFRyaWdnZXJFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcG9wdXAtdHJpZ2dlcicpO1xuKDAsIF9jYXJ0LmFkZFRvQ2FydCkoKTtcbigwLCBfY2FydC5kZWxldGVGcm9tQ2FydCkoKTtcbigwLCBfY2FydC5idG5QbHVzTWludXMpKCk7XG4oMCwgX3BvcHVwW1wiZGVmYXVsdFwiXSkocG9wdXBUcmlnZ2VyRWxlKTtcbmNoYW5nZU1haW5IYW5kbGVyKGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUsIHRodW1iQWN0aXZlLCB0cnVlKTtcbmNoYW5nZU1haW5IYW5kbGVyKG1haW5Qcm9kdWN0SW1nTW9kYWwsIHRodW1iQWN0aXZlSW1nTW9kYWwpO1xuXG59LHtcIi4vY29tcG9uZW50cy9jYXJ0XCI6MixcIi4vY29tcG9uZW50cy9wb3B1cFwiOjN9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWxldGVGcm9tQ2FydCA9IGV4cG9ydHMuYnRuUGx1c01pbnVzID0gZXhwb3J0cy5hZGRUb0NhcnQgPSB2b2lkIDA7XG5cbnZhciBfcG9wdXAgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3BvcHVwXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBjYXJ0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3Byb2R1Y3QtdmFsdWUnKTtcbnZhciBjYXJ0QW1vdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX19wcm9kdWN0LWFtb3VudCcpO1xudmFyIGNhcnRQcm9kdWN0VG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3Byb2R1Y3QtdG90YWwnKTtcbnZhciBjYXJ0T3JkZXJCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fb3JkZXItYm94Jyk7XG52YXIgY2FydE9yZGVyTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX29yZGVyLW51bWJlcicpO1xudmFyIGNhcnRCaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2JpbicpO1xudmFyIGJ0bkFkZFRvQ2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX2FkZC10by1jYXJ0Jyk7XG52YXIgaW5wdXRBbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX19pbnB1dC1hbW91bnQnKTtcbnZhciBidG5NaW51cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX21pbnVzJyk7XG52YXIgYnRuUGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5fX3BsdXMnKTtcbnZhciBjYXJ0U2xpY2VkVmFsdWUgPSBjYXJ0VmFsdWUuaW5uZXJIVE1MLnNsaWNlKDEsIGNhcnRWYWx1ZS5sZW5naHQpO1xudmFyIGNhcnRFbXB0eUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2VtcHR5LWNvbnRlbnQnKTtcbnZhciBjYXJ0RnVsbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Z1bGwtY29udGVudCcpO1xudmFyIHByb2R1Y3RDdXJyZW50VmFsdWUgPSB7XG4gIGN1cnJlbnRWYWx1ZTogMFxufTtcbi8qLS0tLS0tQWRkIHRvIGNhcnQtLS0tLS0qL1xuXG52YXIgYWRkVG9DYXJ0ID0gZnVuY3Rpb24gYWRkVG9DYXJ0KCkge1xuICBidG5BZGRUb0NhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGlucHV0QW1vdW50LmlubmVySFRNTCA+IDApIHtcbiAgICAgIGNhcnRPcmRlck51bWJlci5pbm5lckhUTUwgPSBpbnB1dEFtb3VudC5pbm5lckhUTUw7XG4gICAgICBjYXJ0T3JkZXJCb3guc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBjYXJ0QW1vdW50LmlubmVySFRNTCA9ICd4JyArIGlucHV0QW1vdW50LmlubmVySFRNTDtcbiAgICAgIGNhcnRQcm9kdWN0VG90YWwuaW5uZXJIVE1MID0gJyQnICsgKGlucHV0QW1vdW50LmlubmVySFRNTCAqIGNhcnRTbGljZWRWYWx1ZSkudG9GaXhlZCgyKTtcbiAgICAgIGNhcnRGdWxsQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGNhcnRFbXB0eUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHByb2R1Y3RDdXJyZW50VmFsdWUgPSB7XG4gICAgICAgIGN1cnJlbnRWYWx1ZTogMFxuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufTtcbi8qLS0tLS0tRGVsZXRlIGZyb20gY2FydC0tLS0tLSovXG5cblxuZXhwb3J0cy5hZGRUb0NhcnQgPSBhZGRUb0NhcnQ7XG5cbnZhciBkZWxldGVGcm9tQ2FydCA9IGZ1bmN0aW9uIGRlbGV0ZUZyb21DYXJ0KCkge1xuICBjYXJ0QmluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdHJpcHBlZFZhbHVlID0gY2FydEFtb3VudC5pbm5lckhUTUwuc2xpY2UoMSwgY2FydEFtb3VudC5sZW5ndGgpO1xuICAgIGNhcnRBbW91bnQuaW5uZXJIVE1MID0gJ3gnICsgKHN0cmlwcGVkVmFsdWUgLSAxKTtcbiAgICBjYXJ0T3JkZXJOdW1iZXIuaW5uZXJIVE1MIC09IDE7XG4gICAgaW5wdXRBbW91bnQuaW5uZXJIVE1MIC09IDE7XG4gICAgY29uc29sZS5sb2coKTtcblxuICAgIGlmIChjYXJ0QW1vdW50LmlubmVySFRNTCA8PSAwIHx8IGNhcnRPcmRlck51bWJlci5pbm5lckhUTUwgPD0gMCkge1xuICAgICAgY2FydEFtb3VudC5pbm5lckhUTUwgPSAwO1xuICAgICAgY2FydE9yZGVyTnVtYmVyLmlubmVySFRNTCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIHN0cmlwcGVkVmFsdWVRdWFudGl0eU51bSA9IGNhcnRQcm9kdWN0VG90YWwuaW5uZXJIVE1MLnNsaWNlKDEsIGNhcnRQcm9kdWN0VG90YWwubGVuZ3RoKTtcbiAgICB2YXIgcXVhbnRpdHlOdW0gPSBwYXJzZUludChzdHJpcHBlZFZhbHVlUXVhbnRpdHlOdW0pO1xuICAgIGNhcnRQcm9kdWN0VG90YWwuaW5uZXJIVE1MID0gJyQnICsgKHF1YW50aXR5TnVtIC0gY2FydFNsaWNlZFZhbHVlKS50b0ZpeGVkKDIpO1xuXG4gICAgaWYgKGNhcnRBbW91bnQuaW5uZXJIVE1MID09IDApIHtcbiAgICAgIGlucHV0QW1vdW50LmlubmVySFRNTCA9IDA7XG4gICAgICBjYXJ0RnVsbENvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGNhcnRFbXB0eUNvbnRlbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuICB9KTtcbn07XG4vKi0tLS0tLWJ0biBwbHVzIGFuZCBtaW51cy0tLS0tLSovXG5cblxuZXhwb3J0cy5kZWxldGVGcm9tQ2FydCA9IGRlbGV0ZUZyb21DYXJ0O1xuXG52YXIgYnRuUGx1c01pbnVzID0gZnVuY3Rpb24gYnRuUGx1c01pbnVzKCkge1xuICBpbnB1dEFtb3VudC5pbm5lckhUTUwgPSBmb3JtYXROdW1iZXIoMCk7XG4gIGJ0blBsdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGN1cnJlbnRBbW91bnQgPSBmb3JtYXROdW1iZXIocHJvZHVjdEN1cnJlbnRWYWx1ZS5jdXJyZW50VmFsdWUgKz0gMSk7XG4gICAgaW5wdXRBbW91bnQuaW5uZXJIVE1MID0gY3VycmVudEFtb3VudDtcbiAgfSk7XG4gIGJ0bk1pbnVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjdXJyZW50QW1vdW50ID0gMDtcblxuICAgIGlmIChwcm9kdWN0Q3VycmVudFZhbHVlLmN1cnJlbnRWYWx1ZSA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnJlbnRBbW91bnQgPSBmb3JtYXROdW1iZXIocHJvZHVjdEN1cnJlbnRWYWx1ZS5jdXJyZW50VmFsdWUgLT0gMSk7XG4gICAgICBpbnB1dEFtb3VudC5pbm5lckhUTUwgPSBjdXJyZW50QW1vdW50O1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnRzLmJ0blBsdXNNaW51cyA9IGJ0blBsdXNNaW51cztcblxuZnVuY3Rpb24gZm9ybWF0TnVtYmVyKG51bSkge1xuICByZXR1cm4gbnVtLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycpO1xufVxuXG47XG5cbn0se1wiLi9wb3B1cFwiOjN9XSwzOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBwb3B1cCA9IGZ1bmN0aW9uIHBvcHVwKHRyaWdnZXIsIGFjdGlvbikge1xuICB0cmlnZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cCcpO1xuXG4gICAgaWYgKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIF9kZWZhdWx0ID0gcG9wdXA7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xuXG59LHt9XX0se30sWzFdKTtcbiJdLCJmaWxlIjoiYXBwLmpzIn0=
