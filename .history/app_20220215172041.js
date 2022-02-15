
const buyImg = document.querySelector('#js-buy-model') ;
const modal = document.querySelector('.js-modal') ;
const modalClose = document.querySelector('.js-modal-close') ; 
const modalContainer =document.querySelector('.js-modal-container') ;
console.log(modalClose) ;

function buyModal(){
    modal.classList.add('open') ;
}

function hiddenBuyModal(){
    modal.classList.remove('open') ;
}

buyImg.addEventListener('click' ,)

modalClose.addEventListener('click' , hiddenBuyModal) ;

