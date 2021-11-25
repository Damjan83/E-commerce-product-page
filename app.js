const mySlide = document.querySelectorAll('.mySlide');
const slideActive = document.querySelector('.img-thumbnails-2');


slideActive.addEventListener('click', function() {
    const test = document.querySelector('.mySlide.active');
    const testImg = test.querySelector('IMG');

    testImg.src = './images/image-product-2.jpg';

    console.log(testImg)
});

