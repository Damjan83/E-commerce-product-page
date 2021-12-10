const thumbActive = document.querySelectorAll('.thumb-img');
const modalActive = document.querySelector('.container__product-img');
const modal = document.querySelector('.modal');
const productModal = document.querySelector('.container__product-modal');

const thumbActiveModal = document.querySelectorAll('.thumb-img-modal');
const modalActiveImg = document.querySelector('.container__product-modal-img');

const btnPrevious = document.querySelector('.btn__previous');
const btnNext = document.querySelector('.btn__next');

let i = 0;

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

btnPrevious.addEventListener('click' , () => {
    if(i <= 0)
        i = thumbActiveModal.length;
        i--;
    return setImg(); 
});

btnNext.addEventListener('click' , () => {
    if(i >= thumbActiveModal.length - 1 ) 
        i = -1;    
        i++;
        return setImg();     
});

 function setImg() {
    const thumbBtnActive = 'container__thumbnails-img-' + [i+1];
    const thumbBtnImg = thumbBtnActive.slice(-1);
    return document.querySelector('.productImg').src = './images/image-product-' + thumbBtnImg + '.jpg';
 }
 