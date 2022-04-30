const cartPopup = document.querySelector('.popup');
const cartValue = document.querySelector('.popup__product-value');
const cartAmount = document.querySelector('.popup__product-amount');
const cartProductQuantityPrice = document.querySelector('.popup__product-total');
const cartOrderBox = document.querySelector('.cart__order-box');
const cartOrderNumber = document.querySelector('.cart__order-number');
const deleteProductQuantityBin = document.querySelector('.popup__bin');
const btnAddToCart = document.querySelector('.btn__add-to-cart');
const inputAmount = document.querySelector('.container__input-amount');
const btnMinus = document.querySelector('.btn__minus');
const btnPlus = document.querySelector('.btn__plus');
const cartSlicedValue = cartValue.innerHTML.slice(1, cartValue.lenght)
const cartEmptyContent = document.querySelector('.popup__empty-content');
const cartFullContent = document.querySelector('.popup__full-content');

/*------Add to cart------*/ 
const addToCart = () => {
    btnAddToCart.addEventListener('click' , () => {
        if(inputAmount.innerHTML > 0) {
            cartOrderNumber.innerHTML = inputAmount.innerHTML;
            cartOrderBox.style.display = 'block';
            cartAmount.innerHTML = ' x ' + inputAmount.innerHTML;
            cartProductQuantityPrice.innerHTML = '$' + (inputAmount.innerHTML * cartSlicedValue).toFixed(2);
            cartFullContent.style.display = 'block';
            cartEmptyContent.style.display = 'none';
        }
     });
}

/*------Delete from cart------*/ 
const deleteFromCart = () => {
    deleteProductQuantityBin.addEventListener('click' , () => {
        cartAmount.innerHTML -= 1;
        cartOrderNumber.innerHTML -= 1;
        inputAmount.innerHTML -= 1;
    
        if(cartAmount.innerHTML <= 0 || cartOrderNumber.innerHTML <= 0) {
            cartAmount.innerHTML = 0;
            cartOrderNumber.innerHTML = 0;
        }
    
        const quantityNum = parseInt(cartProductQuantityPrice.innerHTML);
        const productPrice = parseInt(cartAmount.innerHTML);
        cartProductQuantityPrice.innerHTML = (quantityNum - productPrice).toFixed(2);
        if(cartProductQuantityPrice.innerHTML <= 0) {
            cartProductQuantityPrice.innerHTML = 0;
            cartPopup.style.display = 'none';
            cartOrderBox.style.display ='none';
        }
        
    });
}


/*------Empty cart------*/
const emptyCart = () => {
   
}

/*------btn plus and minus------*/
const btnPlusMinus = () => {
    let appp = { currentValue: 0};
    inputAmount.innerHTML = formatNumber(0);
    btnPlus.addEventListener('click' , () => {
        const currentAmount = formatNumber(appp.currentValue += 1);
        inputAmount.innerHTML  = currentAmount;
    });
    btnMinus.addEventListener('click' , () => {
        let currentAmount = 0;
    
        if(appp.currentValue <= 0) {
            return;
        }else {
            currentAmount = formatNumber(appp.currentValue -= 1);
            inputAmount.innerHTML  = currentAmount;
        }   
    });
}

function formatNumber(num){
    return num.toLocaleString('en-US');
};


export {addToCart, deleteFromCart, emptyCart, btnPlusMinus};