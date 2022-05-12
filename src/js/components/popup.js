const popup = (trigger, action) => {
    
    trigger.addEventListener('click' , function() {
        const popup = document.querySelector('.popup');
        if(popup.classList.contains('is-active')) {
            popup.classList.remove('is-active');
        }else {
            popup.classList.add('is-active');
        }
    });
}

export default popup;