const thumbActive = document.querySelectorAll('.thumb-img');
for(let i = 0; i < thumbActive.length; i++){
    thumbActive[i].addEventListener('click' , () => { 
        const thumb = 'container__thumbnails-img-' + [i+1];
        const thumbImg = thumb.slice(-1);
        document.querySelector('.product').src = './images/image-product-' + thumbImg + '.jpg';
        thumbActive[i].classList.add('is-active');  
    });
   
  
};


