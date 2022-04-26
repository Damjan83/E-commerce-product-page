const cart = document.querySelector('.cart');
const cartModal = document.querySelector('.cart__modal');
const cartModalEmpty = document.querySelector('.cart__modal-empty');
const cartModalProductQuantity = document.querySelector('.cart__modal-product-price--input-amount');
const cartProductPrice = document.querySelector('.cart-product-price');
const cartProductQuantityPrice = document.querySelector('.cart__modal-product-price-quantity--price');
const cartOrderBox = document.querySelector('.cart__order-box');
const cartOrderNumber = document.querySelector('.cart__order-number');
const deleteProductQuantityBin = document.querySelector('.cart__modal-product-bin');
const btnAddToCart = document.querySelector('.btn__add-to-cart');
const inputAmount = document.querySelector('.container__input-amount');
const btnMinus = document.querySelector('.btn__minus');
const btnPlus = document.querySelector('.btn__plus');


/*------Add to cart------*/ 
const addToCart = () => {
    console.log('test')
    btnAddToCart.addEventListener('click' , () => {
        if(inputAmount.innerHTML > 0) {
            cartOrderNumber.innerHTML = inputAmount.innerHTML;
            cartOrderBox.style.display = 'block';
            cartModalProductQuantity.innerHTML = inputAmount.innerHTML;
            cartProductQuantityPrice.innerHTML = (cartProductPrice.innerHTML * inputAmount.innerHTML).toFixed(2);
            cartModalEmpty.style.display = 'none';
        }
     });
}

/*------Delete from cart------*/ 
const deleteFromCart = () => {
    deleteProductQuantityBin.addEventListener('click' , () => {
        cartModalProductQuantity.innerHTML -= 1;
        cartOrderNumber.innerHTML -= 1;
        inputAmount.innerHTML -= 1;
    
        if(cartModalProductQuantity.innerHTML <= 0 || cartOrderNumber.innerHTML <= 0) {
            cartModalProductQuantity.innerHTML = 0;
            cartOrderNumber.innerHTML = 0;
        }
    
        const quantityNum = parseInt(cartProductQuantityPrice.innerHTML);
        const productPrice = parseInt(cartProductPrice.innerHTML);
        cartProductQuantityPrice.innerHTML = (quantityNum - productPrice).toFixed(2);
        if(cartProductQuantityPrice.innerHTML <= 0) {
            cartProductQuantityPrice.innerHTML = 0;
            cartModal.style.display = 'none';
            cartModalEmpty.style.display = 'none';
            cartOrderBox.style.display ='none';
        }
        
    });
}


/*------Empty cart------*/
const emptyCart = () => {
    cart.addEventListener('click' , () => {
        if(cartModalEmpty.style.display === 'none') {
            cartModalEmpty.style.display = 'block';
        }else{
            cartModalEmpty.style.display = 'none';
        }
        
        if(inputAmount.innerHTML > 0) {
            cartModal.style.display = 'block'; 
            cartModalEmpty.style.display = 'none';
        }   
    });
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