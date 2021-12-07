const thumbActive = document.querySelectorAll('.thumb-img');
const modalActive = document.querySelector('.container__product-img');
const modal = document.querySelector('.modal');
const productModal = document.querySelector('.container__product-modal');


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
