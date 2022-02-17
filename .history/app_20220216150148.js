
const buyImg = document.querySelector('#js-buy-model') ;
const modal = document.querySelector('.js-modal') ;
const modalClose = document.querySelector('.js-modal-close') ; 
const modalContainer =document.querySelector('.js-modal-container') ;
const imgBox = document.querySelector('#imgBox') ;
const box = document.querySelectorAll('.box') ;
console.log(imgBox.src) ;
for(var i = 0 ; i < box.length ;i++){
    console.log(box.src) ;

}
function buyModal(){
    modal.classList.add('open') ;
}

function hiddenBuyModal(){
    modal.classList.remove('open') ;
}

    for(var i = 0 ; i < box.length ;i++){
        box[i].addEventListener('click' ,function transferImg(){
            imgBox.src = box[i].src ;
        }) ;
    }

    



buyImg.addEventListener('click' , buyModal) ;
modalClose.addEventListener('click' , hiddenBuyModal) ;
modal.addEventListener('click' , hiddenBuyModal) ;
modalContainer.addEventListener('click' , function (event){
    event.stopPropagation()
}) ;





