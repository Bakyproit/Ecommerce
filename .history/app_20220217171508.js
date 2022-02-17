// modal
const buyImg = document.querySelector('#js-buy-model') ;
const modal = document.querySelector('.js-modal') ;
const modalClose = document.querySelector('.js-modal-close') ; 
const modalContainer =document.querySelector('.js-modal-container') ;

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

// chuyen anh
const imgBox = document.querySelector('#imgBox') ;
const box = document.querySelectorAll('.box') ;

// modal
const modalImgBox = document.querySelector('#modalimgBox') ;
const modalBox = document.querySelectorAll('.modalBox') ;

const modalMain = document.querySelector('.modal-img-main') ;
const modalMainItems = document.querySelectorAll('.modal-img-main-item') ;

const modalimgBoxLeft = document.querySelector('#modalimgBoxLeft') ;
const modalimgBoxRight = document.querySelector('#modalimgBoxRight') ;
const modalItemWidth = modalMainItems[0].offsetWidth ;
const itemlengh = modalMainItems.length ;
let postionX = 0 ; 
let index = 0 ;

modalimgBoxLeft.addEventListener('click' , function(){
    handleSlide(-1) ;
}) ;
modalimgBoxRight.addEventListener('click' , function(){
    handleSlide(1)
}) ;

function handleSlide(dir){
    if(dir === -1){
        index-- ; 
        if(index <= 0){
            index  = 0 ; 
            postionX = 0 ;
            return ;
        }

        postionX = postionX + modalItemWidth ;
        modalMain.style.transform = `translateX(${postionX}px)` ;
        console.log(index) 
        console.log(postionX) ; 
    }else if(dir === 1){
        index++ ; 
        if(index >= itemlengh ){
            index = itemlengh ;
            postionX = -itemlengh-1*modalItemWidth ;
            return ;
        }
        postionX = postionX - modalItemWidth ;
        modalMain.style.transform = `translateX(${postionX}px)` ;
        console.log(index) 
        console.log(postionX) ; 
    }
}


box.forEach((item , index) => {
    item.onclick = function(){
        imgBox.src = item.src ;
    }
})

// modal
modalBox.forEach((item , index) => {
    item.onclick = function(){
        modalImgBox.src = item.src ;
    }

})

// add number cart
const minus = document.querySelector('#minus') ;
const numbercart = document.querySelector('#numbercart') ;
const plus = document.querySelector('#plus') ;
const numbercartnotice = document.querySelector('#numbercartnotice') ;
const numberquantity = document.querySelector('.header__cart-item-quantity') ;

const headercart = document.querySelector('.header__cart') ;
const addnumbercart = document.querySelector('#addnumbercart') ;
const headercartitem = document.querySelector('.header__cart-item') ;

const headercarticon = document.querySelector('.header__cart-item-icon') ;


plus.onclick = function(){
    Number(numbercart.textContent++) ;
}
minus.onclick = function(){
    if(Number(numbercart.textContent)  > 0 ){
        Number(numbercart.textContent--) ;
    }else{
        Number(numbercart.textContent = 0 ) ; 
    }
}
addnumbercart.onclick = function(){
    numbercartnotice.textContent = Number(numbercart.textContent) ;
    numberquantity.textContent = Number(numbercart.textContent) ;
    if(Number(numbercart.textContent) == 0){
        numbercartnotice.classList.remove('cart-list--yes-cart') ;
        headercart.classList.remove('cart-list--yes-cart') ;
    }else{
        numbercartnotice.classList.add('cart-list--yes-cart') ;
        headercart.classList.add('cart-list--yes-cart') ;
    }
    headercartitem.classList.remove('open-cart-item')  ;
}
// xóa ptu
headercarticon.onclick = function(){
    headercartitem.classList.add('open-cart-item')  ;
}










