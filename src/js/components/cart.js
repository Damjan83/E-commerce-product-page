import popup from "./popup";

const cartValue = document.querySelector('.popup__product-value');
const cartAmount = document.querySelector('.popup__product-amount');
const cartProductTotal = document.querySelector('.popup__product-total');
const cartOrderBox = document.querySelector('.cart__order-box');
const cartOrderNumber = document.querySelector('.cart__order-number');
const cartBin = document.querySelector('.popup__bin');
const btnAddToCart = document.querySelector('.btn__add-to-cart');
const inputAmount = document.querySelector('.container__input-amount');
const btnMinus = document.querySelector('.btn__minus');
const btnPlus = document.querySelector('.btn__plus');
const cartSlicedValue = cartValue.innerHTML.slice(1, cartValue.lenght)
const cartEmptyContent = document.querySelector('.popup__empty-content');
const cartFullContent = document.querySelector('.popup__full-content');

const overlay = document.querySelector('.overlay');
const overlayPopup = document.querySelector('.popup');

let productCurrentValue = { currentValue: 0};

/*------Add to cart------*/ 
const addToCart = () => {
    btnAddToCart.addEventListener('click' , () => {
        if(inputAmount.innerHTML > 0) {
            cartOrderNumber.innerHTML = inputAmount.innerHTML;
            cartOrderBox.style.display = 'block';
            cartAmount.innerHTML = 'x' + inputAmount.innerHTML;
            cartProductTotal.innerHTML = '$' + (inputAmount.innerHTML * cartSlicedValue).toFixed(2);
            cartFullContent.style.display = 'block';
            cartEmptyContent.style.display = 'none';
            productCurrentValue = {currentValue: 0}
        }
     });
}

/*------Delete from cart------*/ 
const deleteFromCart = () => {
    cartBin.addEventListener('click' , () => {
        const strippedValue = cartAmount.innerHTML.slice(1,cartAmount.length);
        cartAmount.innerHTML = 'x' + (strippedValue - 1);
        cartOrderNumber.innerHTML -= 1;
        inputAmount.innerHTML -= 1;

        if(cartAmount.innerHTML <= 0 || cartOrderNumber.innerHTML <= 0) {
            cartAmount.innerHTML = 0;
            cartOrderNumber.innerHTML = 0;
        }

        const strippedValueQuantityNum = cartProductTotal.innerHTML.slice(1,cartProductTotal.length);
        const quantityNum = parseInt(strippedValueQuantityNum);
        cartProductTotal.innerHTML = '$' + (quantityNum - cartSlicedValue).toFixed(2);

        if(cartAmount.innerHTML == 0) {
            inputAmount.innerHTML = 0;
            cartFullContent.style.display = 'none';
            cartEmptyContent.style.display = 'block';
        }
        
    });
}

/*------btn plus and minus------*/
const btnPlusMinus = () => {
    inputAmount.innerHTML = formatNumber(0);
    
    btnPlus.addEventListener('click' , () => {
        const currentAmount = formatNumber(productCurrentValue.currentValue += 1);
        inputAmount.innerHTML  = currentAmount;
    });

    btnMinus.addEventListener('click' , () => {
        let currentAmount = 0;   
        if(productCurrentValue.currentValue <= 0) {
            return;
        }else {
            currentAmount = formatNumber(productCurrentValue.currentValue -= 1);
            inputAmount.innerHTML  = currentAmount;
        }   
    });
}

overlay.addEventListener('click' , function() {
    overlayPopup.classList.remove('is-active');
 })

function formatNumber(num){
    return num.toLocaleString('en-US');
};


export {addToCart, deleteFromCart, btnPlusMinus};