
const buyImg = document.querySelector('#js-buy-model') ;
const modal = document.querySelector('.js-modal') ;
const modalClose = document.querySelector('.js-modal-close') ; 
const modalContainer =document.querySelector('.js-modal-container') ;
const imgBox = document.querySelector('#imgBox') ;
const box = document.querySelectorAll('.box') ;
// const sub = document.querySelector('.product-img-sub')

const modalimgBoxLeft = document.querySelector('#modalimgBoxLeft') ;
const modalimgBoxRight = document.querySelector('#modalimgBoxRight') ;
const modalImgBox = document.querySelector('#modalimgBox') ;
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
// console.log(modalImgBox.src) ;
for(var i = 0 ; i < modalBox.length ;i++){
    modalBox[i].onclick = function transferImg(){
        modalImgBox.src = this.src ;
    }  
}  

const minus = document.querySelector('#minus') ;
const numbercart = document.querySelector('#numbercart') ;
const plus = document.querySelector('#plus') ;
const numbercartnotice = document.querySelector('#numbercartnotice') ;



plus.onclick = function(){
    // console.log(numbercart.textContent) ;
    numbercart.textContent++ ;
}

minus.onclick = function(){
    if(numbercart.textContent > 0 ){
        numbercart.textContent-- ;
    }
    numbercart.textContent = 0 ; 
}









