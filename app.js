const thumbActive = document.querySelectorAll('.thumb-img');
const modalActive = document.querySelector('.container__product-img');
const modal = document.querySelector('.modal');
const productModal = document.querySelector('.container__product-modal');

const thumbActiveModal = document.querySelectorAll('.thumb-img-modal');
const modalActiveImg = document.querySelector('.container__product-modal-img');

const btnPrevious = document.querySelector('.btn__previous');
const btnNext = document.querySelector('.btn__next');

const btnClose = document.querySelector('.icon__close');

const btnMinus = document.querySelector('.btn__minus');
const btnPlus = document.querySelector('.btn__plus');
const inputAmount = document.querySelector('.container__input-amount');


for(let i = 0; i < thumbActive.length; i++){
    thumbActive[i].addEventListener('click' , (e) => { 
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
    productModal.style.display = 'block';
});

/*------btn plus and minus------*/
let app = { currentValue: 0};
inputAmount.innerHTML = formatNumber(0);
btnPlus.addEventListener('click' , () => {
    const currentAmount = formatNumber(app.currentValue += 1);
    inputAmount.innerHTML  = currentAmount;
});
btnMinus.addEventListener('click' , () => {
    const currentAmount = formatNumber(app.currentValue -= 1);
  
    inputAmount.innerHTML  = currentAmount;
    
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
/*------btn previous and next------*/
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
 

 function formatNumber(num){
    return num.toLocaleString('en-US');
};