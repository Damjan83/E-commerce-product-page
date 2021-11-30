const slideActive = document.querySelectorAll('.thumb');
for(let i = 0; i < slideActive.length; i++){
    slideActive[i].addEventListener('click' , () => {
        const thumb = 'container__thumbnails-img-' + [i+1].slice(-1);
        const thumbImg = thumb.slice(-1);
        document.querySelector('.product').src = './images/image-product-' + thumbImg + '.jpg';       
    });
};


