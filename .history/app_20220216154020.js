
const buyImg = document.querySelector('#js-buy-model') ;
const modal = document.querySelector('.js-modal') ;
const modalClose = document.querySelector('.js-modal-close') ; 
const modalContainer =document.querySelector('.js-modal-container') ;
const imgBox = document.querySelector('#imgBox') ;
const box = document.querySelectorAll('.box') ;
const sub = document.querySelector('.product-img-sub')

console.log(sub)
function buyModal(){
    modal.classList.add('open') ;
}

function hiddenBuyModal(){
    modal.classList.remove('open') ;
}
for(var i = 0 ; i < box.length ;i++){
    box[i].onclick = function transferImg(){
        imgBox.src = this.src ;
        sub.classList.add('default') ;
    }
    
}

    



buyImg.addEventListener('click' , buyModal) ;
modalClose.addEventListener('click' , hiddenBuyModal) ;
modal.addEventListener('click' , hiddenBuyModal) ;
modalContainer.addEventListener('click' , function (event){
    event.stopPropagation()
}) ;





