const burger = document.querySelector('.main-nav__burger');
const nav = document.querySelector('.main-nav__menu');
const menuItem = document.querySelector('.main-nav__menu-item');
const menuLink = document.querySelectorAll('.main-nav__menu-link');
const modalMob = document.querySelector('.modal__mob');

const thumbActive = document.querySelectorAll('.thumb-img');
const modalActive = document.querySelector('.container__product-img');
const modal = document.querySelector('.modal');
const thumbActiveModal = document.querySelectorAll('.thumb-img-modal');
const modalActiveImg = document.querySelector('.container__product-modal-img');

const btnPrevious = document.querySelector('.btn--previous');
const btnNext = document.querySelector('.btn--next');
const btnPreviousMob = document.querySelector('.btn--previous-mob');
const btnNextMob = document.querySelector('.btn--next-mob');

const btnClose = document.querySelector('.icon__close');
const lightboxModal = document.querySelector('.modal');
const containerModal = document.querySelector('.container__modal');

const cart = document.querySelector('.cart');
const cartModal = document.querySelector('.cart__modal');

const btnMinus = document.querySelector('.btn__minus');
const btnPlus = document.querySelector('.btn__plus');
const inputAmount = document.querySelector('.container__input-amount');

const ccPr = document.querySelector('.container__product');
const prImg = ccPr.querySelector('.container__product-img');


/*------Burger and mobile menu------*/
burger.addEventListener('click' , () => {
    nav.classList.toggle('is-active');
    burger.classList.toggle('is-active');
    menuItem.classList.toggle('is-active');
    menuLink.forEach( (el) => {
        el.classList.toggle('is-active');
    });
    modalMob.classList.toggle('is-active');
});

/*------Changing thumb img whit main img------*/
for(let i = 0; i < thumbActive.length; i++){
    thumbActive[i].addEventListener('click' , () => { 
        const thumb = 'container__thumbnails-img-' + [i+1];
        const thumbImg = thumb.slice(-1);
        document.querySelector('.product').src = './images/image-product-' + thumbImg + '.jpg';
        thumbActive.forEach((i) => {
            i.classList.remove('is-active');
        });
        thumbActive[i].classList.add('is-active');
    });
};
modalActive.addEventListener('click', () => {
    modal.style.display = 'block';
    containerModal.style.display = 'block';
});

/*------btn plus and minus------*/
let app = { currentValue: 0};
inputAmount.innerHTML = formatNumber(0);
btnPlus.addEventListener('click' , () => {
    const currentAmount = formatNumber(app.currentValue += 1);
    inputAmount.innerHTML  = currentAmount;
});
btnMinus.addEventListener('click' , () => {
    let currentAmount = 0;
  
    if(app.currentValue <= 0) {
        return;
    }else {
        currentAmount = formatNumber(app.currentValue -= 1);
        inputAmount.innerHTML  = currentAmount;
    }   
});


/*------Lightbox modal------*/
for(let i = 0; i < thumbActiveModal.length; i++){
    thumbActiveModal[i].addEventListener('click' , (e) => { 
        const thumbModal = 'container__thumbnails-img-' + [i+1];
        const thumbImgModal = thumbModal.slice(-1);
        document.querySelector('.productImg').src = './images/image-product-' + thumbImgModal + '.jpg';
        thumbActiveModal.forEach((i) => {
            i.classList.remove('is-active');
        });
        thumbActiveModal[i].classList.add('is-active');
    });
};
/*------lightbox btn previous and next------*/
let i = 0;
btnPrevious.addEventListener('click' , () => {
    if(i <= 0) 
        i = thumbActiveModal.length;
        i--;
        thumbActiveModal.forEach((i) => {
            i.classList.remove('is-active');
        });
        thumbActiveModal[i].classList.add('is-active');
        return setImg();
});

btnNext.addEventListener('click' , () => {
    if(i >= thumbActiveModal.length - 1 ) 
        i = -1;    
        i++;
        thumbActiveModal.forEach((i) => {
            i.classList.remove('is-active');
        });
        thumbActiveModal[i].classList.add('is-active');
        return setImg();     
});
function setImg() {
    const setBtnActive = 'container__thumbnails-img-' + [i+1];
    const setBtnImg = setBtnActive.slice(-1);
    return document.querySelector('.productImg').src = './images/image-product-' + setBtnImg + '.jpg';
 }

/*------ btn previous, btn next mob------*/

btnPreviousMob.addEventListener('click' , () => {
  
});

btnNextMob.addEventListener('click' , () => {
    
});
function getIndex() {
    const imgIndex = './images/image-product-' + [i+1];
    const imgIndexNum = imgIndex.slice(-1);
    return document.querySelector('.product').src = './images/image-product-' + imgNum + '.jpg';
}
 



 btnClose.addEventListener('click' , () => {
    containerModal.style.display = 'none';
    lightboxModal.style.display = 'none';
 });
 lightboxModal.addEventListener('click' , () => {
    containerModal.style.display = 'none';
    lightboxModal.style.display = 'none';
 });

 function formatNumber(num){
    return num.toLocaleString('en-US');
};
/*------cart modal------*/
cart.addEventListener('click' , () => {
    cartModal.style.display = 'block';
});

/*function setImgMob() {
    const imgIndex = './images/image-product-' + [i+1];
    const imgIndexNum = imgIndex.slice(-1);
    return document.querySelector('.product').src = './images/image-product-' + imgIndexNum + '.jpg';
}*/