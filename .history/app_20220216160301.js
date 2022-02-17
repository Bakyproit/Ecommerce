
const buyImg = document.querySelector('#js-buy-model') ;
const modal = document.querySelector('.js-modal') ;
const modalClose = document.querySelector('.js-modal-close') ; 
const modalContainer =document.querySelector('.js-modal-container') ;
const imgBox = document.querySelector('#imgBox') ;
const box = document.querySelectorAll('.box') ;
// const sub = document.querySelector('.product-img-sub')

const modalImgBox = document.querySelector('modalimgBox') ;
const modalBox = document.querySelectorAll('.modalBox') ;


function buyModal(){
    modal.classList.add('open') ;
}

function hiddenBuyModal(){
    modal.classList.remove('open') ;
}


    
buyImg.addEventListener('click' , buyModal) ;
modalClose.addEventListener('click' , hiddenBuyModal) ;
modal.addEventListener('click' , hiddenBuyModal) ;
modalContainer.addEventListener('click' , function (event){
    event.stopPropagation()
}) ;

for(var i = 0 ; i < box.length ;i++){
    box[i].onclick = function transferImg(){
        imgBox.src = this.src ;
    }  
}   

for(var i = 0 ; i < modalBox.length ;i++){
    console.log(modalBox[i].src) ;
    modalBox[i].onclick = function transferImg(){
        modalImgBox.src = this.src ;
    }  
}   





