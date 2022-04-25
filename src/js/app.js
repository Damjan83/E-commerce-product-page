import {addToCart, deleteFromCart, emptyCart, btnPlusMinus} from './components/cart';


const burger = document.querySelector('.main-nav__burger');
const nav = document.querySelector('.main-nav__menu');
const menuItem = document.querySelector('.main-nav__menu-item');
const menuLink = document.querySelectorAll('.main-nav__menu-link');
const modalMob = document.querySelector('.modal__mob');

const thumbActive = document.querySelectorAll('.thumb-img');
const containerProductImgActive = document.querySelector('.product-img');

const modal = document.querySelector('.modal');
const thumbActiveImgModal = document.querySelectorAll('.thumb-img-modal');

const btnPrevious = document.querySelector('.btn--previous');
const btnNext = document.querySelector('.btn--next');
const btnPreviousMob = document.querySelector('.btn--previous-mob');
const btnNextMob = document.querySelector('.btn--next-mob');

const btnClose = document.querySelector('.icon__close');
const lightboxModal = document.querySelector('.modal');
const containerModal = document.querySelector('.container__modal');

const thumbContainer = document.querySelector('.product__thumbnails');
const thumbContainerImages = thumbContainer.children.length;

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

containerProductImgActive.addEventListener('click', () => {
    modal.style.display = 'block';
    containerModal.style.display = 'block';
    if(window.innerWidth < 768) {
        modal.style.display = 'none';
        containerModal.style.display = 'none';
    }   
});

function changeMainHandler(ele, eleArray, bgFlag) {
    for(let i = 0; i < eleArray.length; i++){
        eleArray[i].addEventListener('click', function() {
            const thumb = 'container__thumbnails-img-' + [i + 1];
            const thumbImg = thumb.slice(-1);
            if(bgFlag) {
                ele.style.backgroundImage = 'url(../dist/assets/images/image-product-' + thumbImg + '.jpg)';
            }else{
                ele.src = 'dist/assets/images/image-product-' + thumbImg + '.jpg';
            }

            eleArray.forEach(function(i) {
                i.classList.remove('is-active');
            });
            eleArray[i].classList.add('is-active');
        });
    }
}


/*------lightbox btn previous and next------*/
let i = 0;
btnPrevious.addEventListener('click' , () => {
    if(i <= 0) 
        i = thumbActiveImgModal.length;
        i--;
        thumbActiveImgModal.forEach((i) => {
            i.classList.remove('is-active');
        });
        thumbActiveImgModal[i].classList.add('is-active');
        return setImg();
});

btnNext.addEventListener('click' , () => {
    if(i >= thumbActiveImgModal.length - 1 ) 
        i = -1;    
        i++;
        thumbActiveImgModal.forEach((i) => {
            i.classList.remove('is-active');
        });
        thumbActiveImgModal[i].classList.add('is-active');
        return setImg();     
});


/*------ btn previous, btn next mob------*/
btnPreviousMob.addEventListener('click' , () => {   
    const currentActiveAttr = containerProductImgActive.dataset.active;   
    let getImgIndex = currentActiveAttr; 
    if(getImgIndex <= 1){ 
        getImgIndex = 4;
    }else {
        getImgIndex--;
    }   
    containerProductImgActive.src = 'url(../dist/assets/images/image-product-' + getImgIndex + '.jpg)';
    containerProductImgActive.setAttribute("data-active",getImgIndex); 
});

btnNextMob.addEventListener('click' , () => {
    const currentActiveAttr = containerProductImgActive.dataset.active;   
    let getImgIndex = currentActiveAttr; 
    if(getImgIndex >= 4){ 
        getImgIndex = 1;
    }else {
        getImgIndex++;
    }   
    containerProductImgActive.src = 'url(../dist/assets/images/image-product-' + getImgIndex + '.jpg)';
    containerProductImgActive.setAttribute("data-active",getImgIndex); 
});

 
 btnClose.addEventListener('click' , () => {
    containerModal.style.display = 'none';
    lightboxModal.style.display = 'none';
 });

 lightboxModal.addEventListener('click' , () => {
    containerModal.style.display = 'none';
    lightboxModal.style.display = 'none';
 });



function setImg() {
    const setBtnActive = 'container__thumbnails-img-' + [i+1];
    const setBtnImg = setBtnActive.slice(-1);
    return document.querySelector('.productImg').src = 'dist/assets/images/image-product-' + setBtnImg + '.jpg';
 }

addToCart();
deleteFromCart();
emptyCart();
btnPlusMinus();

changeMainHandler(containerProductImgActive, thumbActive, true)
changeMainHandler(mainProductImgModal, thumbActiveImgModal)
