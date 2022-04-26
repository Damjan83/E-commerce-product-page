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
var popUpHeader = document.createElement('p');
popUpHeader.classList.add('popup-header');
cartModal.appendChild(popUpHeader);
document.querySelector('.popup-header').textContent = 'Cart';
var popUpContent = document.createElement('div');
popUpContent.classList.add('popup-content');
cartModal.appendChild(popUpContent);
var popUpContentFull = document.createElement('div');
popUpContentFull.classList.add('popup-content__full');
popUpContent.appendChild(popUpContentFull);
var popUpContentFullImg = document.createElement('img');
popUpContentFullImg.classList.add('popup-content__full-img');
popUpContentFull.appendChild(popUpContentFullImg);
var popUpContentFullText = document.createElement('img');
popUpContentFullText.classList.add('popup-content__full-text');
popUpContentFull.appendChild(popUpContentFullText);
var popUpContentEmpty = document.createElement('div');
popUpContentEmpty.classList.add('popup-content__empty');
popUpContent.appendChild(popUpContentEmpty);
document.querySelector('.popup-content__empty').textContent = 'Your cart is empty.';
console.log(popUpContent);
var popUpFooter = document.createElement('div');
popUpFooter.classList.add('popup-footer');
cartModal.appendChild(popUpFooter);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcblxudmFyIF9jYXJ0ID0gcmVxdWlyZShcIi4vY29tcG9uZW50cy9jYXJ0XCIpO1xuXG52YXIgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2X19idXJnZXInKTtcbnZhciBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXZfX21lbnUnKTtcbnZhciBtZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdl9fbWVudS1pdGVtJyk7XG52YXIgbWVudUxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1uYXZfX21lbnUtbGluaycpO1xudmFyIG1vZGFsTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19tb2InKTtcbnZhciB0aHVtYkFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50aHVtYi1pbWcnKTtcbnZhciBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtaW1nJyk7XG52YXIgbWFpblByb2R1Y3RJbWdNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0SW1nJyk7XG52YXIgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbnZhciB0aHVtYkFjdGl2ZUltZ01vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRodW1iLWltZy1tb2RhbCcpO1xudmFyIGJ0blByZXZpb3VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tcHJldmlvdXMnKTtcbnZhciBidG5OZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tbmV4dCcpO1xudmFyIGJ0blByZXZpb3VzTW9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tcHJldmlvdXMtbW9iJyk7XG52YXIgYnRuTmV4dE1vYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLW5leHQtbW9iJyk7XG52YXIgYnRuQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbl9fY2xvc2UnKTtcbnZhciBsaWdodGJveE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG52YXIgY29udGFpbmVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyX19tb2RhbCcpO1xudmFyIHRodW1iQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3RfX3RodW1ibmFpbHMnKTtcbnZhciB0aHVtYkNvbnRhaW5lckltYWdlcyA9IHRodW1iQ29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aDtcbnZhciBnZXRVcmwgPSB3aW5kb3cubG9jYXRpb247XG52YXIgYmFzZVVybCA9IGdldFVybC5wcm90b2NvbCArIFwiLy9cIiArIGdldFVybC5ob3N0ICsgXCIvXCIgKyBnZXRVcmwucGF0aG5hbWUuc3BsaXQoJy8nKVsxXTtcbi8qLS0tLS0tQnVyZ2VyIGFuZCBtb2JpbGUgbWVudS0tLS0tLSovXG5cbmJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgbmF2LmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICBidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG4gIG1lbnVJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICBtZW51TGluay5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2lzLWFjdGl2ZScpO1xuICB9KTtcbiAgbW9kYWxNb2IuY2xhc3NMaXN0LnRvZ2dsZSgnaXMtYWN0aXZlJyk7XG59KTtcbmNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICBjb250YWluZXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICBpZiAod2luZG93LmlubmVyV2lkdGggPCA3NjgpIHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGNvbnRhaW5lck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjaGFuZ2VNYWluSGFuZGxlcihlbGUsIGVsZUFycmF5LCBiZ0ZsYWcpIHtcbiAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoX2kpIHtcbiAgICBlbGVBcnJheVtfaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGh1bWIgPSAnY29udGFpbmVyX190aHVtYm5haWxzLWltZy0nICsgW19pICsgMV07XG4gICAgICB2YXIgdGh1bWJJbWcgPSB0aHVtYi5zbGljZSgtMSk7XG5cbiAgICAgIGlmIChiZ0ZsYWcpIHtcbiAgICAgICAgZWxlLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGJhc2VVcmwgKyAnL2Rpc3QvYXNzZXRzL2ltYWdlcy9pbWFnZS1wcm9kdWN0LScgKyB0aHVtYkltZyArICcuanBnKSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbGUuc3JjID0gJ2Rpc3QvYXNzZXRzL2ltYWdlcy9pbWFnZS1wcm9kdWN0LScgKyB0aHVtYkltZyArICcuanBnJztcbiAgICAgIH1cblxuICAgICAgZWxlQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICBpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICAgICAgfSk7XG5cbiAgICAgIGVsZUFycmF5W19pXS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICB9KTtcbiAgfTtcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZWxlQXJyYXkubGVuZ3RoOyBfaSsrKSB7XG4gICAgX2xvb3AoX2kpO1xuICB9XG59XG4vKi0tLS0tLWxpZ2h0Ym94IGJ0biBwcmV2aW91cyBhbmQgbmV4dC0tLS0tLSovXG5cblxudmFyIGkgPSAwO1xuYnRuUHJldmlvdXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGlmIChpIDw9IDApIGkgPSB0aHVtYkFjdGl2ZUltZ01vZGFsLmxlbmd0aDtcbiAgaS0tO1xuICB0aHVtYkFjdGl2ZUltZ01vZGFsLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICBpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICB9KTtcbiAgdGh1bWJBY3RpdmVJbWdNb2RhbFtpXS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgcmV0dXJuIHNldEltZygpO1xufSk7XG5idG5OZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBpZiAoaSA+PSB0aHVtYkFjdGl2ZUltZ01vZGFsLmxlbmd0aCAtIDEpIGkgPSAtMTtcbiAgaSsrO1xuICB0aHVtYkFjdGl2ZUltZ01vZGFsLmZvckVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICBpLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuICB9KTtcbiAgdGh1bWJBY3RpdmVJbWdNb2RhbFtpXS5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgcmV0dXJuIHNldEltZygpO1xufSk7XG4vKi0tLS0tLSBidG4gcHJldmlvdXMsIGJ0biBuZXh0IG1vYi0tLS0tLSovXG5cbmJ0blByZXZpb3VzTW9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICB2YXIgY3VycmVudEFjdGl2ZUF0dHIgPSBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLmRhdGFzZXQuYWN0aXZlO1xuICB2YXIgZ2V0SW1nSW5kZXggPSBjdXJyZW50QWN0aXZlQXR0cjtcblxuICBpZiAoZ2V0SW1nSW5kZXggPD0gMSkge1xuICAgIGdldEltZ0luZGV4ID0gNDtcbiAgfSBlbHNlIHtcbiAgICBnZXRJbWdJbmRleC0tO1xuICB9XG5cbiAgY29udGFpbmVyUHJvZHVjdEltZ0FjdGl2ZS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBiYXNlVXJsICsgJy9kaXN0L2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0nICsgZ2V0SW1nSW5kZXggKyAnLmpwZyknO1xuICBjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLnNldEF0dHJpYnV0ZShcImRhdGEtYWN0aXZlXCIsIGdldEltZ0luZGV4KTtcbn0pO1xuYnRuTmV4dE1vYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGN1cnJlbnRBY3RpdmVBdHRyID0gY29udGFpbmVyUHJvZHVjdEltZ0FjdGl2ZS5kYXRhc2V0LmFjdGl2ZTtcbiAgdmFyIGdldEltZ0luZGV4ID0gY3VycmVudEFjdGl2ZUF0dHI7XG5cbiAgaWYgKGdldEltZ0luZGV4ID49IDQpIHtcbiAgICBnZXRJbWdJbmRleCA9IDE7XG4gIH0gZWxzZSB7XG4gICAgZ2V0SW1nSW5kZXgrKztcbiAgfVxuXG4gIGNvbnRhaW5lclByb2R1Y3RJbWdBY3RpdmUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgYmFzZVVybCArICcvZGlzdC9hc3NldHMvaW1hZ2VzL2ltYWdlLXByb2R1Y3QtJyArIGdldEltZ0luZGV4ICsgJy5qcGcpJztcbiAgY29udGFpbmVyUHJvZHVjdEltZ0FjdGl2ZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFjdGl2ZVwiLCBnZXRJbWdJbmRleCk7XG59KTtcbmJ0bkNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICBjb250YWluZXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBsaWdodGJveE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcbmxpZ2h0Ym94TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gIGNvbnRhaW5lck1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGxpZ2h0Ym94TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5mdW5jdGlvbiBzZXRJbWcoKSB7XG4gIHZhciBzZXRCdG5BY3RpdmUgPSAnY29udGFpbmVyX190aHVtYm5haWxzLWltZy0nICsgW2kgKyAxXTtcbiAgdmFyIHNldEJ0bkltZyA9IHNldEJ0bkFjdGl2ZS5zbGljZSgtMSk7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdEltZycpLnNyYyA9ICdkaXN0L2Fzc2V0cy9pbWFnZXMvaW1hZ2UtcHJvZHVjdC0nICsgc2V0QnRuSW1nICsgJy5qcGcnO1xufVxuXG4oMCwgX2NhcnQuYWRkVG9DYXJ0KSgpO1xuKDAsIF9jYXJ0LmRlbGV0ZUZyb21DYXJ0KSgpO1xuKDAsIF9jYXJ0LmVtcHR5Q2FydCkoKTtcbigwLCBfY2FydC5idG5QbHVzTWludXMpKCk7XG5jaGFuZ2VNYWluSGFuZGxlcihjb250YWluZXJQcm9kdWN0SW1nQWN0aXZlLCB0aHVtYkFjdGl2ZSwgdHJ1ZSk7XG5jaGFuZ2VNYWluSGFuZGxlcihtYWluUHJvZHVjdEltZ01vZGFsLCB0aHVtYkFjdGl2ZUltZ01vZGFsKTtcblxufSx7XCIuL2NvbXBvbmVudHMvY2FydFwiOjJ9XSwyOltmdW5jdGlvbihyZXF1aXJlLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5lbXB0eUNhcnQgPSBleHBvcnRzLmRlbGV0ZUZyb21DYXJ0ID0gZXhwb3J0cy5idG5QbHVzTWludXMgPSBleHBvcnRzLmFkZFRvQ2FydCA9IHZvaWQgMDtcbnZhciBjYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQnKTtcbnZhciBjYXJ0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fbW9kYWwnKTtcbnZhciBjYXJ0TW9kYWxFbXB0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19tb2RhbC1lbXB0eScpO1xudmFyIGNhcnRNb2RhbFByb2R1Y3RRdWFudGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19tb2RhbC1wcm9kdWN0LXByaWNlLS1pbnB1dC1hbW91bnQnKTtcbnZhciBjYXJ0UHJvZHVjdFByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtcHJvZHVjdC1wcmljZScpO1xudmFyIGNhcnRQcm9kdWN0UXVhbnRpdHlQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19tb2RhbC1wcm9kdWN0LXByaWNlLXF1YW50aXR5LS1wcmljZScpO1xudmFyIGNhcnRPcmRlckJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0X19vcmRlci1ib3gnKTtcbnZhciBjYXJ0T3JkZXJOdW1iZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydF9fb3JkZXItbnVtYmVyJyk7XG52YXIgZGVsZXRlUHJvZHVjdFF1YW50aXR5QmluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnRfX21vZGFsLXByb2R1Y3QtYmluJyk7XG52YXIgYnRuQWRkVG9DYXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl9fYWRkLXRvLWNhcnQnKTtcbnZhciBpbnB1dEFtb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXJfX2lucHV0LWFtb3VudCcpO1xudmFyIGJ0bk1pbnVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl9fbWludXMnKTtcbnZhciBidG5QbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bl9fcGx1cycpO1xudmFyIHBvcFVwSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xucG9wVXBIZWFkZXIuY2xhc3NMaXN0LmFkZCgncG9wdXAtaGVhZGVyJyk7XG5jYXJ0TW9kYWwuYXBwZW5kQ2hpbGQocG9wVXBIZWFkZXIpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWhlYWRlcicpLnRleHRDb250ZW50ID0gJ0NhcnQnO1xudmFyIHBvcFVwQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucG9wVXBDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWNvbnRlbnQnKTtcbmNhcnRNb2RhbC5hcHBlbmRDaGlsZChwb3BVcENvbnRlbnQpO1xudmFyIHBvcFVwQ29udGVudEZ1bGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnBvcFVwQ29udGVudEZ1bGwuY2xhc3NMaXN0LmFkZCgncG9wdXAtY29udGVudF9fZnVsbCcpO1xucG9wVXBDb250ZW50LmFwcGVuZENoaWxkKHBvcFVwQ29udGVudEZ1bGwpO1xudmFyIHBvcFVwQ29udGVudEZ1bGxJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbnBvcFVwQ29udGVudEZ1bGxJbWcuY2xhc3NMaXN0LmFkZCgncG9wdXAtY29udGVudF9fZnVsbC1pbWcnKTtcbnBvcFVwQ29udGVudEZ1bGwuYXBwZW5kQ2hpbGQocG9wVXBDb250ZW50RnVsbEltZyk7XG52YXIgcG9wVXBDb250ZW50RnVsbFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbnBvcFVwQ29udGVudEZ1bGxUZXh0LmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWNvbnRlbnRfX2Z1bGwtdGV4dCcpO1xucG9wVXBDb250ZW50RnVsbC5hcHBlbmRDaGlsZChwb3BVcENvbnRlbnRGdWxsVGV4dCk7XG52YXIgcG9wVXBDb250ZW50RW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnBvcFVwQ29udGVudEVtcHR5LmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWNvbnRlbnRfX2VtcHR5Jyk7XG5wb3BVcENvbnRlbnQuYXBwZW5kQ2hpbGQocG9wVXBDb250ZW50RW1wdHkpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRlbnRfX2VtcHR5JykudGV4dENvbnRlbnQgPSAnWW91ciBjYXJ0IGlzIGVtcHR5Lic7XG5jb25zb2xlLmxvZyhwb3BVcENvbnRlbnQpO1xudmFyIHBvcFVwRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5wb3BVcEZvb3Rlci5jbGFzc0xpc3QuYWRkKCdwb3B1cC1mb290ZXInKTtcbmNhcnRNb2RhbC5hcHBlbmRDaGlsZChwb3BVcEZvb3Rlcik7XG4vKi0tLS0tLUFkZCB0byBjYXJ0LS0tLS0tKi9cblxudmFyIGFkZFRvQ2FydCA9IGZ1bmN0aW9uIGFkZFRvQ2FydCgpIHtcbiAgY29uc29sZS5sb2coJ3Rlc3QnKTtcbiAgYnRuQWRkVG9DYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChpbnB1dEFtb3VudC5pbm5lckhUTUwgPiAwKSB7XG4gICAgICBjYXJ0T3JkZXJOdW1iZXIuaW5uZXJIVE1MID0gaW5wdXRBbW91bnQuaW5uZXJIVE1MO1xuICAgICAgY2FydE9yZGVyQm94LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgY2FydE1vZGFsUHJvZHVjdFF1YW50aXR5LmlubmVySFRNTCA9IGlucHV0QW1vdW50LmlubmVySFRNTDtcbiAgICAgIGNhcnRQcm9kdWN0UXVhbnRpdHlQcmljZS5pbm5lckhUTUwgPSAoY2FydFByb2R1Y3RQcmljZS5pbm5lckhUTUwgKiBpbnB1dEFtb3VudC5pbm5lckhUTUwpLnRvRml4ZWQoMik7XG4gICAgICBjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG59O1xuLyotLS0tLS1EZWxldGUgZnJvbSBjYXJ0LS0tLS0tKi9cblxuXG5leHBvcnRzLmFkZFRvQ2FydCA9IGFkZFRvQ2FydDtcblxudmFyIGRlbGV0ZUZyb21DYXJ0ID0gZnVuY3Rpb24gZGVsZXRlRnJvbUNhcnQoKSB7XG4gIGRlbGV0ZVByb2R1Y3RRdWFudGl0eUJpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBjYXJ0TW9kYWxQcm9kdWN0UXVhbnRpdHkuaW5uZXJIVE1MIC09IDE7XG4gICAgY2FydE9yZGVyTnVtYmVyLmlubmVySFRNTCAtPSAxO1xuICAgIGlucHV0QW1vdW50LmlubmVySFRNTCAtPSAxO1xuXG4gICAgaWYgKGNhcnRNb2RhbFByb2R1Y3RRdWFudGl0eS5pbm5lckhUTUwgPD0gMCB8fCBjYXJ0T3JkZXJOdW1iZXIuaW5uZXJIVE1MIDw9IDApIHtcbiAgICAgIGNhcnRNb2RhbFByb2R1Y3RRdWFudGl0eS5pbm5lckhUTUwgPSAwO1xuICAgICAgY2FydE9yZGVyTnVtYmVyLmlubmVySFRNTCA9IDA7XG4gICAgfVxuXG4gICAgdmFyIHF1YW50aXR5TnVtID0gcGFyc2VJbnQoY2FydFByb2R1Y3RRdWFudGl0eVByaWNlLmlubmVySFRNTCk7XG4gICAgdmFyIHByb2R1Y3RQcmljZSA9IHBhcnNlSW50KGNhcnRQcm9kdWN0UHJpY2UuaW5uZXJIVE1MKTtcbiAgICBjYXJ0UHJvZHVjdFF1YW50aXR5UHJpY2UuaW5uZXJIVE1MID0gKHF1YW50aXR5TnVtIC0gcHJvZHVjdFByaWNlKS50b0ZpeGVkKDIpO1xuXG4gICAgaWYgKGNhcnRQcm9kdWN0UXVhbnRpdHlQcmljZS5pbm5lckhUTUwgPD0gMCkge1xuICAgICAgY2FydFByb2R1Y3RRdWFudGl0eVByaWNlLmlubmVySFRNTCA9IDA7XG4gICAgICBjYXJ0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGNhcnRNb2RhbEVtcHR5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBjYXJ0T3JkZXJCb3guc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gIH0pO1xufTtcbi8qLS0tLS0tRW1wdHkgY2FydC0tLS0tLSovXG5cblxuZXhwb3J0cy5kZWxldGVGcm9tQ2FydCA9IGRlbGV0ZUZyb21DYXJ0O1xuXG52YXIgZW1wdHlDYXJ0ID0gZnVuY3Rpb24gZW1wdHlDYXJ0KCkge1xuICBjYXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGlmIChjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIGNhcnRNb2RhbEVtcHR5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGlmIChpbnB1dEFtb3VudC5pbm5lckhUTUwgPiAwKSB7XG4gICAgICBjYXJ0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBjYXJ0TW9kYWxFbXB0eS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgfSk7XG59O1xuLyotLS0tLS1idG4gcGx1cyBhbmQgbWludXMtLS0tLS0qL1xuXG5cbmV4cG9ydHMuZW1wdHlDYXJ0ID0gZW1wdHlDYXJ0O1xuXG52YXIgYnRuUGx1c01pbnVzID0gZnVuY3Rpb24gYnRuUGx1c01pbnVzKCkge1xuICB2YXIgYXBwcCA9IHtcbiAgICBjdXJyZW50VmFsdWU6IDBcbiAgfTtcbiAgaW5wdXRBbW91bnQuaW5uZXJIVE1MID0gZm9ybWF0TnVtYmVyKDApO1xuICBidG5QbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBjdXJyZW50QW1vdW50ID0gZm9ybWF0TnVtYmVyKGFwcHAuY3VycmVudFZhbHVlICs9IDEpO1xuICAgIGlucHV0QW1vdW50LmlubmVySFRNTCA9IGN1cnJlbnRBbW91bnQ7XG4gIH0pO1xuICBidG5NaW51cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgY3VycmVudEFtb3VudCA9IDA7XG5cbiAgICBpZiAoYXBwcC5jdXJyZW50VmFsdWUgPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjdXJyZW50QW1vdW50ID0gZm9ybWF0TnVtYmVyKGFwcHAuY3VycmVudFZhbHVlIC09IDEpO1xuICAgICAgaW5wdXRBbW91bnQuaW5uZXJIVE1MID0gY3VycmVudEFtb3VudDtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0cy5idG5QbHVzTWludXMgPSBidG5QbHVzTWludXM7XG5cbmZ1bmN0aW9uIGZvcm1hdE51bWJlcihudW0pIHtcbiAgcmV0dXJuIG51bS50b0xvY2FsZVN0cmluZygnZW4tVVMnKTtcbn1cblxuO1xuXG59LHt9XX0se30sWzFdKTtcbiJdLCJmaWxlIjoiYXBwLmpzIn0=
