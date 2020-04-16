'use strict';
  const openCart = () => {
  const cartButton = document.getElementById('#cart-button'),
      modal = document.querySelector('.modal'),
      btnClose = document.querySelector('.close'),
      btnCancel = document.querySelector('.button-cancel');
      
    const toggleModal = () => {
      modal.classList.toggle('is-open');
    };
    cartButton.addEventListener('click', toggleModal);
      btnCancel.addEventListener('click', toggleModal);
      
    const setOrder = () => {
    const btnOrder = document.querySelector('.button-order'), // кнопка оформить заказ
      modalBody = document.querySelector('.modal-body'),
      btnConfirm = document.querySelector('.button-confirm'),
      btnBack = document.querySelector('.button-back'),
      btnCancel = document.querySelector('.button-cancel'),
      modalTitleCart = document.querySelector('.modal-title-cart'),
      modalTitleDelivery = document.querySelector('.modal-title-delivery'),
      modalDeliveryBody = document.querySelector('.modal-delivery-body');

      const openOrder = () => {
        modalDeliveryBody.style.display = 'flex';
        modalTitleCart.style.display = 'none';
        modalTitleDelivery.style.display = 'block';
        modalBody.style.display = 'none';
        btnOrder.style.display = 'none';
        btnCancel.style.display = 'none';
        btnBack.style.display = 'block';
        btnConfirm.style.display = 'block';
      };
      btnOrder.addEventListener('click', openOrder);

      const backStep = () => {
        modalDeliveryBody.style.display = 'none';
        modalTitleCart.style.display = 'block';
        modalTitleDelivery.style.display = 'none';
        modalBody.style.display = 'block';
        btnOrder.style.display = 'block';
        btnCancel.style.display = 'block';
        btnBack.style.display = 'none';
        btnConfirm.style.display = 'none';
      };
      btnBack.addEventListener('click', backStep);
      btnClose.addEventListener('click', () => {
        toggleModal();
        backStep();
      });
      
    };
    setOrder(); 
};
openCart();

let data = JSON.parse("goods");
console.log(data);
  

  // new WOW().init();

// const loadGoods = (data) => {


// }
