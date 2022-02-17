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
// const sub = document.querySelector('.product-img-sub')

const modalimgBoxLeft = document.querySelector('#modalimgBoxLeft') ;
const modalimgBoxRight = document.querySelector('#modalimgBoxRight') ;
const modalImgBox = document.querySelector('#modalimgBox') ;
const modalBox = document.querySelectorAll('.modalBox') ;

// for(var i = 0 ; i < box.length ;i++){
//     box[i].onclick = function transferImg(){
//         imgBox.src = this.src ;
//         console.log(i) ;
//     }  
// }   
box.forEach((item , index) => {
    item.onclick = function(){
        console.log(index) ;
    }
})
)


// console.log(modalImgBox.src) ;
for(var i = 0 ; i < modalBox.length ;i++){
    modalBox[i].onclick = function transferImg(){
        modalImgBox.src = this.src ;
    }  
}  






// add number cart
const minus = document.querySelector('#minus') ;
const numbercart = document.querySelector('#numbercart') ;
const plus = document.querySelector('#plus') ;
const numbercartnotice = document.querySelector('#numbercartnotice') ;
const addnumbercart = document.querySelector('#addnumbercart') ;



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
}










